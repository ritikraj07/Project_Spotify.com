
let songIdx = 0;

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

// let songs = [
//   {name: "first", song: "/songs/01 - Blind - (Musicfire.in).mp3",cover: "https://tse3.mm.bing.net/th?id=OIP.9xLXISX7o7EzGrNkiuNW2wHaEo&pid=Api&P=0"},
//   {name: "second", song: "/songs/01 - Lift Me Up - (Musicfire.in).mp3",cover: "https://tse3.mm.bing.net/th?id=OIP.9xLXISX7o7EzGrNkiuNW2wHaEo&pid=Api&P=0"},
//   {name: "third", song: "/songs/01 - Skin O  My Teeth - (Musicfire.in).mp3 filename=UTF-8  01 20- 20Skin.mp3",cover: "https://tse3.mm.bing.net/th?id=OIP.9xLXISX7o7EzGrNkiuNW2wHaEo&pid=Api&P=0"},
//   {name: "fourth", song: "/songs/01-slipknot-duality_(edit).mp3",cover: "https://tse3.mm.bing.net/th?id=OIP.9xLXISX7o7EzGrNkiuNW2wHaEo&pid=Api&P=0"}
// ]
// let player_box = document.querySelector("#player-box");
// function player_box(){
//   return document.querySelector("#player-box");
// }
// // console.log(player_box());
// export {player_box};

// let currSong = JSON.parse(localStorage.getItem("box-song"));
// console.log(currSong);
// let audioElement = new Audio(currSong.track.preview_url);
// //handle play/pause
// masterPlay.addEventListener("click", ()=>{
//   if(audioElement.paused || audioElement.currentTime <=0){
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
//   }
//   else{
//     audioElement.pause();
//     masterPlay.classList.add('fa-play-circle');
//     masterPlay.classList.remove('fa-pause-circle');
//   }
// })


//listen to events
// audioElement.addEventListener('timeupdate', () =>{
//   //  console.log('timeupdate');
//    //update seekbar
//   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//   // console.log(progress);
//   myProgressBar.value = progress;
// })
// myProgressBar.addEventListener('change',() => {
//   audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
// })

// document.getElementById("next_button").addEventListener("click", ()=> {
//    nextSong();
// })
// let nextSong = () => {
//   console.log(songs[songIdx].song);
//   console.log(songs.length);
//   songIdx++;
//   audioElement.src = songs[songIdx].song;
//   audioElement.play();  
//   console.log(songIdx)
//   if(songIdx>=songs.length){
//     songIdx = 0;
//   }
 
// }
// document.getElementById("previous_button").addEventListener("click", ()=> {
//   previousSong();
// })
// let previousSong = () => {
//  console.log(songs[songIdx].song);
//  console.log(songs.length);
//  songIdx--;
//  audioElement.src = songs[songIdx].song;
//  audioElement.play();
//  console.log(songIdx)
//  if(songIdx<=0){
//    songIdx = songs.length-1;
//  }
// }