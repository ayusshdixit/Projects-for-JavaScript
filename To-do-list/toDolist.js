const userInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {

    const task = userInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new paragraph
    const p = document.createElement("p");

    // Add task text
    p.textContent = task;

    p.classList.add('task')

    p.addEventListener('click', (e) => {
        p.classList.toggle('completed')
    })


    // Add it to the task list
    taskList.appendChild(p);

    // Clear the input
    userInput.value = "";

});