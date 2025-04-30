const header = document.querySelector('.header-nav');
const home = document.querySelector('.home');

const config = {
	attributes: true,
	childList: true,
	subtree: true,
};

export const smoothScrollToPrograms = () => {
	const observer = new MutationObserver((entries) => {
		entries.forEach((entry) => {
			console.log('entry', entry);

			const programLink = entry.target.querySelector('.program-link');

			programLink.addEventListener('click', (e) => {
				e.preventDefault();

				sessionStorage.setItem('programLinkId', 'hello');

				// alert('hello! program button clicked');

				window.location.href = '/';
			});

			if (home) {
				setTimeout(() => {
					window.location.href = '/#programs';

					home.classList.remove('home');
				}, 1000);
			} else return;

			observer.disconnect();
		});
	});

	observer.observe(header, config);
};
