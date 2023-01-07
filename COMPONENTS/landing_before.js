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
        <div> <h1>Spotify</h1></div>
        <div>
       
        <label id="dark"></label>
       
   
        </div>
    </div>
    
    <div id="pages">
        <div> <i class="fa-solid fa-house"></i>Home </div> 
        <div><i class="fa-solid fa-magnifying-glass"></i>  Search</div> 
        <div><i class="fa-solid fa-music"></i> Your Library</div>
        <div><i class="fa-solid fa-plus"></i>Create Playlist</div>
        <div><i class="fa-solid fa-heart"></i>Liked Song</div>
    </div>
    <hr>
     <div id="app"> <p><i class="fa-regular fa-circle-down"></i>install App</p></div>
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


export {nav_bar_before_login, main_container_before_login, footer_before_login, right_sidebar, main_container_after_login}