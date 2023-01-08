let users=JSON.parse(localStorage.getItem("spotify_users"))||[];
let flag=false;
let verify=()=>{
    let flag=false;
    let email_mobile_number=document.getElementById("email_mobile_number").value;
    let password=document.getElementById("password").value;
    let validuser = false;
    let usernotallowed = false;
    let login_user = localStorage.setItem("login_user", false) 
    users.map(function (el) {
        if (el.email == email_mobile_number && el.password == password) {
            validuser = true;
            
        } 
        else if (el.email == email_mobile_number) {
            usernotallowed = true;
            return;
        }
    });
    if (validuser) {
        document.getElementById("loading").style.display = "block";
        localStorage.setItem("login_user", true) 
        setTimeout(function(){
            location.href = "../HTML/index.html";
        },1000)
        
        // location.href = "index.html";
    } else if (usernotallowed) {
        alert("Incorrect email or password.");
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Please Register Your Account");
        location.href = "../HTML/login.html";
    }
}

let tosignup=()=>{
    window.location.href="../HTML/signup.html"
}
document.getElementById("signup-btn").addEventListener("click",tosignup);


function on() {
    document.getElementById("login_button").style.display = "block";
  }
  
  function off() {
    document.getElementById("login_button").style.display = "none";
  }