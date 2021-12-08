let db = [
    {
        title: 'Surah Mulk',
        src: 'https://media.blubrry.com/muslim_central_quran/podcasts.qurancentral.com/abdel-kawi-abdul-majid/067.mp3',
        img: 'mulk'
    }
]


let preBtn = document.getElementById('pre-btn')
let playBtn = document.getElementById('play-btn')
let nextBtn = document.getElementById('next-btn')
let audio = document.getElementById('audio')
let progressBar = document.getElementById('progressbar')

console.log('Allah is Almighty', audio)

function playMusic() {
    audio.paly()
}

function pauseMusic() {
    audio.pause()
}
audio.addEventListener('timeupdate', (event) => {
    console.log(event);
})