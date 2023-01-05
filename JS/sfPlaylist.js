
import getKeys from "./../UTILITY/aman_keys.js";
import {
    refreshToken,
    getPlaylists,
    getTrack,
    getAllSearchResults,
    getAlbumTrack,
    getCategoryPlaylists,
} from "./../UTILITY/api_call.js";

import { getData } from "./../UTILITY/aman_keys.js";

var data = getData();

console.log(data.items);


playlistMainBody()

function playlistMainBody() {

    var ODiv = document.createElement("div");
    ODiv.id = "pl_parent_div";

    var head1div = document.createElement("div");
    head1div.id = "pl_top_heading1";

    var arrowDiv = document.createElement("div");
    arrowDiv.classList = "arrow";
    var dummydiv1 = document.createElement("div");
    var arrowimage1 = document.createElement("img");
    arrowimage1.src = "";
    arrowimage1.src = "./../IMAGES/AmanImages/left-arrow.png"
    var dummydiv2 = document.createElement("div");
    var arrowimage2 = document.createElement("img");
    arrowimage2.src = "./../IMAGES/AmanImages/right-arrow.png";

    dummydiv1.append(arrowimage1);
    dummydiv2.append(arrowimage2);
    arrowDiv.append(dummydiv1, dummydiv2);

    var plybtn = document.createElement("div");
    plybtn.classList = "pl_top_playbtn";

    var plyimg = document.createElement("img")
    plyimg.src = "./../IMAGES/AmanImages/play-button.png";

    plybtn.append(plyimg);

    var plthead = document.createElement("div")
    plthead.classList = "pl_top_heading";

    var plheading1 = document.createElement("h2");
    plheading1.textContent = "Aman's PlayList";

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
    img1.src = "./../IMAGES/AmanImages/GirlListeningSong.gif";
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
    plynme.textContent = "Aman's PlayList";

    var plylistdes = document.createElement("p")
    plylistdes.textContent = "All Songs Collection";

    var btmdes = document.createElement("p");

    var spn1 = document.createElement("span");
    spn1.textContent = "Aman Ninave "

    var spn2 = document.createElement("span");
    spn2.textContent = "10 "

    var spn3 = document.createElement("span");
    spn3.textContent = "32 "

    var spn4 = document.createElement("span");
    spn4.textContent = "49 ";

    // btmdes.append( spn1 , ptg1 , spn2 , ptg2 , spn3, ptg3 , spn4, ptg4 );
    btmdes.append(spn1, "| ", spn2, "Songs ", spn3, "Min ", spn4, "Sec");

    plshwheading.append(plylist, plynme, plylistdes, btmdes);

    head2div.append(plimgdiv, plshwheading);

    var head3div = document.createElement("div")
    head3div.id = "pl_top_heading3";


    var head4div = document.createElement("div")
    head4div.id = "pl_top_heading4";

    var srno = document.createElement("p")
    srno.textContent = "#  " ;

    var ttl = document.createElement("p")
    ttl.textContent = "  TITLE"

    var albm = document.createElement("p")
    albm.textContent = " AlBUM "

    var dteadd = document.createElement("p")
    dteadd.textContent = "DATE ADDED "

    var tmeimg = document.createElement("img")
    tmeimg.src = "./../IMAGES/AmanImages/history.png";

    head4div.append( srno , ttl, albm, dteadd, tmeimg);

    var plsonglist = document.createElement("div")
    plsonglist.id = "pl_songs_list";
    let songsdata = showSongs(data.items);
    plsonglist.append(songsdata)

    var plfindmore = document.createElement("div")
    plfindmore.id = "pl_find_more";

    var plrecomendedheading = document.createElement("div")
    plrecomendedheading.id = "pl_recomended_heading";

    var plrecomendedsonglst = document.createElement("div")
    plrecomendedsonglst.id = "pl_recomended_songs_list";

    ODiv.append(head1div, head2div, head4div, plsonglist, plfindmore, plrecomendedheading, plrecomendedsonglst);

    document.querySelector("#pl_main_div").append(ODiv);
}

// var tokan = "BQCgsCECRGOAMzLjDnOjwwmTwqWJAkjYWuk_Jxe0k2d0oxKb__55Dt6WhGyytOaw5w0PwnWCdyIU0f3FVIcJO82iATa1as3Cl9VJvMCbQbBOIBygyL_aySBqVcl3NHV4Ylws3XajjkX";
// getdata()
// async function getdata () {

//     var playlistdata = await getPlaylists("romantic" , "11" , tokan );

//     console.log(playlistdata);
// } 




function showSongs(sdata) {
    let counteran = 1;
    let stldiv = document.createElement("div");
    console.log(sdata)
    sdata.map( function ( elem ) {

        let ParDiv = document.createElement("div");
        ParDiv.classList = "songs_list_div";
        let div1 = document.createElement("div")
        div1.textContent = counteran;
        div1.classList = "songs_list_div_image_serialNo"
        let div2 = document.createElement("div")
       
            let imgg = document.createElement("img")
            imgg.src = "./../IMAGES/AmanImages/GirlListeningSong.gif";
            imgg.classList ="songs_list_div_image"
        div2.append(imgg);
        let div3 = document.createElement("div");
            let idiv1 = document.createElement("div");
                let sngnme = document.createElement("h4");
                sngnme.textContent = "Mehendi - Dhol Mix"
                sngnme.classList = "songs_list_div_song_heading"
                let artnme = document.createElement("p");
                artnme.textContent = "Dhwani Bhanushali, Arijeet Singh , Guru Randhava"
                artnme.classList = "songs_list_div_song_artist"
            idiv1.append(sngnme , artnme);
        div3.append(idiv1);
        div3.classList = "songs_list_div_heading_div3"

        let div4 = document.createElement("div")
        div4.textContent = "Mehandi Dhol Mix";
        div4.classList = "songs_list_div_song_album"
        let div5 = document.createElement("div")
        div5.textContent = " 1 Day Ago "
        div5.classList = "songs_list_div_div5_date"
        let div6 = document.createElement("div")
            let harimg = document.createElement("img");
            harimg.src ="./../IMAGES/AmanImages/heart.png"
    
            harimg.classList = "songs_list_div_heartimage"
        div6.append(harimg);
        let div7 = document.createElement("div")
        div7.textContent = "3:57";
        div7.classList ="songs_list_div_div7_duration"
        let div8 = document.createElement("div")
        div8.textContent = "..."
        div8.classList = "songs_list_div_div8"

        ParDiv.append(div1, div2, div3, div4, div5, div6, div7, div8);
    stldiv.append(ParDiv);
        counteran++;
        
    });

    return stldiv;

}






