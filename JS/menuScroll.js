$(function(){
  $(".navbar-collapse ul li a, footer ul li a").click(function(){
      var href = $(this).attr("href");
      var offSetTop = $(href).offset().top;

      $("html,body").animate({"scrollTop":offSetTop-150});

      return false;
  });
});