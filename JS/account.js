document.querySelector("#b-navbar img").addEventListener('click', back)
function back(){
    location.href = "./../HTML/index.html"
}

var userdata = JSON.parse(localStorage.getItem("spotify_users"))

userdata = userdata[0]





