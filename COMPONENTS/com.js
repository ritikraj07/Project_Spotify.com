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
            var dx = e.clientX - x;
            var cw = w + dx;
            if (cw < 400 && cw > 200) {
                sidebar.style.width = `${cw}px`;
                let width = screen.width;
                document.getElementById("Nav-Bar-Container").style.width = `${width-cw}px`
                document.getElementById("right_top_container").style.marginLeft = `${cw}px`
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