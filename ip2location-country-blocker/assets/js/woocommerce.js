jQuery(document).ready(function ($) {
	$('.chosen').chosen({ width: '95%' });

	function refresh_woocommerce_settings() {
		if ($('#woocommerce_enabled').length == 0) {
			return;
		}

		$('.input-field').prop('disabled', !$('#woocommerce_enabled').is(':checked'));

		$('.chosen').trigger('chosen:updated');
	}

	$('#woocommerce_enabled').on('change', function () {
		refresh_woocommerce_settings();
	});

	refresh_woocommerce_settings();
});
