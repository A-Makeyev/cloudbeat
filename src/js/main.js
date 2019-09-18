$(document).ready(function() {

     $(window).scroll(function() {
          var scrolling = $(this).scrollTop();
          if (scrolling >= 1) {
               $(".nav").addClass("fixed");
          } else {
               $(".nav").removeClass("fixed");
          }

     });


     // Toggle demo div

     $(".demo").click(function() {
          $(".demo-div").toggleClass("open");
          $(".dark").toggleClass("blur");
     });
     
     $(".nav-close").click(function() {
          $(".demo-div").removeClass("open");
          $(".dark").removeClass("blur");
     });


     // Hamburger menu
     // Toggle full nav

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


     // Load ide.html into demo-div
     // $("#ide").load("ide.html");


     const oxygen = {
          "init": "web.init();",
          "open": "web.open();"
     }


     







});