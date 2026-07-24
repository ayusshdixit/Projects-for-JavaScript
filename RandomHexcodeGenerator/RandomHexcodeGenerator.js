const GenerateButton = document.querySelector('#generateBtn')
const ColorCode = document.querySelector('#colorCode')
const CopyButton = document.querySelector('#copybtn')
const History = document.querySelector(".history")


let colorHistory;
let hex = "0123456789ABCDEF"

function randomHexCode() {
    let GeneratedHexCode = "#"
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hex.length)
        
        GeneratedHexCode += hex[randomIndex]
    }
    document.body.style.backgroundColor = GeneratedHexCode
    
    return GeneratedHexCode
    
    
}

GenerateButton.addEventListener('click', (e) => {
    const color = randomHexCode()
    
    ColorCode.textContent = color;
    
    const p = document.createElement("p");
    p.textContent = color

    
  
  History.appendChild(p)


})


CopyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(ColorCode.textContent);
    alert(`Copied: ${ColorCode.textContent}`);
});


