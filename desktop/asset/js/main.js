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

    setTimeout(function(){
        $(".otp-ads").removeClass("show");
    },5000);

    /*TTS*/
    $(".peringkat .more-bt").click(function(pmb){
        pmb.preventDefault();
        $($(this).attr("href")).addClass("show");
    });
    $(".tts-popup .close-bt").click(function(){
        $(".overlay").removeClass("show");
    });
    $(".peringkat-tab-nav a").click(function(pta){
        pta.preventDefault();
        $(".peringkat-tab-nav a").removeClass("active");
        $(this).addClass("active");
        $(".peringkat-tab-ct").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });
    $(".tts-popup-tab-nav a").click(function(pta){
        pta.preventDefault();
        $(".tts-popup-tab-nav a").removeClass("active");
        $(this).addClass("active");
        $(".tts-pop-tab-ct").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });
});