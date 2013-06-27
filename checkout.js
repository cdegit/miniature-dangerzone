$(document).ready(function() {	// jQuery wrapper
	$("#use-billing-address").click(function() {
		if (this.checked) {
			$("#shipping-info input, #shipping-info select").prop("disabled", true);
			$(this).prop("disabled", false);
			
			//copy over values
			$("#s_address").val($("#address").val());
			$("#s_address2").val($("#address2").val());
			$("#s_city").val($("#city").val());
			$("#s_province").val($("#province").val());
			$("#s_postal").val($("#postal").val());
		} else {
			$("#shipping-info input, #shipping-info select").prop("disabled", false);
		}
	});
});