const userInput = document.querySelector('#taskInput')
const taskButton = document.querySelector('#addTaskBtn')
const taskList = document.querySelector('#taskList')

function addTask() {

    const listItem = document.createElement('li')

    const deletebtn = document.createElement('button')

    const taskText = document.createElement('span')


    const task = userInput.value.trim()

    if (task === "") {
        alert('Enter a task first')
        return;
    }

    taskText.textContent =`${task}`


    listItem.appendChild(taskText) 

    listItem.classList.add('task')

    deletebtn.textContent = 'Delete'

    listItem.appendChild(deletebtn)



    deletebtn.addEventListener("click", () => {
        listItem.remove()
    })


    taskList.appendChild(listItem)
    userInput.value = ""
    userInput.focus();
}

taskButton.addEventListener('click', addTask)

