$(document).ready(function () {
	$('.ajax-feedback').append('<input type="hidden" name="key" value="d65Trko5s">');
});

$('.ajax-feedback').submit(function () {
	var form = $(this),
		output = form.find('.output'),
		data = form.serialize();

	form
		.find('input[type="text"], input[type="tel"], input[type="email"], textarea, button[type="submit"]')
		.attr('disabled', '');
	form
		.closest('.modal')
		.find('input[type="text"], input[type="tel"], input[type="email"], textarea, button[type="submit"]')
		.attr('disabled', '');
	output
		.addClass('hidden')
		.text('Отправка...')
		.removeClass('alert-success alert-danger')
		.addClass('alert-info')
		.removeClass('hidden');

	var btnReset = form.find('button[type="reset"]');

	if (!btnReset.length) btnReset = form.closest('.modal').find('button[type="reset"]');

	btnReset.removeClass('hidden');

	$.ajax({
		type: 'POST',
		url: '/feedback.php',
		data: data,
		success: function (data) {
			if (data.success) {
				output
					.addClass('hidden')
					.removeClass('alert-info alert-danger')
					.addClass('alert-success')
					.text(data.message)
					.removeClass('hidden');
			} else {
				output
					.addClass('hidden')
					.removeClass('alert-info alert-success')
					.addClass('alert-danger')
					.text(data.message)
					.removeClass('hidden');
				form
					.find('[disabled]')
					.removeAttr('disabled');
				form
					.closest('.modal')
					.find('[disabled]')
					.removeAttr('disabled');
			}
		},
		error: function () {
			alert('При запросе возникла ошибка. Пожалуйста, повторите попытку позже.');
		}
	});

	return false;
});

$('button[type="reset"]').click(function () {
	var form = $(this).closest('.ajax-feedback');

	if (!form.length) {
		form = $(this).closest('.modal').find('.ajax-feedback');
	}

	var output = form.find('.output');

	form
		.find('[disabled]')
		.removeAttr('disabled');

	output
		.addClass('hidden')
		.removeClass('alert-info alert-success alert-danger')
		.empty();

	$(this).addClass('hidden');
});
