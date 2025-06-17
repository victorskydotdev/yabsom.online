const mailgun = require('mailgun-js');

exports.handler = async (event) => {
	const formData = JSON.parse(event.body);

	const { firstName, lastName, phone, email, message } = formData;

	console.log('Form Data:', formData);

	const DOMAIN = process.env.MAILGUN_DOMAIN;

	const mg = mailgun({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: DOMAIN,
	});

	const emailData = {
		from: 'Yabsom.school <postmaster@yabsom.school>',
		to: [`Yabsom School <hello@yabsom.school>`],
		subject: 'New Contact Form Submission!',
		text: `Hello Admin!
		
		You have received a new contact form submission from ${firstName} ${lastName}.
		Here are the details:
		First Name: ${firstName}
		Last Name: ${lastName}
		Phone: ${phone}
		Email: ${email}
		Message: ${message}  
		`,
	};

	try {
		await mg.messages().send(emailData);

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Email submitted successfully!' }),
		};
	} catch (error) {
		console.error('Mailgun error:', error);
	}
};
