$(document).ready(function() {

     $(window).scroll(function() {
          var scrolling = $(this).scrollTop();
          if (scrolling >= 1) {
               $(".nav").addClass("fixed");
          } else {
               $(".nav").removeClass("fixed");
          }

     });

     // Hamburger menu

     $(".nav-icon").click(function() {
          $(".full-nav").addClass("open");
     });

     $(".nav-close").click(function() {
          $(".full-nav").removeClass("open");
     });


     $(".nav-close").mouseenter(function() {
          $("#nav-close-1").css("backgroundColor", "#3AAFDE");
          $("#nav-close-2").css("backgroundColor", "#3AAFDE");
     });


     $(".nav-close").mouseleave(function() {
          $("#nav-close-1").css("backgroundColor", "#3D3D3D");
          $("#nav-close-2").css("backgroundColor", "#3D3D3D");
     });


});