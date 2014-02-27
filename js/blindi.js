$(document).ready(function (){

      var width;
      var height;
      var menu = $("#menu").width();

      setTimeout(function () {

      width = $(window).width();
      height = $(document).height();

      var contentW = Math.floor(width/2);
      var contentH = Math.floor(height/2);

      $('#wrap').css({"min-width": width+20, "max-height": height});

      }, 500);

      var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/); 

      if( isMobile != null ) {

        $("#menu").css({"position": "relative", "width": "400px"});
        $(".topmenu").css({"width": "80px", "text-align": "center"});
        $(".submenu").css({"width": "100%", "text-align": "center"});
        $(".submenu a").css({"width": "100%", "text-align": "center"});
        $('#teaser').css({"width": "100%", "height": "auto", "margin-right": "auto", "margin-left": "100px",  "float": "left"});
        $('.text_teaser').css({"height": "auto"});
        $('#cc').hide();
      }

});