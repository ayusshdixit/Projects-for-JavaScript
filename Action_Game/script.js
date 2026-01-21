
score = 0;
cross = true;



audioGo = new Audio('GameOver.mp3');
AudioOn = new Audio('MainMusic.mp3.mp3');

setTimeout(()=>{
    AudioOn.play();
    console.log('clicked');
    
},1000);

document.onkeydown = function (e) {
    console.log("key code is :", e.keyCode);
    if (e.keyCode == 38) {
        batman = document.querySelector(".batman")
        batman.classList.add('animatebatman')
        setTimeout(() => {
            batman.classList.remove('animatebatman')
        }, 700)
    }
    if (e.keyCode == 39) {
        batman = document.querySelector(".batman")
        batmanX = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'))
        batman.style.left = batmanX + 112 + "px";
    }
    if (e.keyCode == 37) {
        batman = document.querySelector(".batman")
        batmanX = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'))
        batman.style.left = (batmanX - 112) + "px";
    }

}

setInterval(() => {

    batman = document.querySelector('.batman')
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector(".obstacle")

    dx = parseInt(window.getComputedStyle(batman, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(batman, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    // Measuring the difference between dx&Ox And dy&Oy

    offsetX = Math.abs(dx - ox)
    offsety = Math.abs(dy - oy)
    if (offsetX < 73 && offsety < 54) {
        gameOver.style.visibility = "visible"
        obstacle.classList.remove('obstacleAni');
        audioGo.play();
        setTimeout(()=>{
            audiogo.pause();
            AudioOn.pause()
        },1000)
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.1;
            obstacle.style.animationDuration = newdur + "s";
        }, 500)

    }
}, 100);

function updateScore(score) {
    scoreCount.innerHTML = "Your score is : " + score
}