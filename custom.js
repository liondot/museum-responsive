// trigger
$(function(){
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    });
    $('section, .menu a').click(function(){
        $('.gnb').removeClass('active');
        $('.trigger').removeClass('active');
    });

    // Smooth Scrolling 
    $('.menu a, .gototop').click(function(e) {
        $.scrollTo(this.hash || 0, 900) 
    })

    // change css with scroll 
     $(window).scroll(function(){
         if($(window).scrollTop() > 50){
             $('header, .gototop').addClass('active')
         } 
         else {
            $('header, .gototop').removeClass('active')
         }
     })

    //  slick js 
    $('.history_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    })

     
});