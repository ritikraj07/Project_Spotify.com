
import { refreshToken, getPlaylists, getCategoryPlaylists } from "../UTILITY/api_call.js";
import { lets_do_resize } from "../COMPONENTS/com.js";
lets_do_resize()
const row_one = document.querySelector('#playlist_one');
const row_two = document.querySelector('#playlist_two');
const row_three = document.querySelector('#playlist_three');
const row_four = document.querySelector('#playlist_four');

// console.log(playlist_one)

var spotify_token = localStorage.getItem("spotify_token")
let token_timer = localStorage.getItem('token_timer',"time")||0
  // console.log(spotify_token)

  const displayPlaylist = (data, parent) => {
    data.forEach(ele => {
      const playlist_tab = document.createElement('div');

      const image_contaier = document.createElement('div');
      image_contaier.setAttribute('class', 'mini_background_container');
      const image = document.createElement('img');
      image.src = ele.images[0].url;

      const description = document.createElement('p');
      description.textContent = ele.description;

      const title = document.createElement('p');
      title.textContent = ele.name;
     
      const desc_container = document.createElement('div');
      desc_container.setAttribute('class', 'short_desc_container');
      desc_container.append(title, description);

      
      const play_btn = document.createElement('button');
      play_btn.innerHTML = `<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z">
      </path>
      </svg>`;
      image_contaier.append(image, play_btn);
    
       playlist_tab.setAttribute('class', 'playlist_tab');
    
      // playlist_tab.onclick = () => {
      //   openPlayList(element);
      // }
  
      playlist_tab.append(image_contaier, desc_container);
      // console.log(parent)
      parent.append(playlist_tab);
      
    });
  }
// console.log(parent)
  getPlaylists('party','10',spotify_token ).then(function(res){
    // console.log(res)
    displayPlaylist(res, row_one);
  })

  getPlaylists('chill','10',spotify_token ).then(function(res){
    // console.log(res)
    displayPlaylist(res, row_two);
  })

  getPlaylists('rock','10',spotify_token ).then(function(res){
    // console.log(res)
    displayPlaylist(res, row_three);
  })
  
  getPlaylists('dinner','10',spotify_token ).then(function(res){
    // console.log(res)
    displayPlaylist(res, row_four);
  })