import { facultyMembers } from './faculty-object';
const facultyMemberContainer = document.querySelector('.faculty-main');
const loadspinModal = document.querySelector('.loadspin-modal');

export const fetchFacultyMembers = () => {
	// console.log('facultyMembers', facultyMembers);

	// initialize the see bio buttons
	const seeBioButtons = document.querySelectorAll('.member-btn');

	if (!seeBioButtons) return;
	seeBioButtons.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (loadspinModal) {
				loadspinModal.classList.add('show-loading');
			}

			setTimeout(() => {
				const btnId = btn.getAttribute('member-btn-id');

				const memberData = facultyMembers.find(
					(member) => member.id === Number(btnId)
				);

				if (memberData) {
					console.log('Member Data:', memberData);

					sessionStorage.setItem('memberData', JSON.stringify(memberData));

					window.location.href = './faculty-bio.html';
				} else {
					console.error('No faculty member found with the given ID:', btnId);
				}
			}, 3500);
		});
	});
};

// load the faculty members
const template = (callback) => {
	return `
		<div class="layer-blur"></div>
			<div class="ellipse"></div>
			<div class="container">
				<div class="text-wrap">
					<div class="eyebrow">
						<span class="eyebrow-text">#about</span>
					</div>

					<h1 class="heading">
						${callback.memberName}
					</h1>

					<p class="sub-text">
						${callback.bio.paragraph1 ? callback.bio.paragraph1 : ''}
					</p>

					<p class="sub-text">
						${callback.bio.paragraph2 ? callback.bio.paragraph2 : ''}
					</p>

					<p class="sub-text">
						${callback.bio.paragraph3 ? callback.bio.paragraph3 : ''}
					</p>
					
					<p class="sub-text">
						${callback.bio.paragraph4 ? callback.bio.paragraph4 : ''}
					</p>
					
					<p class="sub-text">
						${callback.bio.paragraph5 ? callback.bio.paragraph5 : ''}
					</p>

					<p class="sub-text">
					
						${callback.bio.paragraph6 ? callback.bio.paragraph6 : ''}	
					</p>

					<div class="btn-wrap">
						<a href="/admission.html" class="btn reg-btn">Enrol Now</a>
					</div>
				</div>

				<div class="img-wrap">
					<img class="img" src="${callback.image}" alt="" />
				</div>

				
			</div>
	`;
};

const loadFacultyMember = () => {
	const data = sessionStorage.getItem('memberData');
	if (!data && facultyMemberContainer) {
		// alert('No faculty member data loaded. Please go back to home');
		window.location.href = './index.html';
		return;
	} else {
		if (!facultyMemberContainer) {
			// alert('Faculty member container not found.');
			return;
		} else {
			const facultyMemberData = JSON.parse(data);

			// console.log(facultyMemberData);

			facultyMemberContainer.innerHTML = template(facultyMemberData);
		}
	}
};

loadFacultyMember();
