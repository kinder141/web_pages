    $(document).ready(function(){
      var touch = $('.menu-icon');
      var menu = $('.menu-open-wrap, .head-nav');

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



