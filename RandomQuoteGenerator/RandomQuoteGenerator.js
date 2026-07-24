const quotes = [
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        quote: "Programs must be written for people to read.",
        author: "Harold Abelson"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        quote: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs"
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    }
];



const displayedQuote = document.querySelector("#quote")
const displayedAuthor = document.querySelector("#author")
const generateBtn = document.querySelector("#generateBtn")


let preview = -1;

function displayQuotes() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length)
    } while (preview === randomIndex)

    const quote = quotes[randomIndex].quote
    const author = quotes[randomIndex].author

    displayedQuote.textContent = quote
    displayedAuthor.textContent = author

    preview = randomIndex
}

generateBtn.addEventListener('click', displayQuotes)
