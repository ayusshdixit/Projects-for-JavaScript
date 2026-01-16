console.log('Welcome To Spotify');

// Intialzing Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3")
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName('songitem'))
let masterSongName = document.getElementById('masterSongName')

let songs = [
    { songname: 'luther - Kendrick Lamar', filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg.png' },
    { songname: 'Us Mod se Shuru Kare', filepath: 'songs/2.mp3', coverpath: 'covers/1.jpg.png' },
    { songname: '4:10', filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg.jpg' },
    { songname: 'Ban ja Tu Meri Rani', filepath: 'songs/4.mp3', coverpath: 'covers/1.jpg.png' },
    { songname: 'Boyfriend', filepath: 'songs/5.mp3', coverpath: 'covers/3.jpg.jpg' },
    { songname: 'Let Down', filepath: 'songs/6.mp3', coverpath: 'covers/3.jpg.jpg' },
    { songname: 'Bheegi-Bheegi si', filepath: 'songs/7.mp3', coverpath: 'covers/1.jpg.png' },
    { songname: 'Go Down deh', filepath: 'songs/8.mp3', coverpath: 'covers/1.jpg.png' },
    { songname: 'The Man In the arena', filepath: 'songs/9.mp3', coverpath: 'covers/3.jpg.jpg' },
    { songname: 'Tumko Dekha toh ', filepath: 'songs/10.mp3', coverpath: 'covers/3.jpg.jpg' }
]
// audioElement.play()

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songname;
})


//Handle Play Pause Click
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play()
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity = 1
    } else {
        audioElement.pause()
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity = 0
    }
})

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
    console.log("TimeUpdate");
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myprogressbar.value = progress
})

myprogressbar.addEventListener("change", () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((elemnet) => {
    elemnet.addEventListener("click", (e) => {
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname
        audioElement.currentTime = 0;
        audioElement.play()
        gif.style.opacity = 1
        masterplay.classList.add('fa-circle-play')
        masterplay.classList.remove('fa-circle-pause')

    })
})

document.getElementById('next').addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songname
    audioElement.currentTime = 0;
    audioElement.play()
    masterplay.classList.add('fa-circle-play')
    masterplay.classList.remove('fa-circle-pause')

})

document.getElementById('previous').addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songname
    audioElement.currentTime = 0;
    audioElement.play()
    masterplay.classList.add('fa-circle-play')
    masterplay.classList.remove('fa-circle-pause')

})