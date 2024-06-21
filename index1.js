// $(document).ready(function () {
    
//     AOS.init();
    
//     $('#slide-toggle').click(function(){
//         $('.overlay').fadeToggle(50);
        
//         $('#menu-slider').toggleClass('hide');
//         $('#main-warapper').toggleClass('left');
        
//         $('body').toggleClass('no-scroll');
//     });  
    
//     $('.overlay').click(function () {
//         $(this).fadeToggle(50);
    
//         $('#menu-slider').toggleClass('hide');
//         $('#main-warapper').toggleClass('left');
        
//         $('body').toggleClass('no-scroll');
//     });
// });

// When the user clicks on the button, scroll to the top of the document
// function progressBarScroll() {
//     let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
//         height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
//         scrolled = (winScroll / height) * 100;
//     document.getElementById("progressBar").style.width = scrolled + "%";
//   }
  
//   window.onscroll = function () {
//     progressBarScroll();
//   };


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
