const balance = document.querySelector('#balance')

const income = document.querySelector('#income')

const expense = document.querySelector('#expense')

const description = document.querySelector('#description')

const amount = document.querySelector('#amount')

const date = document.querySelector('#date')

const category = document.querySelector('#category')

const transactionList = document.querySelector('#transactionList')

const filterButton = document.querySelectorAll('.filter-btn')

const transactionForm = document.querySelector('#transactionForm');

const type = document.querySelector('#type');

const storedData = localStorage.getItem("transactions");

const transactions = JSON.parse(storedData) || [];

displayTransactions(transactions);

updateSummary();

transactionForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const categoryValue = category.value;

    const dateValue = date.value;

    const descriptionValue = description.value.trim()

    const amountValue = Number(amount.value);

    const typeValue = type.value

    const transaction = {
        id: Date.now(),
        description: descriptionValue,
        category: categoryValue,
        amount: amountValue,
        type: typeValue,
        date: dateValue
    }

    transactions.push(transaction)

    localStorage.setItem("transactions", JSON.stringify(transactions));

    displayTransactions(transactions)

    updateSummary();

    transactionForm.reset()

})

function displayTransactions(transactionArray) {

    transactionList.innerHTML = ""

    transactionArray.forEach((transaction) => {
        const li = document.createElement('li')

        li.textContent = ` ${transaction.description} | ${transaction.category} | ${transaction.amount}| ${transaction.type}| ${transaction.date}`


        const deleteBtn = document.createElement('button')

        deleteBtn.textContent = 'Delete'

        transactionList.appendChild(li)
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {

            const updatedTransactions = transactions.filter((item) => {
                return item.id !== transaction.id
            })

            transactions.splice(0, transactions.length, ...updatedTransactions)

            localStorage.setItem("transactions", JSON.stringify(transactions));

            displayTransactions(transactions);

            updateSummary();

        })

    })



}

/*
    Displays the transactions from the provided array.

    - Clears the existing transaction list.
    - Loops through each transaction in the given array.
    - Creates a new <li> element.
    - Adds a Delete button.
    - Appends everything to the DOM.

    The array can be:
    - the complete `transactions` array
    - a filtered array (income or expense)
    - any other transaction array
*/


filterButton.forEach((btn) => {

    btn.addEventListener("click", () => {

        const filter = btn.dataset.filter;

        if (filter === "all") {
            displayTransactions(transactions);
        }

        else if (filter === "income") {

            const filterIncome = transactions.filter((item) => {
                return item.type === "income";
            });

            displayTransactions(filterIncome);
        }

        else if (filter === "expense") {

            const filterExpense = transactions.filter((item) => {
                return item.type === "expense";
            });

            displayTransactions(filterExpense);
        }

    });

});


function updateSummary() {

    let totalIncome = 0;

    let totalExpense = 0


    transactions.forEach((transaction) => {

        if (transaction.type === 'income') {

            totalIncome += transaction.amount
        }
        else {

            totalExpense += transaction.amount
        }
    })

    expense.textContent = totalExpense

    income.textContent = totalIncome

    balance.textContent = totalIncome - totalExpense;


}


