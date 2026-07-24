const userCityInput = document.querySelector('#cityInput')
const searchButton = document.querySelector('#searchBtn')
const weatherIcon = document.querySelector('#weatherIcon')
const temperature = document.querySelector('#temperature')
const userCityName = document.querySelector('#cityName')
const weatherDescription = document.querySelector('#description')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#windSpeed')

const apiKey = 'bc1b392a1d63480138fda614d10c841a'

async function getWeather() {
    const city = userCityInput.value.trim()

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    const response = await fetch(url)

    const data = await response.json()

    if (data.cod === "404") {
        alert("Enter a valid city")
        return
    }

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    userCityName.textContent = data.name;

    temperature.textContent = `${data.main.temp}°C`;

    humidity.textContent = `${data.main.humidity}%`
    windSpeed.textContent = `${data.wind.speed} km/h`

    weatherDescription.textContent = data.weather[0].description;


}

searchButton.addEventListener('click', getWeather)

userCityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getWeather()
    }
})