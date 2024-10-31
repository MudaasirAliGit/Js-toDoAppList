const modeSelect = document.getElementById('mode');

        modeSelect.addEventListener('change', function() {
            if (modeSelect.value === 'dark') {
                document.body.style.backgroundColor = '#000';
                document.body.style.color = 'white';
            } else {
                document.body.style.backgroundColor = '#fff';
                document.body.style.color = 'black';
            }
        });

function readData() {
    let taskValue = document.getElementById("get").value;

    let taskDiv = document.createElement("div");

    taskDiv.textContent = taskValue;

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-circle-xmark";
    deleteIcon.style.marginLeft = "10px";
    deleteIcon.style.cursor = "pointer";

    deleteIcon.onclick = function() {
        taskDiv.remove();
    };

    taskDiv.appendChild(deleteIcon);

    document.getElementById("task-added-here").appendChild(taskDiv);

    document.getElementById("get").value = "";
}

// Add new task and save it to localStorage
function readData() {
    let taskValue = document.getElementById("get").value;

    if (taskValue.trim() === "") return; // Ignore empty tasks

    // Create task div
    let taskDiv = document.createElement("div");
    taskDiv.textContent = taskValue;

    // Create delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-circle-xmark";
    deleteIcon.style.marginLeft = "10px";
    deleteIcon.style.cursor = "pointer";

    // Remove task on icon click
    deleteIcon.onclick = function() {
        taskDiv.remove();
        removeTaskFromLocalStorage(taskValue);
    };

    taskDiv.appendChild(deleteIcon);

    document.getElementById("task-added-here").appendChild(taskDiv);

    saveTaskToLocalStorage(taskValue);

    document.getElementById("get").value = ""; // Clear input field
}

// Save task to localStorage
function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage on page load
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(taskValue => {
        let taskDiv = document.createElement("div");
        taskDiv.textContent = taskValue;

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-circle-xmark";
        deleteIcon.style.marginLeft = "10px";
        deleteIcon.style.cursor = "pointer";

        deleteIcon.onclick = function() {
            taskDiv.remove();
            removeTaskFromLocalStorage(taskValue);
        };

        taskDiv.appendChild(deleteIcon);

        document.getElementById("task-added-here").appendChild(taskDiv);
    });
}

// Load tasks when the page is loaded
document.addEventListener("DOMContentLoaded", loadTasks);
