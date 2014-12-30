$(window).resize(function() {
        
  var tab_width = $(window).width()/3;
  var content_width = $(window).width();
  var content_height = $(window).height();
  var duration = 350;
  var tab_box_class = $(".tab");
  var content_box_class = $(".content-box");

  tab_box_class.turnBox({
    width: tab_width,
    height: 60,
    perspective: 300,
    duration: duration,
    easing: "ease-in-out"
  });

  content_box_class.turnBox({
    width: content_width,
    height: content_height,
    perspective: 1300,
    duration: duration,
    easing: "ease-in-out",
    type: "skip",
    axis: "y"
  });

  for(i = 0; i < tab_box_class.length; i++) {
    var num = i + 1;
    $(".tab.tab-" + num).turnBoxLink(
    {
      box: ".content-box",
      dist: num,
      events: "click"
    });
  };

  $.each($(".tabs").children(), function(key)
  {
    var tab = key + 1;

    $(".tab.tab-" + tab).find(".turnBoxButton").on("click", function()
    {
      $(".tab").not(".tab-" + tab).turnBoxAnimate();
    });
  });

  $(".tab.tab-1").turnBoxAnimate(
  {
    face: 2,
    animation: false
  });
});

var tab_width = $(window).width()/3;
var content_width = $(window).width();
var content_height = $(window).height();
var duration = 350;
var tab_box_class = $(".tab");
var content_box_class = $(".content-box");

tab_box_class.turnBox({
  width: tab_width,
  height: 60,
  perspective: 300,
  duration: duration,
  easing: "ease-in-out"
});

content_box_class.turnBox({
  width: content_width,
  height: content_height,
  perspective: 1300,
  duration: duration,
  easing: "ease-in-out",
  type: "skip",
  axis: "y"
});

for(i = 0; i < tab_box_class.length; i++) {
  var num = i + 1;
  $(".tab.tab-" + num).turnBoxLink(
  {
    box: ".content-box",
    dist: num,
    events: "click"
  });
};

$.each($(".tabs").children(), function(key)
{
  var tab = key + 1;

  $(".tab.tab-" + tab).find(".turnBoxButton").on("click", function()
  {
    $(".tab").not(".tab-" + tab).turnBoxAnimate();
  });
});

$(".tab.tab-1").turnBoxAnimate(
{
  face: 2,
  animation: false
});

$(".content-box").height($(window).height()-60);
$("#topics,.content").height($(window).height()-60);

$(function(){
 
    // 「ページトップへ」の要素を隠す
    $('.go-top').hide();
 
    // スクロールした場合
    $(window).scroll(function(){
        var pos = $("#fixed").position();
        // スクロール位置が100を超えた場合
        if ($(this).scrollTop() >= pos.top-3) {
            // 「ページトップへ」をフェードイン
            // $('.go-bottom').fadeOut();
            $('.go-bottom').css("display","none");
            $('.go-top').fadeIn();
        }
        // スクロール位置が100以下の場合
        else {
            // 「ページトップへ」をフェードアウト
            $('.go-top').css("display","none");
            $('.go-bottom').fadeIn();
//             $('.go-top').fadeOut();
        }
    });
 
    // 「ページトップへ」をクリックした場合
    $('.go-top').click(function(){
        // ページトップにスクロール
        $('html,body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

    $('.go-bottom').click(function(){
        var pos = $("#fixed").position();
        $("body").animate({
        scrollTop: pos.top
        },"slow", "swing");
        return false;
    });
});
