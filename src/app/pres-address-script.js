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

	if (expandBtn) {
		expandBtn.addEventListener('click', () => {
			alert("President's address button clicked");

			console.log(addressModal);
		});
	}
};
