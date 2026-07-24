const password = document.querySelector('#password')
const length = document.querySelector('#length')



const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");



const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-={}[]<>?/";


const generateBtn = document.querySelector("#generateBtn");
const copyBtn = document.querySelector("#copyBtn");

generateBtn.addEventListener('click', (e) => {


    let chars = " "

    if (uppercase.checked) {
        chars += upperChars
    }
    if (lowercase.checked) {
        chars += lowerChars
    }
    if (numbers.checked) {
        chars += numberChars
    }
    if (symbols.checked) {
        chars += symbolChars
    }

    if (chars == "") {
        alert('Please select atleast one')
        return
    }



    let generatePassword = " ";

    for (let i = 0; i < Numbers(length.value); i++) {

        const randomIndex = Math.floor(Math.random() * chars.length)

        generatePassword =+ chars[randomIndex]

    }

    password.value = generatePassword;


})

copyBtn.addEventListener(click, (e) => {
    if (password.value === "") {
        alert('Generate a password first')
        return
    }

    navigator.clipboard.writeText(password.value)

    alert("Password copied !")

});