// ===============================
// SELECT ELEMENTS
// ===============================

const dashboard = document.getElementById("dashboard");

const cards = document.querySelectorAll(".card");

const features = document.querySelectorAll(".feature");

const backButtons = document.querySelectorAll(".back-btn");

const themeButton = document.getElementById("theme-btn");

// ===============================
// SHOW FEATURE SECTION
// ===============================

function showSection(sectionId) {

    dashboard.classList.add("hidden");

    features.forEach(function (section) {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");

}

// ===============================
// BACK TO DASHBOARD
// ===============================

function showDashboard() {

    dashboard.classList.remove("hidden");

    features.forEach(function (section) {
        section.classList.add("hidden");
    });

}

// ===============================
// CARD CLICK EVENTS
// ===============================

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const target = card.dataset.target;

        showSection(target);

    });

});

// ===============================
// BACK BUTTON EVENTS
// ===============================

backButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        showDashboard();

    });

});

// ===============================
// THEME SWITCH
// ===============================

function loadTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

    }

}

function toggleTheme() {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

}

themeButton.addEventListener("click", toggleTheme);

// ===============================
// LOAD THEME ON PAGE LOAD
// ===============================

loadTheme();

// ===============================
// TODO LIST
// ===============================

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ===============================
// SAVE TASKS
// ===============================

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const li = document.createElement("li");

        if(task.done){
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        }

        if(task.important){
            li.style.border = "2px solid red";
        }

        // Task Text
        const text = document.createElement("span");
        text.innerText = task.name;

        // Done Button
        const doneBtn = document.createElement("button");
        doneBtn.innerText = "Done";

        doneBtn.addEventListener("click", function(){

            tasks[index].done = !tasks[index].done;

            saveTasks();

            displayTasks();

        });

        // Important Button
        const importantBtn = document.createElement("button");
        importantBtn.innerText = "Important";

        importantBtn.addEventListener("click", function(){

            tasks[index].important = !tasks[index].important;

            saveTasks();

            displayTasks();

        });

        // Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", function(){

            tasks.splice(index,1);

            saveTasks();

            displayTasks();

        });

        li.appendChild(text);
        li.appendChild(document.createElement("br"));
        li.appendChild(doneBtn);
        li.appendChild(importantBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

}

// ===============================
// ADD TASK
// ===============================

function addTask() {

    const taskName = taskInput.value.trim();

    if(taskName === ""){
        alert("Please enter a task.");
        return;
    }

    const task = {

        name: taskName,
        done: false,
        important: false

    };

    tasks.push(task);

    saveTasks();

    displayTasks();

    taskInput.value = "";

}

addTaskBtn.addEventListener("click", addTask);

// Add task using Enter key
taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        addTask();

    }

});

// ===============================
// LOAD TASKS
// ===============================

displayTasks();

// ===============================
// POMODORO TIMER
// ===============================

const timer = document.getElementById("timer");

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

let totalSeconds = 25 * 60;
let interval = null;

// ===============================
// UPDATE TIMER
// ===============================

function updateTimer() {

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timer.innerText = minutes + ":" + seconds;

}

// ===============================
// START TIMER
// ===============================

function startTimer() {

    if (interval !== null) {
        return;
    }

    interval = setInterval(function () {

        if (totalSeconds > 0) {

            totalSeconds--;

            updateTimer();

        } else {

            clearInterval(interval);

            interval = null;

            alert("Pomodoro Session Completed!");

        }

    }, 1000);

}

// ===============================
// PAUSE TIMER
// ===============================

function pauseTimer() {

    clearInterval(interval);

    interval = null;

}

// ===============================
// RESET TIMER
// ===============================

function resetTimer() {

    clearInterval(interval);

    interval = null;

    totalSeconds = 25 * 60;

    updateTimer();

}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimer();

// ===============================
// MOTIVATION QUOTES
// ===============================

const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote-btn");

// ===============================
// FETCH QUOTE
// ===============================

async function getQuote() {

    quote.innerText = "Loading...";

    try {

        const response = await fetch("https://api.quotable.io/random");

        const data = await response.json();

        quote.innerText = `"${data.content}" — ${data.author}`;

    } catch (error) {

        quote.innerText = "Unable to load quote. Please try again.";

        console.log(error);

    }

}

newQuoteBtn.addEventListener("click", getQuote);

// Load one quote when page opens
getQuote();

