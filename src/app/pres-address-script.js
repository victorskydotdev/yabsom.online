const expandBtn = document.querySelector('.expand-btn');
const addressModal = document.querySelector('.pres-address-modal');

export const expandPresAddress = () => {
	const addTemplate = () => {
		return `
      <div class="container">
				<div class="pres-address">
					<!-- Add your content here -->
				</div>
			</div>
    `;
	};

	if (expandBtn && addressModal) {
		expandBtn.addEventListener('click', () => {
			setTimeout(() => {
				addressModal.style.opacity = 1;
				addressModal.style.visibility = 'visible';
				// addressModal.classList.add('active');

				addressModal.innerHTML = addTemplate();
			}, 500);
		});
	}
};
