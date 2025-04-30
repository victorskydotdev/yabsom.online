const expandBtn = document.querySelector('.expand-btn');
const addressModal = document.querySelector('.pres-address-modal');
const bodyElement = document.querySelector('.body');

export const expandPresAddress = () => {
	const addTemplate = () => {
		return `
      <div class="container">
				<div class="pres-address">
					<p class="text">
						Welcome to the Young African Business School of Manufacturing (YABSOM)—Africa’s leading institution dedicated to industrial transformation through knowledge, innovation, and enterprise.
					</p>

					<p class="text">
						Africa holds immense manufacturing potential, with a projected $1 trillion industrial sector by 2030 and a rapidly growing population set to reach 2.5 billion by 2050. However, despite abundant resources and talent, the continent still imports over $500 billion worth of goods annually—a gap we must bridge through local production and value addition.
					</p>

					<p class="text">
						At YABSOM, we are committed to equipping 100,000 African manufacturers over the next decade with the skills, strategies, and networks to drive industrialization. Through practical training, global partnerships, and hands-on mentorship, we empower entrepreneurs to build factories, scale production, and compete in global markets.
					</p>

					<p class="text">
						Our goal is clear: to increase Africa’s manufacturing GDP contribution from the current 11% to over 20%, create millions of jobs, and position the continent as a global industrial powerhouse.
					</p>

					<p class="text">
						If you are ready to be part of Africa’s industrial revolution, YABSOM is your gateway. Together, let’s build the factories, brands, and industries that will define Africa’s future.
					</p>

					<p class="text">
						<strong>Dr. Jephter Akaehie</strong> <br>
						President, Young African Business School of Manufacturing (YABSOM)
					</p>

					<div class="btn-container">
						<button class="btn-close" id="btn-close">Close</button>
					</div>
				</div>
			</div>
    `;
	};

	if (expandBtn && addressModal) {
		expandBtn.addEventListener('click', () => {
			setTimeout(() => {
				addressModal.style.opacity = 1;
				addressModal.style.visibility = 'visible';
				bodyElement.style.overflow = 'hidden';

				addressModal.innerHTML = addTemplate();

				const modalCloseBtn = document.querySelector('.btn-close');

				console.log(modalCloseBtn);

				modalCloseBtn.addEventListener('click', () => {
					addressModal.style.opacity = 0;
					addressModal.style.visibility = 'hidden';
					bodyElement.style.overflow = 'visible';
					addressModal.innerHTML = '';
				});
			}, 500);
		});
	}
};
