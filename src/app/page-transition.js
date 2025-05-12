const fadeOutBottom = document.querySelectorAll('.fade-out-down'); // every DOM element with this class would fade-in and aniimate from below
const fadeOutLeft = document.querySelectorAll('.fade-out-left');
const fadeOutRight = document.querySelectorAll('.fade-out-right');
const fadeOutTop = document.querySelectorAll('.fade-out-top');
const scaleDown = document.querySelectorAll('.scale-down');

let elementIndex = 0;

// Proper options object
const options = {
	rootMargin: '0px 0px -100px 0px',
	threshold: 0.2, // optional: when 10% is visible
	root: null,
};

// Correct callback function (takes entries and observer)

// fadeInFromTop function
const fadeInFromTop = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;

			console.log(element, 'is visible');
		}
	});
};

// fadeInFromRight function
const fadeInFromRight = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;

			console.log(element, 'is visible');

			setTimeout(() => {
				element.classList.add('fadein-from-right');
			}, 200);

			// elementIndex++;
		}
	});
};

// fadeInFromButtom function
const fadeInFromBottom = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;
			console.log('Visible:', element);
			// Optional: unobserve after first intersection
			// observer.unobserve(entry.target);

			setTimeout(() => {
				element.classList.add('fadein-from-bottom');
			}, elementIndex * 100); // staggered by 300ms

			elementIndex++;

			// entry.target.classList.add('show-element');
		}
	});
};

// fadeInFromLeft function
const fadeInFromLeft = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;

			console.log(element, 'is visible');

			setTimeout(() => {
				element.classList.add('fadein-from-left');
			}, 300); // staggered by 300ms

			elementIndex++;
		}
	});
};

// scaleUp function
const scaleUp = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;

			console.log(element, 'is visible');

			setTimeout(() => {
				element.classList.add('scale-up');
			}, 300);
		}
	});
};

// IntersectionObserver
const observer1 = new IntersectionObserver(fadeInFromTop, options);
const observer2 = new IntersectionObserver(fadeInFromRight, options);
const observer3 = new IntersectionObserver(fadeInFromBottom, options);
const observer4 = new IntersectionObserver(fadeInFromLeft, options);
const observer5 = new IntersectionObserver(scaleUp, options);

// Exported function
export const triggerPageTransitions = (e) => {
	// if (fadeOutTop) {
	// 	fadeInFromTop.forEach((entry) => {
	// 		observer1.observe(entry);
	// 	});
	// }

	if (fadeOutRight) {
		fadeOutRight.forEach((entry) => {
			observer2.observe(entry);
		});
	}

	if (fadeOutBottom) {
		fadeOutBottom.forEach((entry) => {
			observer3.observe(entry);
		});
	}

	if (fadeOutLeft) {
		fadeOutLeft.forEach((entry) => {
			observer4.observe(entry);
		});
	}
	if (scaleDown) {
		scaleDown.forEach((entry) => {
			observer5.observe(entry);
		});
	}
};
