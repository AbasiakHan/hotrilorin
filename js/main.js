$(document).ready(function() {
	//Google map
	$('.popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	$('h1').click(function(){
		$(this).css('background-color', '#ff0000')
	});
	
	// Sticky 
	$('.js--setman-container').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky')
		}else{
			$('nav').removeClass('sticky');
		}
	});
	
	$('.tooltip').tooltipster();
});