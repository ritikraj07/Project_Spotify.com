
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

    var playlistdata = await getPlaylists("romance", "11", spotify_token);

    console.log(playlistdata);
    let playlistdetails = playlistdata[0];
    console.log("PlaylistDetails : ", playlistdetails)

    localStorage.setItem("PlayList-Name", playlistdetails.name);
    localStorage.setItem("playList-Description", playlistdetails.description);
    localStorage.setItem("playList-Id", playlistdetails.id);
    localStorage.setItem("playList-ImageURL", playlistdetails.images[0].url)

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
    // id = "37i9dQZF1DWVDCraF986xg";
    // localStorage.setItem("playList-Id" , id);

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



async function playlistMainBody(Songs_Data) {

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
    plybtn.addEventListener("click", showLikedPlayList);
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
    var usrspn = document.createElement("span")
    usrspn.textContent = "Aman Ninave";
    usrdiv.append(usrlgo, usrspn);
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
    spn1.textContent = "Aman Ninave "

    var spn2 = document.createElement("span");
    spn2.textContent = Songs_Data.length;

    btmdes.append(spn1, "| ", spn2, " Songs ");

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

    ODiv.append(head1div, head2div, head4div, plsonglist, plfindmore, plrecomendedheading, plrecomendedsonglst);

    document.querySelector("#pl_main_div").append(ODiv);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>inilisizing play pause Buttons <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let oldPlay;
let playingIndex;
function showSongs(sdata) {
    let counteran = 1;
    let stldiv = document.createElement("div");
    // console.log(sdata)
    stldiv.textContent = "";
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
            console.log("aman")

            if (audioElement.paused || audioElement.currentTime <= 0) {
                if (oldPlay != undefined && !oldPlay.paused) {
                    oldPlay.pause()
                }
                audioElement.play();
                oldPlay = audioElement;

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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< showing Liked Songs Play List with top play button  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



function showLikedPlayList() {
    // console.log(likedSongs)

    localStorage.setItem("PlayList-Name", "Liked Songs");
    localStorage.setItem("playList-Description", "Your Favourite Songs are Here ! ");

    playlistMainBody(likedSongs)

}
