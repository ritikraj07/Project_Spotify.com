
import { refreshToken, getPlaylists, getCategoryPlaylists } from "../UTILITY/api_call.js";
import { lets_do_resize } from "../COMPONENTS/com.js";
lets_do_resize()
const row_one = document.querySelector('#playlist_one');
const row_two = document.querySelector('#playlist_two');
const row_three = document.querySelector('#playlist_three');
const row_four = document.querySelector('#playlist_four');


var spotify_token = localStorage.getItem("spotify_token")
let token_timer = localStorage.getItem('token_timer',"time")||0
const today = new Date();
let time = today.toTimeString()[0]+today.toTimeString()[1]

  setInterval(function(){
    time = today.toTimeString()[0]+today.toTimeString()[1];
  },3000)

  if(token_timer === "0" || time!=token_timer || spotify_token == undefined || spotify_token == null){
    localStorage.setItem('token_timer', time)
    localStorage.removeItem("spotify_token");
    refreshToken()
    console.log("Your new generated token is this", spotify_token)
  }
  console.log(spotify_token)
  const displayPlaylist = (data, parent) => {
   
    data.forEach(element => {
      const playlist_tab = document.createElement('div');
      const image_contaier = document.createElement('div');
      const desc_container = document.createElement('div');
      const image = document.createElement('img');
      const play_btn = document.createElement('button');
      const title = document.createElement('p');
      const description = document.createElement('p');
  
      image.src = element.images[0].url;
      title.textContent = element.name;
      description.textContent = element.description;
      play_btn.innerHTML = `<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
      </path>
    </svg>`;
  
      playlist_tab.setAttribute('class', 'playlist_tab');
      image_contaier.setAttribute('class', 'mini_background_container');
      desc_container.setAttribute('class', 'short_desc_container');
  
      // playlist_tab.onclick = () => {
      //   openPlayList(element);
      // }
  
      desc_container.append(title, description);
      image_contaier.append(image, play_btn);
      playlist_tab.append(image_contaier, desc_container);
      parent.append(playlist_tab);
    });
  }

  getPlaylists('equal','10',spotify_token ).then(function(res){
    console.log(res)
    displayPlaylist(res, row_one);
  })

  getPlaylists('chill','10',spotify_token ).then(function(res){
    console.log(res)
    displayPlaylist(res, row_two);
  })

  getPlaylists('rock','10',spotify_token ).then(function(res){
    console.log(res)
    displayPlaylist(res, row_three);
  })
  
  getPlaylists('dinner','10',spotify_token ).then(function(res){
    console.log(res)
    displayPlaylist(res, row_four);
  })