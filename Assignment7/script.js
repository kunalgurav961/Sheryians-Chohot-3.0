let taskForm = document.getElementById("taskForm");
let taskInput = document.getElementById("taskInput");
let category = document.getElementById("category");
let taskList = document.getElementById("taskList");

let themeBtn = document.getElementById("themeBtn");
let body = document.body;

let total = document.getElementById("total");
let done = document.getElementById("done");
let left = document.getElementById("left");

let clearBtn = document.getElementById("clearBtn");

let search = document.getElementById("search");
let filter = document.getElementById("filter");

let id = 1;

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (taskInput.value == "") {
        return;
    }

    console.log(taskInput.value);
    console.log(taskInput.getAttribute("value"));

    let card = document.createElement("div");
    card.className = "card";

    card.setAttribute("data-id", id);
    card.setAttribute("data-status", "pending");
    card.setAttribute("data-category", category.value);

    let title = document.createElement("h3");
    let text = document.createTextNode(taskInput.value);
    title.append(text);

    let cat = document.createElement("p");
    cat.innerText = "Category : " + category.value;

    let box = document.createElement("div");
    box.className = "btns";

    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.className = "edit";

    let complete = document.createElement("button");
    complete.innerText = "Complete";
    complete.className = "complete";

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.className = "delete";

    box.append(edit);
    box.append(complete);
    box.append(del);

    card.append(title);
    card.append(cat);
    card.append(box);

    taskList.prepend(card);

    taskInput.value = "";

    id++;

    countTask();
});

taskList.addEventListener("click", function (e) {

    let card = e.target.parentElement.parentElement;

    if (e.target.className == "delete") {
        card.remove();
    }

    if (e.target.className == "complete") {

        card.children[0].classList.toggle("done");

        if (card.dataset.status == "pending") {
            card.dataset.status = "completed";
        } else {
            card.dataset.status = "pending";
        }
    }

    if (e.target.className == "edit") {

        let newTask = prompt("Enter New Task");

        if (newTask != "") {
            card.children[0].innerText = newTask;
        }
    }

    countTask();
});

themeBtn.addEventListener("click", function () {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        body.setAttribute("data-theme", "dark");
        themeBtn.innerText = "Light Mode";

    } else {

        body.setAttribute("data-theme", "light");
        themeBtn.innerText = "Dark Mode";

    }

});

clearBtn.addEventListener("click", function () {

    taskList.innerHTML = "";

    countTask();

});

search.addEventListener("keyup", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        let name = card.children[0].innerText.toLowerCase();

        if (name.includes(search.value.toLowerCase())) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

filter.addEventListener("change", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        if (filter.value == "All") {

            card.style.display = "block";

        } else if (card.dataset.category == filter.value) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

function countTask() {

    let cards = document.querySelectorAll(".card");

    total.innerText = cards.length;

    let c = 0;

    cards.forEach(function (card) {

        if (card.dataset.status == "completed") {
            c++;
        }

    });

    done.innerText = c;

    left.innerText = cards.length - c;

}

let grand = document.getElementById("one");
let parent = document.getElementById("two");
let child = document.getElementById("three");

grand.addEventListener("click", function () {
    console.log("Grandparent Bubble");
});

parent.addEventListener("click", function () {
    console.log("Parent Bubble");
});

child.addEventListener("click", function () {
    console.log("Child Bubble");
});

grand.addEventListener("click", function () {
    console.log("Grandparent Capture");
}, true);

parent.addEventListener("click", function () {
    console.log("Parent Capture");
}, true);

child.addEventListener("click", function () {
    console.log("Child Capture");
}, true);

let first = document.createElement("p");
first.innerText = "Task List";
taskList.before(first);

let last = document.createElement("p");
last.innerText = "End";
taskList.after(last);

let oldText = document.createElement("p");
oldText.innerText = "Loading...";
taskList.prepend(oldText);

let newText = document.createElement("p");
newText.innerText = "Tasks Loaded";
oldText.replaceWith(newText);

console.log(taskInput.hasAttribute("value"));

taskInput.removeAttribute("value");