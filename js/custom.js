// ..............Custom JavaScript Code.................
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {

    
    //Search
    var sp = document.querySelector('.search-open');
    var searchbar = document.querySelector('.search-inline');
    var shclose = document.querySelector('.search-close');
    function changeClass() {
        searchbar.classList.add('search-visible');
    }
    function closesearch() {
        searchbar.classList.remove('search-visible');
    }
    sp.addEventListener('click', changeClass);
    shclose.addEventListener('click', closesearch);

    //counter-up
    $('.counter').counterUp({
      delay: 15,
      time: 1000
  });


  $('.testimonial-list').owlCarousel({
         
    items: 3,
    autoplay: false,
    margin:0,
    loop: true,
     dots:false,
     nav:true,
     navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             
         },
         600:{
             items:2,
             
         },
         1000:{
             items:3,
             loop:true,
         }
     }
    
})

     
          



  });

}(jQuery));