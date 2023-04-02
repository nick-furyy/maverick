// Smooth scroll to anchor links
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800
  });

  // Toggle mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  menuBtn.addEventListener('click', () =>
   {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
   });

   $(document).ready(function() {
		$('.read-more').click(function() {
			$(this).siblings('.more-info').slideToggle();
		});

		$('.menu-btn').click(function() {

    });
  });
<app1 src="https://code.jquery.com/jquery-3.6.0.min.js"></app1>
  const scroll = new SmoothScroll('a[href*="#"]');
	const menuBtn = document.querySelector('.menu-btn');
	const mobileMenu = document.querySelector('.mobile-menu');

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('open');
		mobileMenu.classList.toggle('open');
	});

