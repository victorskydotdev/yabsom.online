import brandLogo from '../assets/brand-logo.png';
import asideImg from '../assets/hero-about-img3.jpg';

// initializing from the course page's certified-wrap section
const bodyElement = document.querySelector('.body');
const regBtn = document.querySelector('.enrol-btn');
const regForm = document.querySelector('.reg-form-modal');
const loadspinModal = document.querySelector('.loadspin-modal');

const formTemplate = (cb) => {
	return `
			<div class="content">
				<div class="brand-wrap">
					<img src="${brandLogo}" alt="brand logo" />
				</div>

				<h3 class="form-heading">You are registering for ${cb}</h3>

				<p class="subtext">Please fill out this form to begin your journey toward becoming a Certified African Manufacturing Entrepreneur</p>

				<form class="form" name="registration">
					<!--personal info wrap -->
					<div class="personal-info-wrap">
						<h4 class="title">Personal info</h4>

						<div class="wrap first-data-wrap">
							<div class="sub-wrap">
								<label for="firstName">First name*</label>
								<input type="text" name="firstName" id="firstName" required />
							</div>

							<div class="sub-wrap">
								<label for="lastName">Last name*</label>
								<input type="text" name="lastName" id="lastName" required />
							</div>
						</div>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="email">Email address*</label>
								<input type="email" name="email" id="email" required />
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="dob">Date of Birth*</label>
								<input type="date" name="dob" id="dob" required />
							</div>
						</div>

						<div class="wrap data-wrap gender-wrap">
							<div class="sub-wrap">
								<label for="gender">Gender*</label>
								
								<label for="male">Male: 
									<input type="radio" name="gender" id="male" value="male" required />
								</label>

								<label for="female">Female: 
									<input type="radio" name="gender" value="female" id="female" required />
								</label>
								
								<label for="other">Other: 
									<input type="radio" name="gender" id="other" value="other" required />
								</label>
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="phone">Phone (WhatsApp preferred)*</label>
								<input type="text" name="phone" id="phone" required />
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="nationaligy">Nationality</label>
								<input type="text" name="nationality" id="nationality" required />
							</div>
						</div>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="cor">Country of residence</label>
								<input type="text" name="cor" id="cor" required />
							</div>
						</div>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="state">State/Province</label>
								<input type="text" name="state" id="state" required />
							</div>
						</div>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="cityTown">City/Town</label>
								<input type="text" name="cityTown" id="cityTown" required />
							</div>
						</div>
					</div>
					<!-- end of personal info wrap -->

					<!-- professional info wrap -->
					<div class="prof-info-wrap">
						<h4 class="title">Professional and academic background</h4>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="qualification">Highest qualification*</label>

								<select id="qualification" name="highestQualification">
									<option value="Nothing selected">--Please choose an option--</option>
									<option value="secondary school cert">Secondary / High School</option>
									<option value="Undergraduate">Undergraduate</option>
									<option value="Postgraduate">Masters/PHD</option>
									<option value="Vocational / Technical">Vocational / Technical</option>
								</select>
							</div>
						</div>

						<div class="wrap data-wrap business-wrap">
							<div class="sub-wrap">
								<label for="business-status">Currently run a business?*</label>
								
								<label for="businessStatusYes">Yes: 
									<input type="radio" name="business-status" id="businessStatusYes" value="Yes, I run a business" required />
								</label>

								<label for="BusinessStatusNo">No: 
									<input type="radio" name="business-status" value="No, I don't run a business" id="BusinessStatusNo" required />
								</label>
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="nature-of-business">If yes, what is the name and nature of your business*</label>
								<textarea type="text" name="natureOfBusiness" id="nature-of-business"></textarea>
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="experience">Years of Experience in Manufacturing and Entreprenuership*</label>
								<input type="number" name="yearsOfExperience" id="experience" required />
							</div>
						</div>
					</div>
					<!-- end of professional info wrap -->

					<!-- program info wrap -->
					<div class="program-info-wrap">
						<h4 class="title">program info</h4>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="select-program">Which Yabsom program are you registering for?*</label>
								
								<select id="select-program" name="selectedProgram">
									<option value="Nothing selected">--Please choose an option--</option>
									<option value="Manufacturing Leadership Certificate">Manufacturing Leadership Certificate</option>

									<option value="Certificate in Lean Manufacturing">Certificate in Lean Manufacturing</option>

									<option value="Advanced Manufacturing Leadership Program">Advanced Manufacturing Leadership Program</option>

									<option value="Entrepreneurship in Manufacturing">Entrepreneurship in Manufacturing</option>
								</select>
							</div>
						</div>

						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="learning-mode">Preferred learning mode*</label>
								
								<select id="select-program" name="learning-mode">
									<option value="Nothing selected">--Please choose an option--</option>

									<option value="Online">Online</option>

									<option value="Hybrid (Online & In-person)">Hybrid (Online & In-person)</option>
								</select>
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="medium-of-discovery">How did you learn about us?</label>
								
								<select id="select-program" name="medium-of-discovery">
									<option value="Nothing selected">--Please choose an option--</option>

									<option value="social media">Social media</option>
									<option value="referral">Referral</option>
									<option value="event/seminar">Event/Seminar</option>
									<option value="social media">Social media</option>
								</select>
							</div>
						</div>
						
						<div class="wrap data-wrap">
							<div class="sub-wrap">
								<label for="expectations">What are you expectations?*</label>

								<textarea type="message" name="expectations" id="expectations" required></textarea>
							</div>
						</div>
					</div>
					<!-- end of program info wrap -->
				
					
					<!-- acknowledgement wrap -->
					<div class="acknowledgement-wrap">
						<div class="wrap">
							<p class="text">
								By filling this form, you acknowledge that you have read our
								<a href="/terms.html" target="_blank">terms and conditions</a>.
							</p>

							<div class="sub-wrap">
								<div class="content-wrap1">
									<input type="checkbox" name="consent" id="consent1" required />
									
									<label for="consent1"
										>I have read, understood, and accept the Yabsom.school terms and
										conditions</label
									>
								</div>
								<div class="content-wrap2">
									<input type="checkbox" name="consent" id="consent2" required />

									<label for="consent2"
										>I have read, understood, and accept the Yabsom.school terms and
										conditions</label
									>
								</div>
								<div class="content-wrap3">
									<input type="checkbox" name="consent" id="consent3" required />

									<label for="consent3"
										>I have read, understood, and accept the Yabsom.school terms and
										conditions</label
									>
								</div>
							</div>
						</div>
					</div>
					<!-- end of acknowledgement wrap -->

					

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

				const form = document.querySelector('.form');

				if (form) {
					form.addEventListener('submit', (e) => {
						e.preventDefault();

						const formData = new FormData(e.target);
						const jsonData = {};
						let randomNums = [];

						for (let i = 0; i < 10; i++) {
							const randomInt = Math.floor(Math.random() * 10) + 1; // 1 to 100
							randomNums.push(randomInt);
						}

						const generatedRegNum = `YBSM-${randomNums.join('')}`;

						// append the generated regNum and program Title
						formData.append('registrationId', generatedRegNum);
						formData.append('program', courseName);
						formData.append('yabsomEmail', 'yabsom.school@gmail.com');

						console.log(formData);

						// extract the relevant info/data for the success page
						const name = `${formData.get('firstName')} ${formData.get(
							'lastName'
						)}`;
						const course = formData.get('program');
						const regId = formData.get('registrationId');

						console.log(name, course, regId);

						const dataObject = {
							name,
							course,
							regId,
						};

						sessionStorage.setItem('userData', JSON.stringify(dataObject));

						for (const [key, value] of formData.entries()) {
							jsonData[key] = value;
						}

						const fetchData = async () => {
							try {
								const endPoint = '/.netlify/functions/email-notification';
								const response = await fetch(endPoint, {
									method: 'POST',
									headers: {
										'Content-type': 'application/json',
									},

									body: JSON.stringify(jsonData),
								});

								if (!response.ok) {
									console.log('Response not ok is:', response);
								} else {
									console.log(response);

									// form success logic goes here
									if (loadspinModal) {
										loadspinModal.classList.add('show-loading');

										setTimeout(() => {
											window.location.href = '/success.html';
										}, 3500);
									}
								}
							} catch (error) {
								console.error('Error:', error);
							}
						};

						fetchData();
					});
				}
			}
		});
	}
};
