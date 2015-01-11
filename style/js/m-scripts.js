$(function(){
   $('.go-top').click(function(){
      // ページトップにスクロール
      $('html,body').animate({
         scrollTop: 0
      }, 300);
      return false;
   });
   var tab = $('.side-bar'),
   offset = tab.offset();
   $(window).scroll(function () {
     if($(window).scrollTop() > offset.top-70) {
       tab.addClass('fixed');
     } else {
       tab.removeClass('fixed');
     }
   });

});
