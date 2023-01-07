
import getKeys from "./../UTILITY/aman_keys.js";
// import getKeys from "../UTILITY/keys.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
} from "./../UTILITY/api_call.js";

// let footer = player_box();
// console.log(footer);
// document.querySelector("#footer-box").innerHTML = footer;


//>>>>>>>>>>>>>>>>>>>>>>>>>>>> For Storing liked Data to local Storage <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var likedSongs = JSON.parse(localStorage.getItem("Liked-Songs")) || [];





// <<<<<<<<<<<<<<<<<<  function for auto change token >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var spotify_token = localStorage.getItem("spotify_token")
let token_timer = localStorage.getItem('token_timer', "time") || 0
const today = new Date();

let time = today.toTimeString()[0] + today.toTimeString()[1]

console.log(time);

setInterval(function () {
    time = today.toTimeString()[0] + today.toTimeString()[1];
}, 3000)

if (token_timer === "0" || time != token_timer || spotify_token == undefined || spotify_token == null) {
    localStorage.setItem('token_timer', time)
    localStorage.removeItem("spotify_token");
    refreshToken()
    console.log("Your new generated token is this", spotify_token)
}


// end 


// <<<<<<<<<<<<<<<<<<<<<<<<<< Teking data from API >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// getplaylistdata();

async function getplaylistdata() {

    var playlistdata = await getPlaylists("gaming", "11", spotify_token);

    console.log(playlistdata);
    let playlistdetails = playlistdata[2];
    console.log("PlaylistDetails : ", playlistdetails)

    localStorage.setItem("PlayList-Name", playlistdetails.name);
    localStorage.setItem("playList-Description", playlistdetails.description);
    localStorage.setItem("playList-Id", playlistdetails.id);
    localStorage.setItem("playList-ImageURL", playlistdetails.images[0].url)

    window.location.href ="./../HTML/sfPlaylist.html";
    return playlistdata;
}

// getalbumdata();
async function getalbumdata() {

    let albmid = "6NiIEKpKQaWY16PwCfbS5V";

    let albumdata = await getAlbumTrack(albmid, spotify_token);

    console.log("Album :", albumdata.items)
    // let playlistdetails = playlistdata[0]; 
    // console.log( "PlaylistDetails : " , playlistdetails )

    // localStorage.setItem("PlayList-Name" , playlistdetails.name);
    // localStorage.setItem("playList-Description" , playlistdetails.description );
    // localStorage.setItem("playList-Id" , playlistdetails.id);
    // localStorage.setItem("playList-ImageURL" , playlistdetails.images[0].url)

    return albumdata.items;
}




async function getdata() {
    // let id = "37i9dQZF1DWVDCraF986xg";
    // localStorage.setItem("playList-Id", id);

     let id = localStorage.getItem("playList-Id");
    var trackdata = await getTrack(id, spotify_token);

    console.log(trackdata.items);

    playlistMainBody(trackdata.items)
    return trackdata.items;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<< Main Function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

main();

async function main() {
    getdata();

}


// <<<<<<<<<<<<<<<<<<<<<<<<<< Storing Data to local Stroage >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


StoreLocal();

function StoreLocal() {

}


// <<<<<<<<<<<<<<<<<<<<<<<Play List main static body >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let Songs_Data2 ;
let userName = JSON.parse( localStorage.getItem("spotify_users") ) ;


async function playlistMainBody(Songs_Data) {
    Songs_Data2 = Songs_Data;
    document.querySelector("#pl_main_div").textContent = "";

    var ODiv = document.createElement("div");
    ODiv.id = "pl_parent_div";

    var head1div = document.createElement("div");
    head1div.id = "pl_top_heading1";

    var arrowDiv = document.createElement("div");
    arrowDiv.classList = "arrow";
    var dummydiv1 = document.createElement("div");
    var arrowimage1 = document.createElement("img");
    arrowimage1.src = "./../IMAGES/AmanImages/left-arrow.png"
    var dummydiv2 = document.createElement("div");
    var arrowimage2 = document.createElement("img");
    arrowimage2.src = "./../IMAGES/AmanImages/right-arrow.png";

    dummydiv1.append(arrowimage1);
    dummydiv2.append(arrowimage2);
    arrowDiv.append(dummydiv1, dummydiv2);

    var plybtn = document.createElement("div");
    plybtn.classList = "pl_top_playbtn";
    plybtn.id = "pl_top_playbtn"
    // plybtn.addEventListener("click", showLikedPlayList);
    var plyimg = document.createElement("img")
    plyimg.src = "./../IMAGES/AmanImages/play-button.png";
    
    plybtn.append(plyimg);

    var plthead = document.createElement("div")
    plthead.classList = "pl_top_heading";

    var plheading1 = document.createElement("h2");
    plheading1.textContent = localStorage.getItem("PlayList-Name");

    plthead.append(plheading1);

    var upgradediv = document.createElement("div");
    upgradediv.classList = "pl_top_upgrade";

    var upbtn = document.createElement("button");
    upbtn.textContent = "Upgrade"

    upgradediv.append(upbtn);

    var usrdiv = document.createElement("div")
    usrdiv.classList = "pl_top_user";

    var usrlgo = document.createElement("img")
    usrlgo.src = "./../IMAGES/AmanImages/user.png";
    usrlgo.id = "usr_Lgo"
    var usrspn = document.createElement("span")
    usrspn.textContent = userName[0].profile_name;
    usrdiv.append(usrlgo, usrspn);
    usrdiv.addEventListener("click" , function () {
        window.location.href = "./../HTML/account.html"
    })
    head1div.append(arrowDiv, plybtn, plthead, upgradediv, usrdiv);

    var head2div = document.createElement("div")
    head2div.id = "pl_top_heading2";

    var plimgdiv = document.createElement("div");
    plimgdiv.id = "showimages";

    var img1 = document.createElement("img");
    img1.src = "./../IMAGES/AmanImages/soundcontroller.jpg";
    var img2 = document.createElement("img");
    img2.src = "./../IMAGES/AmanImages/guitar2.jpg";
    var img3 = document.createElement("img");
    img3.src = "./../IMAGES/AmanImages/headphone.jpg";
    var img4 = document.createElement("img");
    img4.src = "./../IMAGES/AmanImages/musicimg.jpg";
    plimgdiv.append(img1, img2, img3, img4);

    var plshwheading = document.createElement("div");
    plshwheading.id = "showheading"

    var plylist = document.createElement("p")
    plylist.textContent = "PlayList";

    var plynme = document.createElement("h1")
    plynme.textContent = localStorage.getItem("PlayList-Name");

    var plylistdes = document.createElement("p")
    plylistdes.textContent = localStorage.getItem("playList-Description");

    var btmdes = document.createElement("p");

    var spn1 = document.createElement("span");
    spn1.textContent = userName[0].profile_name  ;

    var spn2 = document.createElement("span");
    spn2.textContent = Songs_Data.length;

    btmdes.append(spn1, " | ", spn2, " Songs ");

    plshwheading.append(plylist, plynme, plylistdes, btmdes);

    head2div.append(plimgdiv, plshwheading);

    var head3div = document.createElement("div")
    head3div.id = "pl_top_heading3";


    var head4div = document.createElement("div")
    head4div.id = "pl_top_heading4";

    var srno = document.createElement("p")
    srno.textContent = "#  ";

    var ttl = document.createElement("p")
    ttl.textContent = "  TITLE"

    var albm = document.createElement("p")
    albm.textContent = " AlBUM "

    var dteadd = document.createElement("p")
    dteadd.textContent = "DATE ADDED "

    var tmeimg = document.createElement("img")
    tmeimg.src = "./../IMAGES/AmanImages/history.png";

    head4div.append(srno, ttl, albm, dteadd, tmeimg);

    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Display Songs Section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    var plsonglist = document.createElement("div")
    plsonglist.id = "pl_songs_list";

    let songsdata = showSongs(Songs_Data);
    plsonglist.append(songsdata)

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> changing images of playlist header <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    for (let i = 0; i < Songs_Data.length; i++) {
        if (i == 0)
            img1.src = Songs_Data[0].track.album.images[0].url;
        if (i == 1)
            img2.src = Songs_Data[1].track.album.images[0].url;
        if (i == 2)
            img3.src = Songs_Data[2].track.album.images[0].url;
        if (i == 3)
            img4.src = Songs_Data[3].track.album.images[0].url;
    }



    var plfindmore = document.createElement("div")
    plfindmore.id = "pl_find_more";

    var plrecomendedheading = document.createElement("div")
    plrecomendedheading.id = "pl_recomended_heading";

    var plrecomendedsonglst = document.createElement("div")
    plrecomendedsonglst.id = "pl_recomended_songs_list";

    // ODiv.append(head1div, head2div, head4div, plsonglist, plfindmore, plrecomendedheading, plrecomendedsonglst);
    ODiv.append(head1div, head2div, head4div, plsonglist);


    document.querySelector("#pl_main_div").append(ODiv);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>inilisizing play pause Buttons <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let oldPlay = new Audio('https://p.scdn.co/mp3-preview/324d859b5937620579493eb1b41fbb56f06fd130?cid=5fae4890a7f244b29c841946eaba7a8d');
let oldindex = 0;

let playingIndex;
let audioElement;

function showSongs(sdata) {
    let counteran = 1;
    let stldiv = document.createElement("div");
    // console.log(sdata)
    stldiv.textContent = "";
    oldPlay = new Audio(sdata[0].track.preview_url);
    oldindex = 0;
    ChangeSongName (sdata[0]);
    sdata.map(function (elem, index) {

        let ParDiv = document.createElement("div");
        ParDiv.classList = "songs_list_div";

        let div1 = document.createElement("div")
        let sr1 = document.createElement("p");
        sr1.textContent = counteran;

        div1.append(sr1)
        div1.classList = "songs_list_div_image_serialNo"



        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Handling Play Pause Button <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        let audioElement = new Audio(elem.track.preview_url);

        div1.addEventListener("click", function () {

            localStorage.setItem("box-song", JSON.stringify(elem));


            if (audioElement.paused || audioElement.currentTime <= 0) {
                if (oldPlay != undefined && !oldPlay.paused) {
                    oldPlay.pause()
                    oldindex = index;
                }
                audioElement.play();
                oldPlay = audioElement;
                oldindex = index;

                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
     
                
                ChangeSongName (elem);

                oldPlay.addEventListener('timeupdate', () => {
                    // console.log('timeupdate');
                    //update seekbar 

                    let progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
                    //    console.log(progress);
                    myProgressBar.value = progress;

                    if( progress >= 100 ){
                        console.log("aman")
                        nextSong();
                    }
                })

                let playicon = document.createElement("img");
                playicon.src = "./../IMAGES/AmanImages/playing.gif"
                if (srnoorg == 0) {
                    srnoorg = div1.textContent;
                }
                playicon.style.width = "12px"
                playicon.style.height = "12px"
                div1.textContent = "";
                div1.append(playicon)

                playingIndex = index;

            } else {

                audioElement.pause();
                
                masterPlay.classList.add('fa-play-circle');
                masterPlay.classList.remove('fa-pause-circle');
            }

        })

        let div2 = document.createElement("div")

        let imgg = document.createElement("img")
        imgg.src = elem.track.album.images[0].url;;
        imgg.classList = "songs_list_div_image"
        div2.append(imgg);
        let div3 = document.createElement("div");
        let idiv1 = document.createElement("div");

        let sngnme = document.createElement("h4");
        sngnme.textContent = elem.track.name;
        sngnme.classList = "songs_list_div_song_heading"

        let artnme = document.createElement("p");
        artnme.textContent = elem.track.album.artists[0].name;
        artnme.classList = "songs_list_div_song_artist"
        idiv1.append(sngnme, artnme);
        div3.append(idiv1);
        div3.classList = "songs_list_div_heading_div3"

        let div4 = document.createElement("div")
        div4.textContent = elem.track.album.name;
        div4.classList = "songs_list_div_song_album"
        let div5 = document.createElement("div")
        let dte = elem.added_at;
        div5.textContent = dte.substring(0, 10);
        div5.classList = "songs_list_div_div5_date"
        let div6 = document.createElement("div")
        let harimg = document.createElement("img");

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Liked PlayList Functionality <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

        if (likedSongs.some((arrVal) => elem.track.id == arrVal.track.id)) {

            harimg.src = "./../IMAGES/AmanImages/love.png"

        } else {
            harimg.src = "./../IMAGES/AmanImages/heart.png"
        }
        div6.addEventListener("click", function () {

            let temp = likedSongs.find((arrVal) => elem.track.id == arrVal.track.id)
            if (temp) {

                likedSongs.map(function (filterelem, index) {
                    if (elem.track.id == filterelem.track.id) {

                        likedSongs.splice(index, 1)
                        localStorage.setItem("Liked-Songs", JSON.stringify(likedSongs));
                        playlistMainBody(sdata)
                    }
                })

            } else {
                likedSongs.push(elem);
                localStorage.setItem("Liked-Songs", JSON.stringify(likedSongs));

                harimg.src = "./../IMAGES/AmanImages/love.png"
                // showSongs(sdata);
            }

        })



        harimg.classList = "songs_list_div_heartimage"
        div6.append(harimg);
        let div7 = document.createElement("div")
        let duration = elem.track.duration_ms;
        let durmin = duration / 60000;
        let durminfix = durmin.toFixed();
        let dursec = duration % 60;
        if (dursec < 10) {
            dursec = dursec * 10;
            if(dursec > 59 ){
                dursec = dursec / 2 ;
            }
        }

        div7.textContent = durminfix + " : " + dursec;
        div7.classList = "songs_list_div_div7_duration"
        let div8 = document.createElement("div")
        div8.textContent = "..."
        div8.classList = "songs_list_div_div8"

        let srnoorg = 0;

        ParDiv.addEventListener("mouseover", function () {
            ParDiv.classList.remove("songs_list_div");
            ParDiv.classList.add("songs_list_div_hover");
            let playicon = document.createElement("img");
            playicon.src = "./../IMAGES/AmanImages/play-button-arrowhead.png"
            if (srnoorg == 0) {
                srnoorg = div1.textContent;
            }
            playicon.style.width = "12px"
            playicon.style.height = "12px"
            div1.textContent = "";

            div1.append(playicon)

        })

        ParDiv.addEventListener("mouseout", function () {
            ParDiv.classList.remove("songs_list_div_hover");
            ParDiv.classList.add("songs_list_div");

            let srnoicon = document.createElement("p");
            srnoicon.textContent = srnoorg;
            div1.textContent = "";


            div1.append(srnoicon);

        })

        ParDiv.append(div1, div2, div3, div4, div5, div6, div7, div8);
        stldiv.append(ParDiv);
        counteran++;

    });



    return stldiv;

}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Play Pause Controller >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

masterPlay.addEventListener("click", SongController)

function SongController() {

    

    if (oldPlay != undefined && oldPlay.paused || oldPlay.currentTime <= 0) {

        oldPlay.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


        oldPlay.addEventListener('timeupdate', () => {
            // console.log('timeupdate');
            //update seekbar 

            let progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
            // console.log(progress);
            myProgressBar.value = progress;
            document.querySelector("#curr_song_time").textContent = oldPlay.currentTime.toFixed(0) ;
            if( progress >= 100 ){
                console.log("aman")
                nextSong();
            }
        })
    }
    else {
        oldPlay.pause();
       
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Play Pause time update Controller >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// oldPlay.addEventListener('timeupdate', () => {
//     console.log('timeupdate');
//     //update seekbar 


//     progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
//     console.log(progress);
//     myProgressBar.value = progress;
// })

myProgressBar.addEventListener('change', () => {
    // console.log("change the song value")
    oldPlay.currentTime = myProgressBar.value * oldPlay.duration / 100;
})




document.getElementById("shuffle_btn").addEventListener("click", () => {
    shuffleSong();
})
let shuffleSong = () => {
    // console.log(Songs_Data2[oldindex].track.preview_url);
    // console.log(Songs_Data2.length);
    let x = Math.floor((Math.random() * ( Songs_Data2.length - 1 )) + 1);
    oldindex = x ;
    console.log("Random Index" , x);
    if (oldindex <= 0) {
        oldindex = Songs_Data2.length - 1;
    }
    // oldPlay = Songs_Data2[oldindex];
    oldPlay.src = Songs_Data2[oldindex].track.preview_url;
    oldPlay.play();
    // console.log(oldindex)

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
        

    ChangeSongName (Songs_Data2[oldindex]);

    oldPlay.addEventListener('timeupdate', () => {
        // console.log('timeupdate');
        //update seekbar 

        let progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
        // console.log(progress);
        myProgressBar.value = progress;
        document.querySelector("#curr_song_time").textContent = oldPlay.currentTime.toFixed(0) ;
        if( progress >= 100 ){
            console.log("aman")
            nextSong();
        }
    })



   
}



document.getElementById("previous_button").addEventListener("click", () => {
    previousSong();
})
let previousSong = () => {
    // console.log(Songs_Data2[oldindex].track.preview_url);
    // console.log(Songs_Data2.length);
    oldindex--;
    if (oldindex <= 0) {
        oldindex = Songs_Data2.length - 1;
    }
    // oldPlay = Songs_Data2[oldindex];
    oldPlay.src = Songs_Data2[oldindex].track.preview_url;
    oldPlay.play();
    // console.log(oldindex)

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
       

    ChangeSongName (Songs_Data2[oldindex]);

    oldPlay.addEventListener('timeupdate', () => {
        // console.log('timeupdate');
        //update seekbar 

        let progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
        // console.log(progress);
        myProgressBar.value = progress;
        document.querySelector("#curr_song_time").textContent = oldPlay.currentTime.toFixed(0) ;
        if( progress >= 100 ){
            console.log("aman")
            nextSong();
        }
    })

   
}




document.getElementById("next_button").addEventListener("click", ()=> {
   nextSong();
})
let nextSong = () => {
    // console.log(Songs_Data2[oldindex].track.preview_url);
    // console.log(Songs_Data2.length);
    oldindex++;
    if (oldindex >= Songs_Data2.length ) {
        oldindex = 0;
    }
    // oldPlay = Songs_Data2[oldindex];
    oldPlay.src = Songs_Data2[oldindex].track.preview_url;
    oldPlay.play();
    // console.log(oldindex)

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
       
    ChangeSongName (Songs_Data2[oldindex]);

    oldPlay.addEventListener('timeupdate', () => {
        // console.log('timeupdate');
        //update seekbar 

        let progress = parseInt((oldPlay.currentTime / oldPlay.duration) * 100);
        // console.log(progress);
        myProgressBar.value = progress;
        document.querySelector("#curr_song_time").textContent = oldPlay.currentTime.toFixed(0) ;
        if( progress >= 100 ){
            console.log("aman")
            nextSong();
        }
    })
    

}

function ChangeSongName (elem) {

    let imaggeUrl = document.querySelector("#playing_img")
    imaggeUrl.src = elem.track.album.images[0].url ;
    let SongName1 = document.querySelector("#player_song_name")
    SongName1.textContent = elem.track.name;
    let ArtistName1 = document.querySelector("#player_artist_name")
    ArtistName1.textContent = elem.track.album.artists[0].name ;
    localStorage.setItem("box-song" , JSON.stringify(elem));      // Storing to local stroage current song
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Adding Liked Songs from botton masterplay  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let likebtnmasterplay = document.querySelector("#like_btn_MasterPlay_Div");
let Like_btn_MasterPlay = document.querySelector("#Like_button_MasterPlay");

likebtnmasterplay.addEventListener("click", function () {

    let temp = likedSongs.find((arrVal) => Songs_Data2[oldindex].track.id == arrVal.track.id)
    if (temp) {

        likedSongs.map(function (filterelem, index) {
            if (Songs_Data2[oldindex].track.id == filterelem.track.id) {

                likedSongs.splice(index, 1)
                localStorage.setItem("Liked-Songs", JSON.stringify(likedSongs));
                Like_btn_MasterPlay.src = "./../IMAGES/AmanImages/heart.png"
                // playlistMainBody(Songs_Data2)
            }
        })

    } else {
        likedSongs.push(Songs_Data2[oldindex]);
        localStorage.setItem("Liked-Songs", JSON.stringify(likedSongs));
        // playlistMainBody(Songs_Data2)
         Like_btn_MasterPlay.src = "./../IMAGES/AmanImages/love.png"
        // showSongs(sdata);
    }

})


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< All Navigation Section Side Bar  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//>>>>>>>>>>>>>>>>>> Like Button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector("#Liked_Songs_Side_Nav").addEventListener("click", showLikedPlayList);


function showLikedPlayList() {
    // console.log(likedSongs)
    // location.reload();
    localStorage.setItem("PlayList-Name", "Liked Songs");
    localStorage.setItem("playList-Description", "Your Favourite Songs are Here ! ");

    playlistMainBody(likedSongs)

}




//>>>>>>>>>>>>>>>>>> Home  Button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



document.querySelector("#Home_Button_Side_Nav").addEventListener("click", GotoHomePage);


function GotoHomePage() {
    
    window.location.href = "./../HTML/index.html";

}


//>>>>>>>>>>>>>>>>>> Search  Button >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector("#Search_Button_Side_Nav").addEventListener("click", GotoSearchPage);


function GotoSearchPage() {

    window.location.href = "./../HTML/index.html";

}



export { getdata, showSongs }