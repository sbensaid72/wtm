// Get the header element
var header = document.getElementById("header");

// Get the offset position where the header becomes sticky
var sticky = header.offsetTop;

// Add the sticky class when scrolling reaches the header
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Execute myFunction on scroll
window.onscroll = myFunction;
