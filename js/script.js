$(document).ready(function () {

  if ($('#owl-carousel').length) {

    var owlCarousel = $("#owl-carousel");
    
      owlCarousel.owlCarousel({
        // center: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 10000,
        // autoplaySpeed: true,
        smartSpeed: 4000,
        loop: true,
        dots: true,
        dotsEach: true,
        callbacks: true,
        responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:4
          }
      }
      });
    

  }

  
});

$(window).scroll(function() {
    var $block = $('#navblock');
  
    if($(window).scrollTop() > 44) {
      $block.addClass('nav-top__fixed');
      $('.header__carousel').addClass('carousel__padding');
    } else {
      $block.removeClass('nav-top__fixed');
      $('.header__carousel').removeClass('carousel__padding');
    }
  });