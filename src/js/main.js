// var date = new Date();
// function dateForm(date) {
//     var dd = String(date.getDate()).padStart(2, "0");
//     var mm = String(date.getMonth() + 1).padStart(2, "0");
//     var yyyy = date.getFullYear();
//     return date = dd + "/" + mm + "/" + yyyy;
// }


     // Load ide.html into demo-div
     // $("#ide").load("ide.html");

     // $(".demo-div").draggable(); 


$(document).ready(function() {

     $(window).scroll(function() {
          var scrolling = $(this).scrollTop();
          if (scrolling >= 1) {
               $(".nav").addClass("fixed");
          } else {
               $(".nav").removeClass("fixed");
          }

     });



     


     var init = "web.init();";
     var open = "web.open('https://sign-up-page.netlify.com/');";
     var typeEmail = "web.type('id=enterEmail', 'test@gmail.com');";
     var typePhone = "web.type('id=phone', 'number');"
     var typeUser = "web.type('id=username', 'Alon Mosk');"
     var typePw = "web.type('id=password', 'pa55word');"
     var typeCpw = "web.type('id=confirm_password', 'pa55word');";
     var click = "web.click('id=submit');";
     var assert = "web.assertText('//div[@id='error']');";


// use of js assert fail
// use of db
// sql

     var ideText = document.getElementById("ide-text");
     var index = 0;


     // Open oxygen demo 

     $("#ide-text").val("1 ");

     $(".demo").click(function() {
          $(".demo").addClass("isDisabled");
          $(".dark").toggleClass("blur");
          $(".demo-div").toggleClass("open");
          
          

          (function insert() {
               ideText.value += init.charAt(index);
               if (++index < init.length) {
                   setTimeout(insert, 50);
               }
           })();


 
           setInterval(() => {
               (function insert() {
                    ideText.value += open.charAt(index);
                    if (++index < open.length - 1) {
                        setTimeout(insert, 50);
                    }
                })();
           }, 1000);




     });
     

     $(".nav-close").click(function() {
          $(".demo").removeClass("isDisabled");
          $(".demo-div").removeClass("open");
          $(".dark").removeClass("blur");
     });

     $(".nav-close-demo").click(function() {
          $(".demo").removeClass("isDisabled");
          $(".demo-div").removeClass("open");
          $(".dark").removeClass("blur");
     });


     $(".nav-close-demo").mouseenter(function() {
          $("#nav-close-demo-1").css("backgroundColor", "#3AAFDE");
          $("#nav-close-demo-2").css("backgroundColor", "#3AAFDE");
     });


     $(".nav-close-demo").mouseleave(function() {
          $("#nav-close-demo-1").css("backgroundColor", "#3D3D3D");
          $("#nav-close-demo-2").css("backgroundColor", "#3D3D3D");
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




});