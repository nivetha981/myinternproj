document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function updateLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
                <button onclick="toggleTask(${index})">${task.completed ? 'Uncomplete' : 'Complete'}</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push({ text: taskText, completed: false });
            updateLocalStorage();
            renderTasks();
            taskInput.value = "";
        }
    }

    function editTask(index) {
        const newTaskText = prompt("Edit task:", tasks[index].text);
        if (newTaskText !== null) {
            tasks[index].text = newTaskText.trim();
            updateLocalStorage();
            renderTasks();
        }
    }

    function deleteTask(index) {
        const confirmDelete = confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            tasks.splice(index, 1);
            updateLocalStorage();
            renderTasks();
        }
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        updateLocalStorage();
        renderTasks();
    }

    renderTasks();

    // Event listeners
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
