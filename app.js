const form = document.querySelector('form');
		const username = document.querySelector('#username');
		const password = document.querySelector('#password');

		form.addEventListener('submit', (event) => {
			event.preventDefault();

			// Perform login validation here
			if (username.value === 'username' && password.value === 'password') {
				alert('Login successful!');
				window.location.href = "homepage.html";
			}
			 else {
				alert('Invalid username or password');
			}

        });


