const dice = document.querySelector('#dice')
const result = document.querySelector('#result')
const rollBtn = document.querySelector('#rollBtn')
const rollHistory = document.querySelector('.rollHistory')


const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {

    const list = document.createElement('li')

    const randomNumber = Math.floor(Math.random() * 6) + 1

    result.textContent = `${randomNumber}`

    dice.textContent = diceFaces[randomNumber - 1]

    list.textContent = `the number rolled was ${randomNumber} ${diceFaces[randomNumber - 1]} `

    if (rollHistory.children.length >= 5) {

        rollHistory.removeChild(rollHistory.firstElementChild)

    }

    rollHistory.appendChild(list)



}

rollBtn.addEventListener('click', rollDice)