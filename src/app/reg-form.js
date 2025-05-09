import brandLogo from '../assets/brand-logo.png';
import asideImg from '../assets/hero-about-img3.jpg';

// initializing from the course page's certified-wrap section
const bodyElement = document.querySelector('.body');
const regBtn = document.querySelector('.enrol-btn');
const regForm = document.querySelector('.reg-form-modal');

const formTemplate = (cb) => {
	return `
			<div class="content">
				<div class="brand-wrap">
					<img src="${brandLogo}" alt="brand logo" />
				</div>

				<h3 class="form-heading">You are registering for ${cb}</h3>
				<p class="subtext">Fill the form below to take course</p>

				<form class="form" name="registration">
					<div class="wrap">
						<div class="sub-wrap">
							<label for="firstName">First name*</label>
							<input type="text" name="firstName" id="firstName" />
						</div>

						<div class="sub-wrap">
							<label for="lastName">Last name*</label>
							<input type="text" name="lastName" id="lastName" />
						</div>
					</div>

					<div class="wrap">
						<div class="sub-wrap">
							<label for="email">Email address*</label>
							<input type="email" name="email" id="email" />
						</div>
					</div>

					<div class="wrap">
						<p class="text">
							By filling this form, you acknowledge that you have read our
							<a href="/terms.html">terms and conditions</a>.
						</p>

						<div class="sub-wrap">
							<input type="checkbox" name="consent" id="consent" />
							<label for="consent"
								>I have read, understood, and accept the Yabsom.school terms and
								conditions</label
							>
						</div>
					</div>

					<div class="btn-wrap">
						<button class="submit-btn">Register now</button>
					</div>
				</form>
			</div>

			<div class="img-wrap">
				<img src="${asideImg}" />
			</div>
  `;
};

export const handleFormSubmission = () => {
	if (!regBtn) {
		return;
	} else {
		regBtn.addEventListener('click', (e) => {
			e.preventDefault();

			// alert('Register button clicked!');
			const storageData = JSON.parse(sessionStorage.getItem('courseData'));

			if (!storageData) {
				alert('Select a course');
			} else {
				const courseName = storageData.courseTitle;

				regForm.classList.add('show-reg-form');
				regForm.innerHTML = formTemplate(courseName);
			}
		});
	}
};
