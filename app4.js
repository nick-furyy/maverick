$(document).ready(function() {
	// Smooth scroll to anchor links
	$('nav a[href^="#"]').click(function() {
		var target = $(this.hash);
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	});

	// Form submission
	$('form').submit(function(event) {
		event.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var message = $('#message').val();

		// Send form data to server using AJAX
		$.ajax({
			url: 'submit.php',
			type: 'post',
			data: {
				name: name,
				email: email,
				phone: phone,
				message: message
			},
			success: function(response) {
				alert('Thank you for your message!');
				$('form')[0].reset();
			},
			error: function(xhr, status, error) {
				alert('Oops! Something went wrong. Please try again later.');
			}
		});
	});
});
