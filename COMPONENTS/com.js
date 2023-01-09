function lets_do_resize() {
 
    var resizer = document.querySelector(".resizer"),
        sidebar = document.querySelector(".sidebar");
    function Resizer_handler_dude(resizer, sidebar) {
        var x, w;
        function resize_mouse_down_Handler(e) {
            x = e.clientX;
            var sbWidth = window.getComputedStyle(sidebar).width;
            w = parseInt(sbWidth, 10);
            document.addEventListener("mousemove", resize_mouse_move_Handler);
            document.addEventListener("mouseup", resize_mouse_up_Handler);
        }
        function resize_mouse_move_Handler(e) {
            var homPlayListDiv = document.getElementById("playlist_one")
            var homPlayListDiv1 = document.getElementById("playlist_two")
            var homPlayListDiv2 = document.getElementById("playlist_three")
            var homPlayListDiv3 = document.getElementById("playlist_four")

            var dx = e.clientX - x;
            var cw = w + dx;
            if (cw < 500 && cw > 260) {
                sidebar.style.width = `${cw}px`;
                let width = screen.width;
                document.getElementById("Nav-Bar-Container").style.width = `${width-cw}px`
                document.getElementById("right_top_container").style.marginLeft = `${cw}px`
                
            }
            if(cw > 300 && cw < 400 ){
                if(homPlayListDiv!=null){
                    homPlayListDiv.classList.remove("reSizeGrid1")
                    homPlayListDiv.classList.add("reSizeGrid")
                    homPlayListDiv1.classList.remove("reSizeGrid1")
                    homPlayListDiv1.classList.add("reSizeGrid")
                    homPlayListDiv2.classList.remove("reSizeGrid1")
                    homPlayListDiv2.classList.add("reSizeGrid")
                    homPlayListDiv3.classList.remove("reSizeGrid1")
                    homPlayListDiv3.classList.add("reSizeGrid")

                }
            }
            else if(cw> 400 && cw < 450){
                if(homPlayListDiv!=null){
                    homPlayListDiv.classList.remove("reSizeGrid")
                    homPlayListDiv.classList.add("reSizeGrid1")
                    homPlayListDiv1.classList.remove("reSizeGrid")
                    homPlayListDiv1.classList.add("reSizeGrid1")
                    homPlayListDiv2.classList.remove("reSizeGrid")
                    homPlayListDiv2.classList.add("reSizeGrid1")
                    homPlayListDiv3.classList.remove("reSizeGrid")
                    homPlayListDiv3.classList.add("reSizeGrid1")
                }
            }else if(cw<280){
                if(homPlayListDiv!=null){
                    homPlayListDiv.classList.remove("reSizeGrid1")
                    homPlayListDiv.classList.remove("reSizeGrid")
                    homPlayListDiv1.classList.remove("reSizeGrid1")
                    homPlayListDiv1.classList.remove("reSizeGrid")
                    homPlayListDiv2.classList.remove("reSizeGrid1")
                    homPlayListDiv2.classList.remove("reSizeGrid")
                    homPlayListDiv3.classList.remove("reSizeGrid1")
                    homPlayListDiv3.classList.remove("reSizeGrid")
                }
            }
            
        }
        function resize_mouse_up_Handler() {
            document.removeEventListener("mouseup", resize_mouse_up_Handler);
            document.removeEventListener("mousemove", resize_mouse_move_Handler);
        }
        resizer.addEventListener("mousedown", resize_mouse_down_Handler);
    }
    Resizer_handler_dude(resizer, sidebar);
}
 
 
export {lets_do_resize}