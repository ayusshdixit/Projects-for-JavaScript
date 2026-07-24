const display = document.querySelector('#display')

const startButton = document.querySelector('#startBtn')
const stopButton = document.querySelector('#stopBtn')
const resetButton = document.querySelector('#resetBtn')


let seconds = 0
let intervalId =  null   

function updateDisplay() {

   let hrs = Math.floor(seconds / 3600)
   let minutes = Math.floor((seconds % 3600) / 60)
   let secs = Math.floor(seconds % 60)

   hrs = String(hrs).padStart(2, "0")
   minutes = String(minutes).padStart(2, "0")
   secs = String(secs).padStart(2, "0")

   display.textContent = `${hrs}:${minutes}:${secs}`

}

startButton.addEventListener('click', () => {

if(intervalId !== null){
   return
   }

   intervalId = setInterval(() => {

      seconds++
      updateDisplay()
   }, 1000)

})

stopButton.addEventListener('click',()=>{
   
   clearInterval(intervalId)
   intervalId = null

})

resetButton.addEventListener('click' , ()=>{
   
   clearInterval(intervalId)
   intervalId = null

   seconds = 0
   updateDisplay()

})