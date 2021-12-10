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
    }
]


let preBtn = document.getElementById('pre-btn')
let playBtn = document.querySelector('#play-btn')
let nextBtn = document.getElementById('next-btn')
let audio = document.getElementById('audio')
let title = document.querySelector('.titlex')
let progressBar = document.getElementById('progressbar')
let musicContainer = document.querySelector('.music-container')

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
    title.innerText = db[index].title
    playMusic()
}

function preMusic() {
    index = index - 1 < 0 ? 0 : index - 1
    audio.src = db[index].src
    title.innerText = db[index].title
    playMusic()
}

audio.addEventListener('timeupdate', (e) => {

    let { currentTime, duration } = e.srcElement
    console.log(currentTime);
    progressBar.value = currentTime
})
console.log(progressBar.value);



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
