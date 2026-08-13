const userInput = document.querySelector("#input-Habit")
const list = document.querySelector("#list")
const btn = document.querySelector("#btn")
const counter = document.querySelector("#counter")
const clearBtn =document.querySelector("#clearBtn")


// =====================================
// LOAD HABITS FROM LOCAL STORAGE
// =====================================

const savedHabits = localStorage.getItem("habits")

let habits = savedHabits ? JSON.parse(savedHabits) : []

let editHabit = null


// =====================================
// SAVE HABITS
// =====================================

function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits))
}


// =====================================
// RENDER HABITS
// =====================================

function renderHabits() {

    // Clear the current DOM
    list.innerHTML = ""

    habits.forEach((habit) => {

        const li = document.createElement("li")
        const habitText = document.createElement("span")
        const deleteBtn = document.createElement("button")
        const checkBox = document.createElement("input")
        const editBtn = document.createElement("button")


        // -------------------------
        // Habit text
        // -------------------------

        habitText.textContent = habit.text


        // -------------------------
        // Checkbox
        // -------------------------

        checkBox.type = "checkbox"

        checkBox.checked = habit.completed

        if (habit.completed) {
            li.classList.add("completed")
        }


        // -------------------------
        // Delete button
        // -------------------------

        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", () => {

            const index = habits.indexOf(habit)

            habits.splice(index, 1)

            saveHabits()

            renderHabits()
        })


        // -------------------------
        // Checkbox change
        // -------------------------

        checkBox.addEventListener("change", () => {

            habit.completed = checkBox.checked

            if (checkBox.checked) {
                li.classList.add("completed")
            } else {
                li.classList.remove("completed")
            }

            saveHabits()

            updateCounter()
        })


        // -------------------------
        // Edit button
        // -------------------------

        editBtn.textContent = "Edit"

        editBtn.addEventListener("click", () => {

            userInput.value = habit.text

            editHabit = habit
        })


        // -------------------------
        // Put elements inside li
        // -------------------------

        li.appendChild(habitText)

        li.appendChild(editBtn)

        li.appendChild(checkBox)

        li.appendChild(deleteBtn)

        list.appendChild(li)
    })

    updateCounter()
}


// =====================================
// ADD / UPDATE BUTTON
// =====================================

btn.addEventListener("click", () => {

    if (!userInput.value.trim()) {
        return
    }


    // =================================
    // UPDATE EXISTING HABIT
    // =================================

    if (editHabit !== null) {

        editHabit.text = userInput.value

        saveHabits()

        renderHabits()

        editHabit = null

        userInput.value = ""

        return
    }


    // =================================
    // ADD NEW HABIT
    // =================================

    const habit = {
        text: userInput.value,
        completed: false
    }

    habits.push(habit)

    saveHabits()

    renderHabits()

    userInput.value = ""
})


// =====================================
// COUNTER
// =====================================

function updateCounter() {

    let completeCount = 0

    habits.forEach((habit) => {

        if (habit.completed) {
            completeCount++
        }
    })

    const total = habits.length

    counter.textContent = `Completed: ${completeCount}/${total}`
}


// =====================================
// INITIAL RENDER
// =====================================


userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btn.click()
    }
})

clearBtn.addEventListener("click" , ()=>{
    
    habits = []
    
    saveHabits()
    
    renderHabits()
    
})

renderHabits()