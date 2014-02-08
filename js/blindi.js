$(document).ready(function (){

      var width;
      var height;
      var menu = $("#menu").width();

      console.log(menu);

      setTimeout(function () {

      width = $(window).width();
      height = $(document).height();

      var contentW = Math.floor(width/2);
      var contentH = Math.floor(height/2);

      $('#wrap').css({"min-width": width+20, "min-height": height});

      }, 500);

      /*$('.home').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto", "float": "right"});
      $('#texts').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});
      $('#gallery').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});
      $('.gallery_teaser').css({"width": (contentW/3) + (contentW/10), "float": "left", "display": "inline"});
      $('.text').css({"max-width": (contentW/2) + (contentW/6), "height": "auto", "margin-left": "auto", "float": "right", "display": "inline-block"});
      $('.images').css({"max-width": (contentW/2) + (contentW/6), "float": "left"});
      $('#teaser').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});
      $('.websites').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});
      $('#video_teaser').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});
      $('#contact').css({"max-width": contentW, "height": "auto", "margin-right": "25%", "margin-left": "auto",  "float": "right"});*/

      if (menu < width/3) {
        $("#menu").css({"position": "relative"})
        $(".topmenu").css({"width": "100%", "text-align": "center"});
        $(".submenu").css({"width": "100%", "text-align": "center"});
        $(".submenu a").css({"width": "100%", "text-align": "center"});
      }

});