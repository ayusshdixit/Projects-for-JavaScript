const time = document.querySelector('#time')
const day = document.querySelector('#day')
const date = document.querySelector('#date')



function updateDisplay() {

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let secs = now.getSeconds();
    const currentDay = now.getDay();
    const currentDate = now.getDate();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();


    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    secs = String(secs).padStart(2, "0")


    time.textContent = `${hours}:${minutes}:${secs}`
    day.textContent = `${days[currentDay]}`
    date.textContent = `${currentDate}:${months[currentMonth]}:${currentYear}`

}


setInterval(updateDisplay(),1000)

