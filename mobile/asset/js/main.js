$(document).ready(function () {
  $(".burger").click(function (bbb) {
    $(".mobile-nav").addClass("show");
    bbb.preventDefault();
  });
  $(".mobile-nav .close-bt").click(function () {
    $(".mobile-nav").removeClass("show");
  });

  $(".mob-nav li a.drop-bt").click(function (mb) {
    mb.preventDefault();
    $($(this).siblings(".drop-ct")).toggleClass("show");
  });

  $(".sticky-video-ads .close-bt").click(function () {
    $(".sticky-video-ads").removeClass("show");
  });

  //POPUP
  $(".popup .close-bt").click(function () {
    $(".overlay").removeClass("show");
  });

  $(".bottom-ads .close-bt").click(function () {
    $(".bottom-ads").toggleClass("hide");
    $(this).children(".fa").toggleClass("fa-angle-up fa-angle-down");
  });

  setTimeout(function () {
    $(".otp-ads").removeClass("show");
  }, 5000);

  //COMMENT SECTION
  $(".right-button-wrap .toggle-bt").click(function(tbb){
    tbb.preventDefault();
    $($(this).parent()).addClass("active");
  });
  $(".report-foot .close-bt").click(function(rw){
    rw.preventDefault();
    $($(this).parent().parent().parent()).removeClass("active");
  });
  $(".comment-item-foot .reply-bt").click(function(cbb){
    cbb.preventDefault();
    $($(this).parent().next()).slideToggle();
  });

  //JUZ AMMA
  $(".menu-juz-amma").click(function(){
    $(".juz-amma").toggleClass("show");
    $($(this).children(".fa")).toggleClass("fa-caret-up fa-caret-down");
  }); 

  //STICKER COMMENT
  $(".sticker-bt").click(function(sb){
    sb.preventDefault();
    $(this).toggleClass("clicked");
    $(".sticker-pop").toggleClass("show");
  });
  //filter
  /*$(".sticker-filter a").click(function(sfa){
    sfa.preventDefault();
    $(".sticker-filter a").removeClass("active");
    $(this).addClass("active");
    $(".sticker-list button").removeClass("show");
    $("." + $(this).attr("href")).addClass("show");
  });*/
});
