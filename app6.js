// Add smooth scrolling to page links
const links = document.querySelectorAll('nav a');

for (const link of links) {
	link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: 'smooth'
	});
}

// Add form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
	e.preventDefault();

	
}
