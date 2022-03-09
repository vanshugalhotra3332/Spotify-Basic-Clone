console.log("Welcome to Spotify");

// initialize the variables

let songIndex = 0;

let audioElement = new Audio('songs/ambitionz_az_a_ridah.mp3');

let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [{

    0: { songName: "Ambitionz Az a Ridah", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/all_eyez.png" },
    1: { songName: "It's On", filePath: "songs/ambitionz_az_a_ridah.mp3" , coverPath: "Covers/its_on.png" },
    2: { songName: "Only God Can Judge Me", filePath: "songs/ambitionz_az_a_ridah.mp3" , coverPath: "Covers/all_eyez.png" },
    3: { songName: "Notorious Thugs", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/long_kiss.png" },
    4: { songName: "Real Muthaphuckkin G's", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/its_on.png" },
    5: { songName: "Hail Mary", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/don_kil.png" },
    6: { songName: "Long Kiss Goodnight", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/long_kiss.png" },
    7: { songName: "Who Shot Ya?", filePath: "songs/ambitionz_az_a_ridah.mp3" , coverPath: "Covers/ready_to_die.png" },
    8: { songName: "Boyz n Tha Hood (G-Mix)", filePath: "songs/ambitionz_az_a_ridah.mp3" , coverPath: "Covers/its_on.png" },
    9: { songName: "California Love", filePath: "songs/ambitionz_az_a_ridah.mp3" , coverPath: "Covers/all_eyez.png" },
}
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[0][`${i}`].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[0][`${i}`].songName;
});

// handle play pause click
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

});


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// handle previous next
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
    
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = songs[0][`${songIndex}`].filePath;
        masterSongName.innerText = songs[0][`${songIndex}`].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});

// listen to events

audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', () => {

    // setting the song according to progressbar
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[0][`${songIndex}`].filePath;
    masterSongName.innerText = songs[0][`${songIndex}`].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[0][`${songIndex}`].filePath;
    masterSongName.innerText = songs[0][`${songIndex}`].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

