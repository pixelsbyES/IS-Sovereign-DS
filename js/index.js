AOS.init();
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
});

if (screen.width <= 1024) {
    // $("#our-services-section .row").removeAttr("data-aos");
    // $("#our-services-section div").removeClass("row");
    // $("#services").addClass("row");
}
