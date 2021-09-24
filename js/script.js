/* =================================
                preloader
==================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

/* ==========================
         Navigation
============================= */
/* black to white and vice versa */
$(function () {

    showHideNave();

    $(window).scroll(function () {

        showHideNave();

    });

    function showHideNave() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            $("#back-to-top").fadeOut();
        }
    }

});

/* ==========================
       Mobile Menu
============================= */
$(function () {

    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});


/* ==========================
         Animation
============================= */
$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});