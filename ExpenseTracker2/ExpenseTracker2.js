const balance = document.querySelector('#balance')

const income = document.querySelector('#income')

const expense = document.querySelector('#expense')

const transactionForm = document.querySelector('#transactionForm')

const description = document.querySelector('#description')

const amount = document.querySelector('#amount')

const category = document.querySelector('#category')

const date = document.querySelector('#date')

const filterBtn = document.querySelectorAll(".filter-btn")

const type = document.querySelector('#type')

const transactionList = document.querySelector("#transactionList")

const transactions = []

let editingId = null


displayTransactions(transactions);

updateSummary();



transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const categoryValue = category.value

    const amountValue = Number(amount.value)

    const dateValue = date.value

    const descriptionValue = description.value

    const typeValue = type.value

    if (editingId !== null) {

        const transactionToEdit = transactions.find((item) => {
            return item.id === editingId
        })
        transactionToEdit.description = descriptionValue

        transactionToEdit.amount = amountValue

        transactionToEdit.type = typeValue

        transactionToEdit.date = dateValue

        transactionToEdit.category = categoryValue


    }
    else {


        let transaction = {

            id: Date.now(),
            category: categoryValue,
            description: descriptionValue,
            amount: amountValue,
            date: dateValue,
            type: typeValue

        }

        transactions.push(transaction)
    }

    editingId = null

    displayTransactions(transactions);

    updateSummary();

    transactionForm.reset()

})

function displayTransactions(transactionArray) {

    transactionList.innerHTML = "";

    transactionArray.forEach((transaction) => {


        const deleteBtn = document.createElement('button')

        const li = document.createElement('li');

        const editBtn = document.createElement('button')

        editBtn.textContent = "Edit"

        deleteBtn.textContent = "Delete"

        li.textContent = `${transaction.description} | ${transaction.category} | ${transaction.type} ${transaction.date} | ${transaction.amount} `

        transactionList.appendChild(li)

        li.appendChild(deleteBtn)

        li.appendChild(editBtn)

        deleteBtn.addEventListener('click', () => {

            const updatedTransactions = transactions.filter((item) => {

                return item.id !== transaction.id

            })

            transactions.splice(
                0,
                transactions.length,
                ...updatedTransactions
            );

            displayTransactions(transactions);
            updateSummary();
        })

        editBtn.addEventListener('click', () => {

            description.value = transaction.description

            category.value = transaction.category

            amount.value = transaction.amount

            type.value = transaction.type

            date.value = transaction.date

            editingId = transaction.id;


        })
    })





}

function updateSummary() {

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((transaction) => {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }

    });

    income.textContent = totalIncome;
    expense.textContent = totalExpense;
    balance.textContent = totalIncome - totalExpense;
}

filterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent.trim() === "All") {
            displayTransactions(transactions)
        }
        else if (btn.textContent.trim() === "Income") {
            const filterIncome = transactions.filter((item) => {
                return item.type === "income"

            })

            displayTransactions(filterIncome)
        }
        else if (btn.textContent.trim() === "Expense") {
            const filterExpense = transactions.filter((item) => {
                return item.type === 'expense'
            })

            displayTransactions(filterExpense)
        }
    })
})