$(document).ready(function() {

     // Hamburger menu

     $(".nav-icon").click(function() {
          $(".full-nav").addClass("open");
     });

     $(".nav-close").click(function() {
          $(".full-nav").removeClass("open");
     });


     $(window).scroll(function() {
          var scrolling = $(this).scrollTop();
          if (scrolling >= 1) {
               $(".nav").addClass("fixed");
          }
          else {
               $(".nav").removeClass("fixed");
          }

     });



});