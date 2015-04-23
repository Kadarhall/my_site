var main = function() {

	$('.arrow-next').click( function() {
		var currentSlide = $('.active-slide');
		var nextSlide = currentSlide.next();

		var currentDot = $('.active-dot');
		var nextDot = currentDot.nextAll('.dot:first');


		if ( nextSlide.length === 0 ) {
			nextSlide = $('.slide').first();
			nextDot = $('.dot').first();
		};

		currentSlide.fadeOut(1000).removeClass('active-slide');
		nextSlide.fadeIn(1000).addClass('active-slide');



		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
	});

	$('.arrow-prev').click(function() {
	    var currentSlide = $('.active-slide');
	    var prevSlide = currentSlide.prev();

	    var currentDot = $('.active-dot');
	    var prevDot = currentDot.prev();

	    if(prevSlide.length === 0) {
	      prevSlide = $('.slide').last();
	      prevDot = $('.dot').last();
	    };
	    
	    currentSlide.fadeOut(600).removeClass('active-slide');
	    prevSlide.fadeIn(600).addClass('active-slide');

	    currentDot.removeClass('active-dot');
	    prevDot.addClass('active-dot');
  	});

  	$('.first').click(function() {
  		$('.slide').removeClass('active-slide');
  		$('.boat').addClass('active-slide');
  	});

  	$('.second').click(function() {
   		$('.slide').removeClass('active-slide');
  		$('.city').addClass('active-slide');
  	});

  	$('.third').click(function() {
  		$('.slide').removeClass('active-slide');
  		$('.bridge').addClass('active-slide');
  	});

  	$('.fourth').click(function() {
  		$('.slide').removeClass('active-slide');
  		$('.train').addClass('active-slide');
  	});

};

$(document).ready(main);