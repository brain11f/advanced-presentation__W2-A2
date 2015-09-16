
$(function() {
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

});