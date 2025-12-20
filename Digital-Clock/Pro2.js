const Clock = document.querySelector('#clock')

setInterval(function() {
    let date = new Date();
    Clock.innerHTML= date.toLocaleTimeString()
} ,1000)