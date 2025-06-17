const contactForm = document.getElementById('contact-form');

export const submitContactForm = (event) => {
	if (!contactForm) {
		console.error('Contact form not found');
		return;
	} else {
		contactForm.addEventListener('submit', async (event) => {
			event.preventDefault();

			alert('form subit button clicked!');

			const formData = new FormData(contactForm);

			// const data = Object.fromEntries(formData.entries()); // shorthand for fetching the formData entries

			const jsonData = {};

			for (const [key, value] of formData.entries()) {
				jsonData[key] = value;
			}

			const response = await fetch(
				'.netlify/functions/contact-form-notification',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(jsonData),
				}
			);

			try {
				if (!response) {
					console.log(response.message);
				} else {
					console.log('contact form submitted successfully!');
					alert(
						"Your message has been sent successfully! You'll be redirected to the home page in a few seconds."
					);

					location.href = '/';
				}
			} catch (error) {
				console.error('Error:', error);
			}
		});
	}

	// fetch('/.netlify/functions/contact-form-notification', {
	//   method: 'POST',
	//   headers: {
	//     'Content-Type': 'application/json',
	//   },
	//   body: JSON.stringify(data),
	// })
	//   .then((response) => response.json())
	//   .then((data) => {
	//     console.log('Success:', data);
	//     alert('Your message has been sent successfully!');
	//     contactForm.reset();
	//   })
	//   .catch((error) => {
	//     console.error('Error:', error);
	//     alert('There was an error sending your message. Please try again later.');
	//   });
};
