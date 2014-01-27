$(document).ready(function (){

      var width;
      var height;
      var menu;

  $(window).load(function() {
      width = $(window).width();
      height = $(document).height();

      var contentW = Math.floor(width/2);
      var contentH = Math.floor(height/2);

      menu = $("#menu").width();
      var marginT = Math.floor(menu + height/5);
      var marginR = Math.floor(width/3);

      $('.home').css({"max-width": contentW, "height": "auto", "margin-left": "25%", "margin-right": "auto", "position": "absolute"});
      $('#texts').css({"max-width": contentW, "height": "auto", "margin-left": "25%", "margin-right": "auto",  "position": "absolute"});
      $('#gallery').css({"min-width": contentW, "height": "auto", "margin-left": "45%", "margin-right": "auto",  "position": "absolute"});
      $('.images').css({"max-width": contentW});
      $('#teaser').css({"max-width": contentW, "height": "auto", "margin-left": "25%", "margin-right": "auto",  "position": "absolute"});
      $('.websites').css({"max-width": contentW, "height": "auto", "margin-left": "25%", "margin-right": "auto",  "position": "absolute"});
      $('#video_teaser').css({"max-width": contentW, "height": "auto", "margin-left": "25%", "margin-right": "auto",  "position": "absolute"});


    })

  if (screen.width < 780) {
    $(".topmenu").css({"width": "100%"});
  }

});