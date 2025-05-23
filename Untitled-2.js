document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">❌</button>
        `;

        listItem.querySelector("span").addEventListener("click", () => {
            listItem.classList.toggle("completed");
        });

        listItem.querySelector(".deleteBtn").addEventListener("click", () => {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = "";
    });
});