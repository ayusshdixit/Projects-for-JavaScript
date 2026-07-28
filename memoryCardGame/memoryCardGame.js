const restartButton = document.querySelector("#restartBtn");
const gameBoard = document.querySelector("#gameBoard");
const cards = document.querySelectorAll(".card");
const message = document.querySelector("#message");
const moveCounter = document.querySelector("#moveCounter");

let firstCard = null;
let secondCard = null;
let isChecking = false;
let moves = 0;

// Move Counter



// Card Click Events
cards.forEach((card) => {
    card.addEventListener("click", () => {

        // Don't allow clicks while checking cards
        if (isChecking) {
            return;
        }

        // Ignore already matched cards
        if (card.classList.contains("matched")) {
            return;
        }

        // Flip the selected card
        card.classList.add("flipped");

        // First card selected
        if (firstCard === null) {
            firstCard = card;
            return;
        }

        // Prevent clicking the same card twice
        if (firstCard === card) {
            return;
        }

        // Second card selected
        secondCard = card;
        isChecking = true;

        // Increase move count
        moves++;
        moveCounter.textContent = `Moves: ${moves}`;

        checkForMatch();
    });
});

// Check if cards match
function checkForMatch() {

    if (firstCard.dataset.value === secondCard.dataset.value) {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        
        const matchedCards = document.querySelectorAll(".card.matched");//14

        if (matchedCards.length === cards.length) {
            message.innerHTML = `🎉 <strong>Congratulations!</strong><br>You Won!`;
        }

        resetTurns();

    } else {

        setTimeout(() => {

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetTurns();

        }, 1000);
    }
}

// Reset selected cards
function resetTurns() {
    firstCard = null;
    secondCard = null;
    isChecking = false;
}

// Shuffle cards
function shuffleCards() {
    const cardArray = Array.from(cards);

    cardArray.sort(() => Math.random() - 0.5);

    cardArray.forEach((card) => {
        gameBoard.appendChild(card);
    });
}

// Restart Game
restartButton.addEventListener("click", () => {

    resetTurns();

    moves = 0;
    moveCounter.textContent = `Moves: ${moves}`;

    message.textContent = "";

    cards.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.remove("matched");
    });

    shuffleCards();
});

// Shuffle cards when the page loads
shuffleCards();