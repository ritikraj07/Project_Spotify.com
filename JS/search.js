import { lets_do_resize } from "../COMPONENTS/com.js";
import {search_main_container, search_page_navbar,search_result_div} from "../COMPONENTS/SearchContainerPage.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
  } from "../UTILITY/api_call.js";

  window.addEventListener('load', lets_do_resize)
  var token = localStorage.getItem("spotify_token")
  function get_song(song){
    search_input_itme_song.value = song
    getAllSearchResults(song, "track,artist", "10", token).then(function(res){
        let artist_items_ = res.artists.items
        let track_items_ = res.tracks.items
        console.log(artist_items_)
        // console.log(artist_items_)

       console.log(track_items_) //working
        document.getElementById("Main-container").innerHTML = ""
        document.getElementById("Main-container").innerHTML= search_result_div(track_items_)
      
   
      var topseaMusic =  document.getElementById("play_btm_in_top_result")
      topseaMusic.addEventListener("click", playAudio)
      var btm1 = document.querySelector("#songbtm1 ")
      btm1.addEventListener("click", playAudio)
      var x = document.getElementById("myAudio"); 
      var songplaybol = false
    
      function playAudio() { 
        if(songplaybol == false){
          topseaMusic.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>'
          
          btm1.innerHTML = `<i class="fa-sharp fa-solid fa-pause PlayHideShow "></i> <img src="${track_items_[0].album.images[0].url}" alt=""> `
          songplaybol = true
          x.play();
        }
        else{
          topseaMusic.innerHTML = '<i class="fa-sharp fa-solid fa-play "></i>'
          btm1.innerHTML = `<i class="fa-sharp fa-solid fa-play  PlayHideShow "></i> <img src="${track_items_[0].album.images[0].url}" alt="">`
          songplaybol = false
          x.pause(); 
        }
      } 

    
      




      
      },function(e){
        console.log("you are getting following error", e)
      })
  }
 

  let search_input_itme_song = document.getElementById("search_input_itme_song")
  if(search_input_itme_song!=null){
    search_input_itme_song.addEventListener("input", debounce_for_search)
  }
  

  function display(){
    const sea_value = search_input_itme_song.value
    console.log(sea_value)
    if(sea_value=="")return
    get_song(sea_value)
  }

  let id;
  function debounce_for_search(){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(display, 2000)
  }
  function Mic_search(){
    window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.addEventListener("result", (e) => {
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
        get_song(text)
    });
    recognition.start();
  }

  var micbtm = document.getElementById("mic_btm")
  if(micbtm!=null){
    micbtm.addEventListener('click', Mic_search)
  }

  
 
