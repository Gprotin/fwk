//@prepros-prepend prestashop.js
//@prepros-prepend bootstrap-datepicker.fr.js
//@prepros-prepend bootstrap-datepicker.js
//@prepros-prepend add2home.js
//@prepros-prepend functions.js

;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
  Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
    $doc.fitVids();
    $('.closable').close();
    $('label').labelFocus();
  });
  
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
})(jQuery, this);

$(document).ready(function(){
  	$('.flexslider').flexslider({ 
		animation: 			"slide", //or fade
		useCSS: 			false,
		slideshowSpeed:		7000,
		animationSpeed:		600,
		controlNav: 		false,
		directionNav: 		true,
		pauseOnHover:		true,
		smoothHeight:		true
	});

	$('.pickDate').datepicker({
		todayHighlight: true,
		language: 'fr',
		todayBtn: "linked"
	});

	$('.liste-produits li').hoverIntent(function(){
		$(this).find('.link-hover').fadeIn();
	}, function(){
		$(this).find('.link-hover').fadeOut();
	});
});