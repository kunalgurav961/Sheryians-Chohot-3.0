const storageKeys = {
    theme: "productivity-theme",
    tasks: "productivity-tasks",
    goals: "productivity-goals",
    planner: "productivity-planner"
};

const dashboard = document.getElementById("dashboard");
const featureScreens = document.querySelectorAll(".feature-screen");
const toolCards = document.querySelectorAll(".tool-card");
const backButtons = document.querySelectorAll(".back-btn");

const currentDate = document.getElementById("current-date");
const currentTime = document.getElementById("current-time");
const greeting = document.getElementById("greeting");
const dayMessage = document.getElementById("day-message");

const themeToggle = document.getElementById("theme-toggle");
const themeCheckbox = document.getElementById("theme-checkbox");
const themeIcon = document.getElementById("theme-icon");

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.getElementById("goal-list");

const plannerList = document.getElementById("planner-list");

const timerDisplay = document.getElementById("timer-display");
const timerStatus = document.getElementById("timer-status");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

const weatherTemp = document.getElementById("weather-temp");
const weatherSummary = document.getElementById("weather-summary");
const weatherDetailTemp = document.getElementById("weather-detail-temp");
const weatherDetailSummary = document.getElementById("weather-detail-summary");
const weatherWind = document.getElementById("weather-wind");
const weatherUpdated = document.getElementById("weather-updated");
const refreshWeatherBtn = document.getElementById("refresh-weather-btn");

let tasks = readStorage(storageKeys.tasks, []);
let goals = readStorage(storageKeys.goals, []);
let planner = readStorage(storageKeys.planner, {});
let timerSeconds = 25 * 60;
let timerInterval = null;
let lastFallbackQuoteIndex = -1;

const fallbackQuotes = [
    {
        content: "Small progress is still progress. Pick one useful thing and begin.",
        author: "Dashboard fallback"
    },
    {
        content: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        content: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        content: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },
    {
        content: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    }
];

function readStorage(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (error) {
        return fallback;
    }
}

function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function showFeature(sectionId) {
    dashboard.classList.add("hidden");
    featureScreens.forEach((screen) => screen.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showDashboard() {
    dashboard.classList.remove("hidden");
    featureScreens.forEach((screen) => screen.classList.add("hidden"));
    window.scrollTo({ top: 0, behavior: "smooth" });
}

toolCards.forEach((card) => {
    card.addEventListener("click", () => showFeature(card.dataset.target));
});

backButtons.forEach((button) => {
    button.addEventListener("click", showDashboard);
});

function setTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark", isDark);
    themeCheckbox.checked = isDark;
    themeIcon.textContent = isDark ? "Sun" : "Moon";
    localStorage.setItem(storageKeys.theme, theme);
}

function toggleTheme() {
    setTheme(document.body.classList.contains("dark") ? "light" : "dark");
}

themeToggle.addEventListener("click", toggleTheme);
themeCheckbox.addEventListener("change", () => setTheme(themeCheckbox.checked ? "dark" : "light"));

function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();

    currentDate.textContent = now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    currentTime.textContent = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    if (hour < 12) {
        greeting.textContent = "Good morning";
        dayMessage.textContent = "Start with the task that makes everything else easier.";
        document.body.style.setProperty("--dynamic-bg", "linear-gradient(135deg, #38bdf8, #fde68a)");
    } else if (hour < 17) {
        greeting.textContent = "Good afternoon";
        dayMessage.textContent = "Keep the dashboard close and the next step obvious.";
        document.body.style.setProperty("--dynamic-bg", "linear-gradient(135deg, #60a5fa, #34d399)");
    } else if (hour < 20) {
        greeting.textContent = "Good evening";
        dayMessage.textContent = "Wrap up the essentials and leave a clean trail for tomorrow.";
        document.body.style.setProperty("--dynamic-bg", "linear-gradient(135deg, #f97316, #7c3aed)");
    } else {
        greeting.textContent = "Good night";
        dayMessage.textContent = "Slow the pace, finish gently, and protect tomorrow's energy.";
        document.body.style.setProperty("--dynamic-bg", "linear-gradient(135deg, #111827, #4338ca)");
    }
}

function createItemElement(item, index, collection, saveKey, render) {
    const li = document.createElement("li");
    li.className = "item";
    li.classList.toggle("completed", item.completed);
    li.classList.toggle("important", item.important);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    checkbox.setAttribute("aria-label", "Mark complete");
    checkbox.addEventListener("change", () => {
        collection[index].completed = checkbox.checked;
        writeStorage(saveKey, collection);
        render();
    });

    const text = document.createElement("span");
    text.className = "item-text";
    text.textContent = item.text;

    const importantBtn = document.createElement("button");
    importantBtn.type = "button";
    importantBtn.textContent = "!";
    importantBtn.title = "Toggle important";
    importantBtn.classList.toggle("active", item.important);
    importantBtn.addEventListener("click", () => {
        collection[index].important = !collection[index].important;
        writeStorage(saveKey, collection);
        render();
    });

    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
        collection[index].completed = !collection[index].completed;
        writeStorage(saveKey, collection);
        render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Del";
    deleteBtn.addEventListener("click", () => {
        collection.splice(index, 1);
        writeStorage(saveKey, collection);
        render();
    });

    li.append(checkbox, text, importantBtn, doneBtn, deleteBtn);
    return li;
}

function renderTasks() {
    taskList.innerHTML = "";
    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="item"><span></span><span class="item-text">No tasks yet.</span></li>';
        return;
    }
    tasks.forEach((task, index) => {
        taskList.appendChild(createItemElement(task, index, tasks, storageKeys.tasks, renderTasks));
    });
}

function renderGoals() {
    goalList.innerHTML = "";
    if (goals.length === 0) {
        goalList.innerHTML = '<li class="item"><span></span><span class="item-text">No goals yet.</span></li>';
        return;
    }
    goals.forEach((goal, index) => {
        goalList.appendChild(createItemElement(goal, index, goals, storageKeys.goals, renderGoals));
    });
}

function addListItem(event, input, collection, saveKey, render) {
    event.preventDefault();
    const text = input.value.trim();

    if (!text) {
        input.focus();
        return;
    }

    collection.push({
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        text,
        completed: false,
        important: false
    });

    input.value = "";
    writeStorage(saveKey, collection);
    render();
}

taskForm.addEventListener("submit", (event) => addListItem(event, taskInput, tasks, storageKeys.tasks, renderTasks));
goalForm.addEventListener("submit", (event) => addListItem(event, goalInput, goals, storageKeys.goals, renderGoals));

function buildPlanner() {
    plannerList.innerHTML = "";

    for (let hour = 6; hour <= 22; hour += 1) {
        const key = String(hour).padStart(2, "0");
        const row = document.createElement("div");
        row.className = "planner-row";

        const label = document.createElement("label");
        label.htmlFor = `planner-${key}`;
        label.textContent = formatHour(hour);

        const textarea = document.createElement("textarea");
        textarea.id = `planner-${key}`;
        textarea.placeholder = "Add a note for this hour";
        textarea.value = planner[key] || "";
        textarea.addEventListener("input", () => {
            planner[key] = textarea.value;
            writeStorage(storageKeys.planner, planner);
        });

        row.append(label, textarea);
        plannerList.appendChild(row);
    }
}

function formatHour(hour) {
    const date = new Date();
    date.setHours(hour, 0, 0, 0);
    return date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
    const seconds = (timerSeconds % 60).toString().padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (timerInterval) {
        return;
    }

    timerStatus.textContent = "Focus mode is running";
    timerInterval = setInterval(() => {
        timerSeconds -= 1;
        updateTimerDisplay();

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            timerSeconds = 25 * 60;
            timerStatus.textContent = "Session complete. Take a short break.";
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerStatus.textContent = "Paused";
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 25 * 60;
    timerStatus.textContent = "Ready to focus";
    updateTimerDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

async function fetchQuote() {
    quoteText.textContent = "Loading a quote...";
    quoteAuthor.textContent = "";

    try {
        const response = await fetch(`https://api.quotable.io/random?tags=inspirational|success|wisdom&_=${Date.now()}`, {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error("Quote request failed");
        }

        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = data.author ? `- ${data.author}` : "";
    } catch (error) {
        const quote = getFallbackQuote();
        quoteText.textContent = `"${quote.content}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
    }
}

newQuoteBtn.addEventListener("click", fetchQuote);

function getFallbackQuote() {
    let index = Math.floor(Math.random() * fallbackQuotes.length);

    if (fallbackQuotes.length > 1) {
        while (index === lastFallbackQuoteIndex) {
            index = Math.floor(Math.random() * fallbackQuotes.length);
        }
    }

    lastFallbackQuoteIndex = index;
    return fallbackQuotes[index];
}

const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm"
};

function setWeatherLoading(message) {
    weatherTemp.textContent = "Loading";
    weatherSummary.textContent = message;
    weatherDetailTemp.textContent = "Loading";
    weatherDetailSummary.textContent = message;
    weatherWind.textContent = "Wind: --";
    weatherUpdated.textContent = "Updated: --";
}

function setWeatherError(message) {
    weatherTemp.textContent = "Unavailable";
    weatherSummary.textContent = message;
    weatherDetailTemp.textContent = "Weather unavailable";
    weatherDetailSummary.textContent = message;
}

function getPosition() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by this browser."));
            return;
        }

        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 300000
        });
    });
}

async function loadWeather() {
    setWeatherLoading("Requesting your location...");

    try {
        const position = await getPosition();
        const { latitude, longitude } = position.coords;
        const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
        endpoint.search = new URLSearchParams({
            latitude,
            longitude,
            current: "temperature_2m,weather_code,wind_speed_10m",
            timezone: "auto"
        });

        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Weather request failed");
        }

        const data = await response.json();
        const current = data.current;
        const summary = weatherCodes[current.weather_code] || "Current conditions";
        const temp = `${Math.round(current.temperature_2m)} C`;
        const wind = `${Math.round(current.wind_speed_10m)} km/h`;
        const updated = new Date(current.time).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit"
        });

        weatherTemp.textContent = temp;
        weatherSummary.textContent = summary;
        weatherDetailTemp.textContent = temp;
        weatherDetailSummary.textContent = summary;
        weatherWind.textContent = `Wind: ${wind}`;
        weatherUpdated.textContent = `Updated: ${updated}`;
    } catch (error) {
        setWeatherError(error.message || "Unable to load weather right now.");
    }
}

refreshWeatherBtn.addEventListener("click", loadWeather);

function initialize() {
    setTheme(localStorage.getItem(storageKeys.theme) || "light");
    updateDateTime();
    setInterval(updateDateTime, 1000);
    renderTasks();
    renderGoals();
    buildPlanner();
    updateTimerDisplay();
    fetchQuote();
    loadWeather();
}

initialize();
