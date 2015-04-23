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

  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).appendTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled'); 
  });
  
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
  
    if(charactersLeft < 0) {
      $('.btn').addClass('disabled'); 
    }
    else if(charactersLeft == 140) {
      $('.btn').addClass('disabled');
    }
    else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');

  	var red = [0, 100, 63];
	var orange = [40, 100, 60];
	var green = [75, 100, 40];
	var blue = [196, 77, 55];
	var purple = [280, 50, 60];

	var myName = "Kadar";
	var letterColors = [red,orange,green,blue,purple];
	if (myName.length > 4) {
	    bubbleShape = "circle";
	} else {
	    bubbleShape = "square";
	}


	drawName(myName, letterColors);

	bounceName();

	bounceBubbles();

	$('.fa-rocket').mouseover(function() {
		$(this).css('color', 'red').fadeIn(1000);
	});
};

var slider = function() {

	$('.arrow-left').click(function() {
		// $('.row').animate({
		// 	left: '0px'
		// }, 1000);

		// $('.slider').slideToggle('left', 1000);

		$('.slider').animate({
			right: '100%'
		}, 1000);

		$('.icon-close-right').animate({
			right: '50px'
		}, 1000);

		$('.status').animate({
			right: '0'
		}, 1000);
	});

	$('.icon-close-right').click(function() {
		$('.slider').animate({
			right: '0'
		}, 1000);

		$(this).animate({
			right: '-100px'
		}, 1000);

		$('.status').animate({
			right: '-100%'
		}, 1000);
	});


	$('.arrow-right').click(function() {
		// $('.row').animate({
		// 	left: '0px'
		// }, 1000);

		$('.slider').animate({
			left: '100%'
		}, 1000);

		$('.icon-close-left').animate({
			left: '50px'
		}, 1000);

		$('.color').animate({
			left: '0'
		}, 1000);
	});

	$('.icon-close-left').click(function() {
		$('.slider').animate({
			left: '0'
		}, 1000);

		$(this).animate({
			left: '-100px'
		}, 1000);

		$('.color').animate({
			left: '-100%'
		}, 1000);
	});



	// $('.name').click(function() {
	// 	$('.slide').animate({
	// 		height: '0px'
	// 	}, 1000);
	// });

	$('.name').click(function() {
		$('.slide').slideUp(1000);
	});


};

$(document).ready(main);

$(document).ready(slider);