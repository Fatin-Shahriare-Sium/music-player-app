let db = [
    {
        title: 'Surah Fatiha',
        src: 'https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/abdel-kawi-abdul-majid/001.mp3',
        img: 'fatiha'
    },
    {
        title: 'Surah Mulk',
        src: 'https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/abdel-kawi-abdul-majid/067.mp3',
        img: 'mulk'
    },
    {
        title: 'Surah Buruj',
        src: './085.mp3',
        img: 'buruj'
    }
]


let preBtn = document.getElementById('pre-btn')
let playBtn = document.querySelector('#play-btn')
let nextBtn = document.getElementById('next-btn')
let audio = document.getElementById('audio')
let audioImg = document.getElementById('audio-img')
let title = document.querySelector('.titlex')
let progressBar = document.getElementById('progressbar')
let musicContainer = document.querySelector('.music-container')
let currentTimex = document.getElementById('music-currentTime')
let durationTime = document.getElementById('music-durationTime')

let index = 0

function playMusic() {
    audio.play()
    musicContainer.classList.add('play')
    playBtn.classList.remove("fa-play")
    playBtn.classList.add("fa-pause")

}


function pauseMusic() {
    audio.pause()
    musicContainer.classList.remove('play')
    playBtn.classList.remove("fa-pause")
    playBtn.classList.add("fa-play")

}

function nextMusic() {
    index = index + 1 == db.length ? 0 : index + 1
    audio.src = db[index].src
    audioImg.src = `./img/${db[index].img}.jpg`
    title.innerText = db[index].title
    playMusic()
}

function preMusic() {
    index = index - 1 < 0 ? 0 : index - 1
    audio.src = db[index].src
    audioImg.src = `./img/${db[index].img}.jpg`
    title.innerText = db[index].title
    playMusic()
}

function convertSec(timex) {
    if (timex < 60) {
        return `00:${timex}`
    } else {
        let minutex = Math.floor(timex / 60)

        let sec = (timex % 60)
        //console.log('timex', timex);
        //let decemalNumberOfSec = timex / 60
        //return decemalNumberOfSec.toFixed(2)
        return `${minutex}:${sec > 9 ? sec : `0${sec}`}`


    }
}

let x = 4876

console.log('ddd', 60 % 60);

audio.addEventListener('timeupdate', (e) => {

    let { currentTime, duration } = e.srcElement
    //console.log(currentTime);

    currentTimex.innerText = convertSec(Math.round(currentTime))
    durationTime.innerText = convertSec(Math.round(duration))
    return progressBar.value = (currentTime / duration) * 100
})
console.log(progressBar.value);

progressBar.addEventListener('change', (e) => {

    let needToGo = audio.duration * e.target.value
    console.log(needToGo)
    audio.currentTime = needToGo / 100

})

playBtn.addEventListener('click', () => {
    console.log('clicked')

    if (musicContainer.classList.contains('play')) {
        pauseMusic()
    } else {
        playMusic()
    }

})

nextBtn.addEventListener('click', () => {
    nextMusic()
})

preBtn.addEventListener('click', () => {
    preMusic()
})
// Reference to an output container, use 'pre' styling for JSON output

audio.addEventListener('ended', nextMusic)