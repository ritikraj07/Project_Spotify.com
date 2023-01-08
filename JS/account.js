document.querySelector("#b-navbar img").addEventListener('click', back)
function back(){
    location.href = "./../HTML/index.html"
}

let userdata = JSON.parse(localStorage.getItem("spotify_users"))

let username = userdata[0].profile_name;
let uname = document.getElementById("#name");
uname.textContent = "";
uname.textContent = username;


let useremail = userdata[0].email;
let e = document.getElementById("#name");
e.textContent = "";
e.textContent = useremail;

let useryear = userdata[0].year;
let usermonth = userdata[0].month;
let userday = userdata[0].day;

let udob = document.getElementById("#name");
udob.textContent = "";
udob.textContent = useryear + "-" + userday + ", " + usermonth;

let ug = userdata[0].gender;
let g = document.getElementById("#name");
g.textContent = "";
g.textContent = ug;

