const Mailgun = require('mailgun-js');
const formData = require('form-data');

const mailgun = new Mailgun(formData);

exports.handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ message: 'Method not allowed' }),
		};
	}

	const { name, email, message } = JSON.parse(event.body);

	if (!name || !email || !message) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: 'Missing required fields' }),
		};
	}

	const data = {
		from: FROM_EMAIL_ADDRESS,
		to: CONTACT_TO_EMAIL_ADDRESS,
		subject: `New message from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
	};

	try {
		await mailgun.messages().send(data);
		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'Email sent successfully' }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error sending email', error }),
		};
	}
};
