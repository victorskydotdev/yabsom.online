export const slideImages = () => {
	// Wait for DOM to be fully loaded
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initSlider);
	} else {
		initSlider();
	}
};

function initSlider() {
	const slider = document.querySelector('.carousel-slider');
	const images = document.querySelectorAll('.carousel-slider img');

	if (slider) {
		// Set initial slider width based on number of images
		slider.style.width = `${images.length * 100}%`;

		let currentIndex = 0;
		const slideInterval = 3000; // 3 seconds between slides
		let intervalId;

		function slideNext() {
			currentIndex = (currentIndex + 1) % images.length;
			// Correct translation calculation
			slider.style.transform = `translateX(-${
				currentIndex * (100 / images.length)
			}%)`;
		}

		function startSlider() {
			intervalId = setInterval(slideNext, slideInterval);
		}

		// Start auto-sliding
		startSlider();
	}

	// // Pause on hover
	// slider.parentElement.addEventListener('mouseenter', () => {
	// 	clearInterval(intervalId);
	// });

	// slider.parentElement.addEventListener('mouseleave', () => {
	// 	// Only restart if not already running
	// 	if (!intervalId) {
	// 		startSlider();
	// 	}
	// });
}
