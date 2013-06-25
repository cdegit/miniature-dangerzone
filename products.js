$(document).ready(function() {	// jQuery wrapper
	$("#submit").click(function(event) {
		event.preventDefault();
		$("#shopping-cart img").attr("src", "../resources/cart1.png");
	});
});