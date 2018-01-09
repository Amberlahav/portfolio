

const portfolio = {};


portfolio.init = function () {

    //Typing effect in header from typed.js
    $(".typer").typed({
        strings: ["developing", "designing", "discovering"],
        stringsElement: null,
        typeSpeed: 45,
        startDelay: 1000,
        backSpeed: 40,
        backDelay: 1000,
        loop: true,
        loopCount: false,
        showCursor: false,
        cursorChar: ""
    });
    
    // AOS.init();

    function hasTouch() {
        return 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;
    }


    $(".hamburger").click(function () {
        $(".navigation").toggleClass("open");
    })

    $(function () {

        // this code initializes smooth scroll:
        $('a').smoothScroll({
            speed: 650,
        });

    });
};

$(function () {
    portfolio.init();
});