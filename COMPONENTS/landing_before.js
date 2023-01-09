function nav_bar_before_login(){
    return `<div id="b-navbar">
    <button>Premium</button>
    <button>Support</button>
    <button>Download</button>
    <button>|</button>
    <button>Sign up</button>
    <button>Log in</button>
</div>`
}

function main_container_before_login(){
    return `<div id="landing-home">
    <div id="playlist">
        <div id="p-title">
            <h2>Focus</h2>
            <p>SHOW ALL</p>
        </div>
        <div id="p-show">
            <!-- append data -->
        </div>
    </div>
    <div id="focus">
        <div id="f-title">
            <h2>Sleep</h2>
            <p>SHOW ALL</p>
        </div>
        <div id="f-show">
            <!-- data append -->
        </div>
    </div>

    <div id="mood">
        <div id="m-title">
            <h2>Pop</h2>
            <p>SHOW ALL</p>
        </div>
        <div id="m-show">
            <!-- append data -->
        </div>
    </div>
    <div id="bollywood">
        <div id="b-title">
            <h2>Gaming</h2>
            <p>SHOW ALL</p>
        </div>
        <div id="b-show">
            <!-- append data -->
        </div>
    </div>

</div>
<div id="show-login-page">

    <div id="page-outer">
        <div id="page-img">


        </div>
        <div id="notify">
            <div>Start Listening with a free spotify account</div>
            <div>
                <button>SIGN UP FREE</button>
                <h4>DOWNLOAD APP</h4>
            </div>

            <div>
                <p>Already have an account?</p>
                <h5>Login</h5>
            </div>
        </div>
        
    </div>
    <button id="close">close</button>


</div>`
}


function footer_before_login(){
    return `
    <div id="footerbody">
    <div class="logged-out">
    <div class="page_bottom_left">
        <p>PREVIEW OF SPOTIFY</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
        </p>
    </div>
    <div class="page_bottom_right">
        <button class="signup_btn">Sign up free</button>
    </div>
</div>
</div>`
}

function right_sidebar(){
    return ` 
    <div id="logo"> 
       <div id="ban"><img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-256.png" alt=""></div>
        <div> <h1 class="xyz">Spotify</h1></div>
        <div>
       
        <label id="dark" onclick="day_night_fun()"></label>
       
   
        </div>
    </div>
    
    <div id="pages">
        <div> <i class="fa-solid fa-house"></i><span class="xyz"> Home</span></div> 
        <div><i class="fa-solid fa-magnifying-glass"></i> <span class="xyz"> Search</span></div> 
        <div><i class="fa-solid fa-music"></i><span class="xyz"> Your Library</span></div>
        <div><i class="fa-solid fa-plus"></i><span class="xyz"> Create Playlist</span></div>
        <div><i class="fa-solid fa-heart"></i><span class="xyz"> Liked Song</span></div>
    </div>
    <hr>
     <div id="app"> <p><i class="fa-regular fa-circle-down"></i> <span class="xyz"> install App  </span></p></div>
    <div class="resizer">
    </div>
`
}

function main_container_after_login(){
    return `   <div class="show-list">
                 
    <section class="page_right">
        <div class="spotify_playlists">
            <div class="header">
                <div><h2>Spotify original & exclusive shows</h2></div>
                <div><p>SEE ALL</p></div> 
            </div>
            <div class="playlist_container" id="playlist_one"></div>
        </div>
        <div class="spotify_playlists">
            <div class="header">
                <div><h2>Try something else</h2></div>
                <div><p>SEE ALL</p></div>
            </div>
            <div class="playlist_container" id="playlist_two"></div>
        </div>
        <div class="spotify_playlists">
            <div class="header">
                <div><h2>Trending now</h2></div>
                <div><p>SEE ALL</p></div>
            </div>
            <div class="playlist_container" id="playlist_three"></div>
        </div>
        <div class="spotify_playlists">
            <div class="header">
                <div><h2>Bollywood</h2></div>
                <div><p>SEE ALL</p>
                </div>
            </div>
            <div class="playlist_container" id="playlist_four"></div>
        </div>
    </section>
    <div class="background_color"></div>
</div>`
}

function footer_after_login(){
    return ` <div class="player" id="player-box">
    <div class="left-player">
        <div class="player_image_container">
            <img id="playing_img" src="https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg">
        </div>
        <div class="player_desc_container">
            <p id="player_song_name">Dil ka dariya</p>
            <p id="player_artist_name">Ritik Singh</p>
        </div>
        <div class="song_actions_container">
            <div>
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z">
                </path>
              </svg>
            </div>
            <div>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill-rule="nonzero"></path>
                <path d="M10 8h4v3h-4z"></path>
              </svg>
            </div>
          </div>
    </div>
    <div class="mid-player">
        <div class="control_top">
            <div>
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z">
                </path>
                <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z">
                </path>
              </svg>
            </div>
            <div id="previous_button">
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z">
                </path>
              </svg>
            </div>
            <div id="bottom_play_button" >
             
             <i class="fas fa-3x fa-play-circle" id="masterPlay"></i>
             
            </div>
            <div id="next_button">
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z">
                </path>
              </svg>
            </div>
            <div>
              <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z">
                </path>
              </svg>
            </div>
        </div>
        <div class="control_bottom">
            <div class="starting_time">
              <span id="curr_song_time">0:00</span>
            </div>
            <div class="progress_container">
              <input type="range" name="range" id="myProgressBar" min="0" max="100" value="0">
            </div>
            <div class="end_time">
              <span>5:30</span>
            </div>
        </div>
    </div>
    <div class="right-player">
        <div>
            <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z">
              </path>
            </svg>
        </div>
        <div>
            <svg role="presentation" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
              <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z">
              </path>
              <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
        </div>
        <div>
            <svg role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16">
              <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z">
              </path>
              <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
            </svg>
        </div>
        <div class="slider-container">
         
          <progress min="0" max="100" value="50"></progress>
        </div>
    </div>
</div>`
}

function nav_bar_after_login(){
    return `<div id="search_navbar">
<div>
<div class="zyx">
        <h1 style=" color:green" >Spotify</h1>
    </div>
    <div><button class="page_change_btm xyz"><i class="fa-solid fa-greater-than fa-rotate-180 "></i></button></div>
    <div><button class="page_change_btm xyz" ><i class="fa-solid fa-greater-than "></i></button></div>
    
    <div id="search_input_div" style="visibility: hidden;">
        <button><i class="fa-solid fa-magnifying-glass"></i></i></button>
        <input id="search_input_itme_song" type="text" placeholder="What do you want to lisiten">
        <button id="mic_btm"><i class="fa-solid fa-microphone"></i></button>
    </div>
</div>
<div class="xyz" id="upgrade" style="border:1px solid white; border-radius:20px; 
width:12%; padding:2px 15px 2px 10px ;  
cursor:pointer; background:black; overflow:hidden;">
<p style="margin:4px; color:white;" >UPGRADE</p>
</div>

<div id="profile_in_search_page">
    <button><i class="fa-regular fa-user"></i></button>
    <span id="profile_name"> Ritik </span>
   
    <button><i class="fa-sharp fa-solid fa-circle-chevron-down"></i></button>
    
</div>
</div>
`
}


export {nav_bar_before_login, main_container_before_login, 
    footer_before_login, right_sidebar, 
    main_container_after_login,
     footer_after_login, nav_bar_after_login}
