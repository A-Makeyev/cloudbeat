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



     var text = "";
     var oxygen = [
          "web.init();",
          "web.open('https://sign-up-page.netlify.com/');",
          "web.type('id=enterEmail', 'test@gmail.com');",
          "web.type('id=phone', 'number');",
          "web.type('id=username', 'Alon Mosk');",
          "web.type('id=password', 'pa55word');",
          "web.type('id=confirm_password', 'pa55word');",
          "web.click('id=submit');",
          "web.assertText('//div[@id='error']');"
     ];
     


// var x = document.getElementById('x');
// var s = ['John', 'Mark', 'Alex'];
// var i = 0;

// (function loop() {
//     console.log(i);
//     x.innerHTML += s[i] + " ";
//     if (++i < s.length) {
//         setTimeout(loop, 3000);
//     }
// })();








     // Open oxygen demo 

     $(".demo").click(function() {
          $("#ide-text").val("1 ");
          $(".demo").addClass("isDisabled");
          $(".dark").toggleClass("blur");
          $(".demo-div").toggleClass("open");
          
          
          
          for (const i = 0; i < oxygen[1].length; i++) {
               setTimeout(() => {
                    document.getElementById("ide-text").value += oxygen[1][i];
               }, 2000);
          }

     });
     

     $(".nav-close").click(function() {
          $(".demo").removeClass("isDisabled");
          $(".demo-div").removeClass("open");
          $(".dark").removeClass("blur");
          $("#ide-text").val("1 ");
     });

     $(".nav-close-demo").click(function() {
          $(".demo").removeClass("isDisabled");
          $(".demo-div").removeClass("open");
          $(".dark").removeClass("blur");
          $("#ide-text").val("1 ");
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