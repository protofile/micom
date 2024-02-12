$(document).ready(function(){

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 530) {
            $('.header').addClass('sticky');
            $(".master").css("padding-top","530px");
        }
        else {
            $('.header').removeClass('sticky');
            $(".master").css("padding-top","0");
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 1000) {
            $('.back-to-top').addClass('show');
        }
        else {
            $('.back-to-top').removeClass('show');
        }
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 670) {
            $('.flying-skycrapper').addClass('sticky');
        }
        else {
            $('.flying-skycrapper').removeClass('sticky');
        }
    });
    // scroll to top
    var toTop = $('.back-to-top');
    // logic
    toTop.on('click', function() {
        $('html, body').animate({
        scrollTop: $('html, body').offset().top,
        },2000);
    });

    //POPUP
    $(".popup .close-bt").click(function(){
        $(".overlay").removeClass("show");
    });

    $(".bottom-ads .close-bt").click(function(){
        $(".bottom-ads").toggleClass("hide");
        $(this).children(".fa").toggleClass("fa-angle-up fa-angle-down");
    });
});