import $ from 'jquery';

$(document).ready(function() {
  var AppPlugins = {
    /* Accordion Script */

    Accordion: function() {
      var toggle = $('.toggle'),
        dropdown = $('.dropdown');

      toggle.on('click', function() {
        $(this).toggleClass('open');
        $(this)
          .siblings()
          .slideToggle();
        $(this)
          .children('.dropIcon')
          .toggleClass('fa-rotate-180');
      });
    }
  };

  /* ------ Plugins Init ------ */

  AppPlugins.Accordion();
});
