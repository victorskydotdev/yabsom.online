const elements = document.querySelectorAll('.element');

let elementIndex = 0;

// Correct callback function (takes entries and observer)
const cbFunction = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const element = entry.target;
			console.log('Visible:', element);
			// Optional: unobserve after first intersection
			// observer.unobserve(entry.target);

			setTimeout(() => {
				element.classList.add('show-element');
			}, elementIndex * 100); // staggered by 300ms

			elementIndex++;

			// entry.target.classList.add('show-element');
		}
	});
};

// Proper options object
const options = {
	rootMargin: '0px 0px -10% 0px',
	threshold: 0.2, // optional: when 10% is visible
	root: null,
};

// CORRECT usage of IntersectionObserver
const observer = new IntersectionObserver(cbFunction, options);
// const observer2 = new IntersectionObserver(cbFunction2, options);

// Exported function
export const triggerPageTransitions = (e) => {
	if (elements) {
		elements.forEach((domElement) => {
			observer.observe(domElement);
		});
	}
};
