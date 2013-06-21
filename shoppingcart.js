$(document).ready(function() {	// jQuery wrapper

	// Shopping Cart Code
	// sets a default price attribute for each item
	$('.cart-info').each( function(index) {
		var price = $(this).children(".price").html();
		price = price.slice(1);
		price = parseFloat(price);
		$(this).attr("price", price);
	});

	// clicking on the quantity number inputs change the price attibute for an item and call updateTotal
	$('.quantity').each( function(index) {
		$(this).click( function() {
			var checkout_obj = $(this).parents(".cart-info");
			var price = checkout_obj.children(".price").html();
			price = price.slice(1);
			price = parseFloat(price);
			var quantity = $(this).prop("value");
			
			var totalPrice;
			
			if (quantity >= 1) {
				totalPrice = price * quantity;
			}
			
			checkout_obj.attr("price", totalPrice);
			updateTotal();
		});
	});
	
	// updates the total price
	function updateTotal() {
		var newTotal = 0;
		$('.cart-info').each( function(index) {
			newTotal += parseFloat($(this).attr("price"));
		});
		
		newTotal = newTotal.toFixed(2);
		$("#total").html("Item total: $" + newTotal);
	}
	
});