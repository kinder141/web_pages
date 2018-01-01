    $(document).ready(function(){
      var touch = $('.menu-icon');
      var menu = $('.menu-open-wrap, .menu');

      $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
      });
      $(window).resize(function(){
        var wid = $(window).width();
        if(wid > 760 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });


$(document).ready(function(){

  $(".owl-carousel").owlCarousel({

    singleItem: true

  });

});