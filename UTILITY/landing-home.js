
import { getCategoryPlaylists } from "../UTILITY/api_call.js";
let t = localStorage.getItem('spotify_token')

window.addEventListener("load", async function(){
    let gotData = await getCategoryPlaylists("sleep", "15", "6", t);
    var id = document.getElementById("f-show");
    
    console.log(id);
    ar.push(gotData);
    console.log("ar", ar)
    displaydata(ar, id);
});
window.addEventListener("load", async function(){
    let gotData = await getCategoryPlaylists("focus", "7", "6", t);
    // console.log("ch")
    var id = document.getElementById("p-show");
    
    console.log(id);
    ar1.push(gotData);
    console.log("ar", ar)
    displaydata(ar1, id);
});
window.addEventListener("load", async function(){
    let gotData = await getCategoryPlaylists("pop", "8", "6", t);
    console.log("chechhjkldld")
    var id = document.getElementById("m-show");
    
    console.log("m-show", id);
    ar2.push(gotData);
    console.log("ar", ar)
    displaydata(ar2, id);
});
window.addEventListener("load", async function(){
    let gotData = await getCategoryPlaylists("gaming", "8", "6", t);
    console.log("chechhjkldld")
    var id = document.getElementById("b-show");
    
    console.log("m-show", id);
    ar4.push(gotData);
    console.log("ar", ar)
    displaydata(ar4, id);
});


var ar2=[];
var ar = [];
var ar1 = [];
var ar4 = [];

let displaydata = (data, id) =>{
    let container = id;
    console.log(id);
    data.forEach((ele) => {
     console.log("eke", ele);
     for(var i of ele){
        let cdiv = document.createElement("div");
        cdiv.setAttribute("id", "ccdiv");        

        // let imgdiv = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("class", "lpimage");
        img.setAttribute("src", i.images[0].url);
        // imgdiv.append(img);

        let namediv = document.createElement("div");
        let h3 = document.createElement("h4");
        namediv.setAttribute("class", "lptitle")
        h3.textContent = i.name;
        namediv.append(h3);

        let desdiv = document.createElement("div");
        let des = document.createElement("p");
        desdiv.setAttribute("class", "des")
        des.textContent = i.description;
        desdiv.append(des);

        let btndiv = document.createElement("div");
        btndiv.setAttribute("class", "btn");
        let button = document.createElement("img");
        button.setAttribute("src", "https://pbs.twimg.com/profile_images/783963645243953154/77g-Wc3h_400x400.jpg");
        button.setAttribute("class", "play");
        button.addEventListener("click", function(){
            showloginPage(i);
        });




        btndiv.append(button);

        
        cdiv.append(img, namediv, desdiv, btndiv);
        
       
        container.append(cdiv);
     }
       
    }); 

}


function showloginPage(data){
    document.getElementById("show-login-page").style.width = "100%";

    console.log(data);
    let image = document.getElementById("page-img");
    image.textContent = "";
    // data.map((ele) => {
        let appendedimg = document.createElement("img");
        appendedimg.src = data.images[0].url;
        appendedimg.setAttribute("class", "appendedimg");
        console.log("chjcjcf");
        console.log("named", data.name)
        image.append(appendedimg);
    // /})
}


document.getElementById("close").addEventListener("click", closepage);
function closepage(){
    document.getElementById("show-login-page").style.width = "0%";

}

