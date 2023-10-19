$(document).ready(function(){

    $(".burger").click(function(bbb){
        $(".mobile-nav").addClass("show");
        bbb.preventDefault();
    });
    $(".mobile-nav .close-bt").click(function(){
        $(".mobile-nav").removeClass("show");
    });

    $(".mob-nav li a.drop-bt").click(function(mb){
        mb.preventDefault();
        $($(this).siblings(".drop-ct")).toggleClass("show");
    });

});