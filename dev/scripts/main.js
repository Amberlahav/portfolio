

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
    // setTimeout(function () {
    //     $(".typer").typed({
    //         strings: ["developing", "^222 designing", "^111 discovering"],
    //         typeSpeed: 90,
    //         startDelay: 0,
    //         backSpeed: 65,
    //         backDelay: 900,
    //         loop: true,
    //         loopCount: false,
    //         showCursor: true,
    //         cursorChar: "",
    //         attr: null,
    //         contentType: 'html',
    //         callback: function () { }
    //     })
    // })


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