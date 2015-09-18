
$(function() {

/*menu nav*/
	$('#home').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.welcome'
		});
		return false;
	});

	$('#services').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.services'
		});
		return false;
	});

	$('#portfolio').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.portfolio-carousel'
		});
		return false;
	});

	$('#about').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.about-skills'
		});
		return false;
	});

	$('#team').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.team-clients'
		});
		return false;
	});

	$('#contact').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.contact'
		});
		return false;
	});

	//contact us 
	$(".contact-us-button").mouseenter(function() {
		$(this).css("color", "#973d1e");
		$(".contact-us-button").mouseleave(function() {
			$(this).css("color", "white");
		});
	});
	$(".contact-form-submit-button").mouseenter(function() {
		$(this).css("color", "#973d1e");
		$(".contact-form-submit-button").mouseleave(function() {
			$(this).css("color", "#fd6632");
		});
	});
	$(".contact-form-submit-button").click(function () {
		alert("Thanks for your submission!");
		$( '.contact-form' ).each(function(){
    	this.reset();
		});
	});
	var current = 0;
	$(".circle-buttons").click(function() { 
		if (current === 0) {
			$(".client-reviews").hide();
    		$(".new-review").show();
    		current = 1;
		}
		else {
			$(".new-review").hide(); 
			$(".client-reviews").show();
			current = 0;	
		}
	});
});