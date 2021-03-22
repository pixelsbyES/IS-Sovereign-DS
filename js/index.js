
// *************To load animations*****************
AOS.init();
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
});



// *************Hamburger icon animation*****************
document.getElementsByClassName("first-button")[0].onclick = openNavbar;

function openNavbar() {
    document.getElementsByClassName("navbar-toggler-icon")[0].classList.toggle("open");
    //document.getElementById("navbarNavDropdown").style.backgroundColor = "rgba(218, 214, 204, 1)";
    document.getElementsByClassName("navbar")[0].classList.toggle("background");
}





// if (screen.width <= 1030) {
//     $("#our-services-section .row").removeAttr("data-aos");
//     $(".d-flex.justify-content-center.col-xl-4").unwrap();
//     $("#services .row").removeClass("row");
//     $("#services").addClass("row");

// }
