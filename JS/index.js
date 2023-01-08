import { lets_do_resize } from "../COMPONENTS/com.js";
import {search_main_container, search_page_navbar, 
  search_result_div} from "../COMPONENTS/SearchContainerPage.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
  } from "../UTILITY/api_call.js";

import { main_container_before_login, nav_bar_before_login,
   footer_before_login, right_sidebar,
    main_container_after_login, footer_after_login, 
  nav_bar_after_login} from "../COMPONENTS/landing_before.js";
// lets_do_resize()

let width = screen.width;
// document.getElementById("Nav-Bar-Container").style.width = `${width-300}px`
lets_do_resize()
 console.log(width)
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


 
 
let Main_container =  document.getElementById("Main-container")
let Nav_Bar_Container =  document.getElementById("Nav-Bar-Container")
let footer_container = document.getElementById("Footer-Container")
let sidebar = document.getElementById("Side-Bar-Container");

let login_user = localStorage.getItem("login_user")




Nav_Bar_Container.innerHTML = nav_bar_before_login()
Main_container.innerHTML = main_container_before_login()
footer_container.innerHTML = footer_before_login()
sidebar.innerHTML = right_sidebar()

document.querySelector("#b-navbar button:nth-child(5)").addEventListener("click", signup);
document.querySelector("#b-navbar button:nth-child(6)").addEventListener("click", login);
document.querySelector("#notify>div:nth-child(2) button").addEventListener('click', signup)
document.querySelector("#notify>div:nth-child(3) h5").addEventListener('click', login)



function signup(){
  window.location.href = "../HTML/signup.html";
}

function login(){
  window.location.href = "../HTML/login.html";
}
var spotify_users = localStorage.getItem("spotify_users") || null
if(login_user =="true"){
  Main_container.innerHTML = ""
  footer_container.innerHTML =""
  Nav_Bar_Container.innerHTML =  nav_bar_after_login()
  Main_container.innerHTML = main_container_after_login()
  footer_container.innerHTML = footer_after_login()


  
  // Nav_Bar_Container.style.position = "static";
}else{
  Nav_Bar_Container.style.position = "fixed";
}


var name9 = document.querySelector("#profile_in_search_page")
if(name9!=null){
  name9.addEventListener("click", account_page)
}
function account_page(){
  window.location.href = "./../HTML/account.html"
}

var users = JSON.parse(localStorage.getItem("spotify_users"))



var user_name = users[0].profile_name
var p_name = document.querySelector("#profile_name")
if(p_name!=null){
  document.querySelector("#profile_name").textContent = user_name
}









var content = document.getElementsByTagName("body")[0];
var darkmode = document.getElementById("dark");
darkmode.addEventListener("click", function(){
    darkmode.classList.toggle("active");
    content.classList.toggle("night");

});




var mode = localStorage.setItem("mode", JSON.stringify("night"))

var day_night = document.querySelector("#dark")
day_night.addEventListener("click", function(){
  day_night_fun()
})


function day_night_fun(){
  mode = JSON.parse(localStorage.getItem("mode"))
  if(mode=="night"){
    localStorage.setItem("mode",JSON.stringify("day"))
    Nav_Bar_Container.style.background = "white"
  }else{
    localStorage.setItem("mode", JSON.stringify("night"))
    Nav_Bar_Container.style.background = "black"
  }
}

let homebtm = document.querySelector("#pages div:nth-child(1)")
let searchbtm = document.querySelector("#pages div:nth-child(2)")

homebtm.addEventListener('click', function(){
  window.location.reload()
})

searchbtm.addEventListener('click', search_fun)

function search_fun(){
  Main_container.innerHTML = search_main_container()
  document.getElementById("search_input_div").style.visibility = 'visible'
  document.getElementById("upgrade").style.visibility = 'hidden'
}



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Nav-Bar-Container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


document.querySelector("#pages>div:nth-child(3)").addEventListener("click", gotoPlayList)
function gotoPlayList(){
  window.location.href = "./../HTML/sfPlaylist.html"
}



document.querySelector("#pages>div:nth-child(5)").addEventListener("click", gotolikedpage)
function gotolikedpage(){
  localStorage.setItem("PlayList-Name", "Liked Songs");
  localStorage.setItem("playList-Description", "Your Favourite Songs are Here ! ");
  // playlistMainBody(likedSongs)
  window.location.href = "./../HTML/sfPlaylist.html"
}




let logintime = JSON.parse(localStorage.getItem("lt"))

if(login_user =="true" && logintime == "0"){
  localStorage.setItem("lt", "1")
  var loginsound = document.getElementById("login_sound")
  playAudiolog()
  function playAudiolog() { 
      loginsound.play();
  } 

}