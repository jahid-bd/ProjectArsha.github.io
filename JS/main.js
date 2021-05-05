// Scroll Top Header background None
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.background = "rgba(40, 58, 90, 0.9)";
  } else {
    document.getElementById("header").style.background = "none";
  }
}

// Portfolio Filter
$(document).ready (function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.portfolio-iteam').show('1000');
        }
        else{
            $('.portfolio-iteam').not('.'+value).hide('1000');
            $('.portfolio-iteam').filter('.'+value).show('1000');
        }
    })

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})

// back to top btn
var btn = $('.back-to-top');
$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btn.removeClass('show');
        
    }
    else{
        btn.addClass('show');
    }
});
btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

   // Preloader
   $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })

  $(".youtube-link").grtyoutube({
     autoPlay:false 
    });

    
