console.log("Welcome to Spotify");

// initialize the variables 
var audioElement = new Audio('images/rl.mp3'); 
let masterPlay = getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar'); 

let songs = [
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName: "salaam-e-ishq", filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
];


// Handle play pause click 

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle'); 
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle'); 
    }
}); 

myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
}); 

document.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // Update the seekbar 
});

