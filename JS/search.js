import { lets_do_resize } from "../COMPONENTS/com.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
  } from "../UTILITY/api_call.js";


  var token = localStorage.getItem("spotify_token")
  function get_song(song){
    getAllSearchResults(song, "track,artist", "50", token).then(function(res){
        let artist_items_ = res.artists.items
        let track_items_ = res.tracks.items
        console.log(artist_items_)
        console.log(track_items_)
      },function(e){
        console.log("you are getting following error", e)
      })
  }
 

  let search_input_itme_song = document.getElementById("search_input_itme_song")
  search_input_itme_song.addEventListener("input", debounce_for_search)

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
  micbtm.addEventListener('click', Mic_search)
  window.addEventListener('load', lets_do_resize)