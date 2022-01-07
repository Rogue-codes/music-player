var play = document.getElementById('play')
var prev = document.getElementById('prev')
var next = document.getElementById('next')
var audioplayer = document.getElementById('audioPlayer')
var image = document.getElementById('img')
var artiste = document.getElementById('artiste')
var music = document.getElementById('song')


let allSongs = [
    m1={
        musician: 'Ayra starr',
        title: 'Bloody samaritan',
        song:'Ayra_Starr_Bloody_samaritan_9jaflaver.com_.mp3',
        poster:'p1.jpeg'
    },
    m2={
        musician: 'Flavor',
        title: 'Levels',
        song:'Flavour_Levels_9jaflaver.com_.mp3',
        poster:'p3.jpeg'
    },
    m3={
        musician: 'Lojay & Sarz',
        title: 'Monalisa',
        song:'Lojay_And_Sarz_Monalisa_9jaflaver.com_.mp3',
        poster:'p2.jpeg'
    },
    m3={
        musician: 'Mayorkun & Victony',
        title: 'Holy Father',
        song:'Mayorkun_And_Victony_Holy_Father_9jaflaver.com_.mp3',
        poster:'p4.png'
    },
    m4={
        musician: 'Reekado Banks',
        title: 'Ozumba Mbadiwe',
        song:'Reekado_Banks_Ozumba_Mbadiwe_9jaflaver.com_ (1).mp3',
        poster:'p5.jpg'
    }
]

let counter = 0

audioplayer.src = allSongs[counter].song

artiste.innerText = allSongs[counter].musician

music.innerText = allSongs[counter].title

image.src = allSongs[counter].poster


play.addEventListener('click', playSong)
console.log(play)

function playSong(){
    if(play.innerHTML === '<i class="fas fa-pause-circle"></i>'){
        play.innerHTML = '<i class="fas fa-play-circle"></i>'
        audioplayer.pause()
    }else if(play.innerHTML === '<i class="fas fa-play-circle"></i>'){
        play.innerHTML = '<i class="fas fa-pause-circle"></i>'
        audioplayer.play()
    }
}

next.addEventListener('click', nextSong)

function nextSong(){
    counter++
    console.log(counter)
    if(counter > allSongs.length - 1){
        counter = 0
    }
    audioplayer.src = allSongs[counter].song

    artiste.innerText = allSongs[counter].musician

    music.innerText = allSongs[counter].title

    image.src = allSongs[counter].poster

    audioplayer.play()
}


prev.addEventListener('click', prevSong)

function prevSong(){
    counter--
    console.log(counter)
    if(counter < 0){
        counter = allSongs.length - 1
    }
    audioplayer.src = allSongs[counter].song

    artiste.innerText = allSongs[counter].musician

    music.innerText = allSongs[counter].title

    image.src = allSongs[counter].poster

    audioplayer.play()
}
