const btns = document.querySelectorAll('.btn');

export const alertUser = () => {
	if (btns) {
		btns.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();

				alert("Please we'll be operational soon... Come back later!");
			});
		});
	}
};
