$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed:2500000
    });
});

$(document).ready(function(){
    $('.sell').slick({
        adaptiveHeight: true,
        autoplay: true,
        slidesToShow: 4,
        touchMove: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 900
    });
});