window.onscroll = function () { myFunction() };
// Get the header
var header = document.getElementById("my-custom-id");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > 40) {
        header.classList.add("hfe-sticky");
    } else {
        setTimeout(function () {
            header.classList.remove("hfe-sticky");
        }, 100);
    }
}
