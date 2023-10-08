document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            const taskTextSpan = document.createElement("span");
            const deleteButton = document.createElement("button");

            taskTextSpan.textContent = taskText;
            li.appendChild(taskTextSpan);

            deleteButton.textContent = "Delete";
            deleteButton.classList.add("deleteButton");
            deleteButton.addEventListener("click", function () {
                li.remove();
            });
            li.appendChild(deleteButton);

            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
        }
    });
});
