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

});