$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let str = $("#str");
    let strToggle = $("#strToggle");
    let slider = $("#otzSlider");
    let mySidenav = $("#mySidenav")

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH - 652 ) {
            header.addClass("fixed");
            mySidenav.addClass("fixed");
        } else {
            header.removeClass("fixed");
            mySidenav.removeClass("fixed");
        }
    }



    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $(window).on("scroll resize", function() {
            console.log(scrollPos, elementId, elementOffset)
    
        });

        str.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    strToggle.on("click", function(event) {
        event.preventDefault();

        str.toggleClass("show");
    });

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});
