import { lets_do_resize } from "../COMPONENTS/com.js";
import {search_main_container, search_page_navbar, search_result_div} from "../COMPONENTS/SearchContainerPage.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
  } from "../UTILITY/api_call.js";
// lets_do_resize()
 
 
let Main_container =  document.getElementById("Main-container")
let Nav_Bar_Container =  document.getElementById("Nav-Bar-Container")




let width = screen.width;
document.getElementById("Nav-Bar-Container").style.width = `${width-350}px`
lets_do_resize()
 
// function for auto change token
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
// end 
