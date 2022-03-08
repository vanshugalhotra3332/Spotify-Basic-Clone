console.log("Welcome to Spotify");

// initialize the variables

let songIndex = 0;

let audioElement = new Audio('songs/ambitionz_az_a_ridah.mp3');

let masterPlay = document.getElementById('masterPlay');

let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');

let songs = [

    { songName: "Ambitionz Az a Ridah", filePath: "songs/ambitionz_az_a_ridah.mp3", coverPath: "Covers/all_eyez.png" },
    { songName: "It's On", filePath: "songs/.mp3", coverPath: "Covers/its_on.png" },
    { songName: "Only God Can Judge Me", filePath: "songs/its_on.mp3", coverPath: "Covers/all_eyez.png" },
    { songName: "Notorious Thugs", filePath: "songs/notorious_thugs.mp3", coverPath: "Covers/long_kiss.png" },
    { songName: "Real Muthaphuckkin G's", filePath: "songs/real_mf_g.mp3", coverPath: "Covers/its_on.png" },
    { songName: "Hail Mary", filePath: "songs/Hail_Mary.mp3", coverPath: "Covers/don_kil.png" },
    { songName: "Long Kiss Goodnight", filePath: "songs/long_kiss_goodnight.mp3", coverPath: "Covers/long_kiss.png" },
    { songName: "Who Shot Ya?", filePath: "songs/who_shot_ya.mp3", coverPath: "Covers/ready_to_die.png" },
    { songName: "Boyz n Tha Hood (G-Mix)", filePath: "songs/boyz_n_the_hood.mp3", coverPath: "Covers/its_on.png" },
    { songName: "California Love", filePath: "songs/california_love.mp3", coverPath: "Covers/all_eyez.png" },
];

// audioElement.play();

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

// listen to events

audioElement.addEventListener('timeupdate', () => {

    // update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration)*100);

    myProgressBar.value = progress;
    
});

myProgressBar.addEventListener('change', ()=>{

    // setting the song according to progressbar
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

});
