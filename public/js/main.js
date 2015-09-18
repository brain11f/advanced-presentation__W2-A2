
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
	
	var selectTags = function(event) {
		event.preventDefault();

		// Remove .active from all active tag links
		$('[data-show-tag].active').removeClass('active');

		// Add .active to the current tag link, and return contents of its attribute
		var tag = $(event.currentTarget).addClass('active').data('show-tag');

		if(tag == 'all') {
			$('[data-tags]').show();
			return;
		}

		// Hide ALL the tagged content, we'll un-hide next
		$('[data-tags]').hide();

		// Show all tagged content that CONTAINS tag
		$('[data-tags*="' + tag + '"]').show();
	};


	// Our "tag" links
	$('[data-show-tag]').click(selectTags);

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
//clients
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
	//portfolio-slider
	$(".slider-one").click(function() { 
		$("#slider-one").css("z-index", "5");
		$("#slider-two, #slider-three, #slider-four, #slider-five").css("z-index","1");
	});
	$(".slider-two").click(function() { 
		$("#slider-two").css("z-index", "5");
		$("#slider-one, #slider-three, #slider-four, #slider-five").css("z-index","1");
	});
	$(".slider-three").click(function() { 
		$("#slider-three").css("z-index", "5");
		$("#slider-two, #slider-one, #slider-four, #slider-five").css("z-index","1");
	});
	$(".slider-four").click(function() { 
		$("#slider-four").css("z-index", "5");
		$("#slider-two, #slider-three, #slider-one, #slider-five").css("z-index","1");
	});
	$(".slider-five").click(function() { 
		$("#slider-five").css("z-index", "5");
		$("#slider-two, #slider-three, #slider-four, #slider-one").css("z-index","1");
	});
	
});