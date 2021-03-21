AOS.init();
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded");
});

if (screen.width <= 1024) {
    $("#our-services-section .row").removeAttr("data-aos");
    $(".d-flex.justify-content-center.col-xl-4").unwrap();
    $("#services .row").removeClass("row");
    $("#services").addClass("row");

}
