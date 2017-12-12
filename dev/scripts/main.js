

const portfolio = {};


portfolio.init = function () {

    

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