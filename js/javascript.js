/*global $, window, wow*/

$(function () {
    "use strict";
    $(".our-slider, .bd-example").height($(".our-slider .active img").height());
    $(".company-page .comp-slider").height($(window).height() * .5);
    $("body").css({
        paddingTop: $(".main-nav").height()
    });
    $(".collapse").css({
        left: - $(window).width()
    });
    $(window).resize(function () {
        $(".our-slider, .bd-example").height($(".our-slider .active img").height());
        $(".company-page .comp-slider").height($(window).height() * .5);
        $(".collapse").css({
            left: - $(window).width()
        });
        $("body").css({
            paddingTop: $(".main-nav").height()
        });
    });
    
    $(".navbar-toggler").on("click", function () {
        $(".collapse").toggleClass("collapseSl");
    });

    $(window).on("load", function () {
        $("body").css("overflow", "auto");
        $(".loader").fadeOut(1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height() - 200) {
            $(".main-nav").css({
                boxShadow: "0px 0px 10px 0px #000",
            }, 1000);
        } else if ($(window).scrollTop() < $(window).height()) {
            $(".main-nav").css({
                position: "absolute",
                boxShadow: "none",
                top: "0px"
            }, 1000);
        }
    });

});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
wow.init();