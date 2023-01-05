// import { refreshToken } from "../UTILITY/api_call.js";
// let t = refreshToken();
import { getCategoryPlaylists } from "../UTILITY/api_call.js";
// var t= "BQD7DujKfyTj3YLJIn24DPTlOt50O-U2S3pGEDsd9y-CJiCj6G22J_PKa33S3LtXvUkavWGKQjYECYAL1Gk4AeheEO-eavI8UzcmMqtMDXhYTEfRwBFq_ee6X285hc-iaLeTY7AQPjdO57DsXu5BJTvzzyEH6j4tzZt9itEyoOTkG-1uwLDT3QaFZsYdg9JvzIQ";
// var t= "BQBPkEh4VL_mgJMKnaxIFc_5WAdLNGG_gVpHrLCKL-6hvTyJDa8dRfczxZJ9orAOidJN6XJHfOtniEihJXiUwlDOHLfL7atnygXqcxey2WCAfh6tnZo1B97sIz6A9fo-lulxB2gST5ah8mPaq-NfE0lACAw1DEo1YQNX9wn2qgcwD4XBbRdYNEHsV59gtwIbGMs";
// var t = "BQDf3XvbmCBn0WjxOoWnSKGCBmLx9v-j7Wost9b1zH6bjbUpz7Zwd7_grEmCBAD00zNeymB7FZ0nW2hKaZeQYo6aOaJ3n7SUbbWF-bmXOhDgtTacUzS3QIOaQ59UocZpCEJqO6VuxG8WXTM9G2_X6xhgKjr1GCmjiSe9q8EaPpgc13tcf2z6SJL-ceGdnsOgDDc";
// var t ="BQB2qMPPu7-sg2wcsGojKFGKUmJC9otvtVAjUooFKlvnO1NSRuUw8kRVqTklZdRNwf70Vhqx0Ww5Y2C_JiRQgbG9jMhgRohkCzTIVnRrilTtnjMpKBe_5pwOOVg9Ykng7tZ7h4r7qGFTVH6oJOQubpisX4GH1-253hcBj3UQx1t5inZGN93kH7yOXa3kIJ53Pkc";
let t = "BQCqMaXCNKgsLrLLwmZZwJw3Ey-b3jXvFtPSsTwgfOyEIrO45AC2kzQt6qlU1y8tYt25jlJEk0GzV7CZqDzomBHfWmOp0gCrPnO_rPqgR3xVlFH8IZrgM7_PxEiCK2ULm2FioBQeTOzi0cBqzn9qFG1iuqPHSFdFF5INKKAVtYnUDSbnSHrX5fgC9OEzHytUdE0";
// var t = "BQCVmyIlF0OpljT23x5g6gWppvswoFEx8m8l_GH62qXKxuFftEwtDWKaLpm0M-M82rMiOKn5-1zJRk3smfJ47pbon6OzlnBoXV_SN07ycNaVUPzVBVX-H_H-RXUwqsZ-ACUBMTInixH9D_QMLb9AYvZpGN-h4wpR1CLrP3cGsbcOuGn1oa0M_MdiEaKgW4ThM3M";
// var t = "BQDHyWZ5vUM8lQ9WkqigdEnjecSlx4Td4icieQSh4hVhWYpaj_Jm8vzqsWIyCqKpIMJ_BADLRq3Bj9XERt8Ood9RysumRV49xqGxfJmW_H50rmRjG_AzyOyjc40xHGipX59awGUpr3MfXrKtZRHHcQ0tDBMzdFnzyF6M25xpypISp3ovjKT0r0GYKCgMsWlEXfE";
console.log("vhfhjdj")
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


