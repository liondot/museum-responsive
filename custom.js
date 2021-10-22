// trigger
$(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb, .sns').toggleClass('active')
    });
    $('section, .menu a').click(function(){
        $('.gnb, .trigger, .sns').removeClass('active');
    });

    // Smooth Scrolling 
    $('.menu a, .gototop').click(function(e) {
        $.scrollTo(this.hash || 0, 900) 
    })

    // change css with scroll 
     $(window).scroll(function(){
         if($(window).scrollTop() > 50){
             $('header, .gototop, .logo').addClass('active');
         } 
         else {
            $('header, .gototop, .logo').removeClass('active')
         }
     })

   // slick.js : history
  $('.history_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

    //  slick js 
    $('.project_photo').slick({
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'

    })

     
});