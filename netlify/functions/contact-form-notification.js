const mailgun = require('mailgun-js');

exports.handler = async (event) => {
	const formData = JSON.parse(event.body);

	const { firstName, lastName, email, registrationId } = formData;

	const DOMAIN = process.env.MAILGUN_DOMAIN;

	const mg = mailgun({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: DOMAIN,
	});

	const emailData = {
		from: 'Yabsom.school <postmaster@yabsom.school>',
		to: email,
		subject: 'Registration Successful!',
		text: `Hello ${firstName} ${lastName}, 

		Your registration is successful and is being verified by our team.

		You'll receive another email as soon as verification is compplete.

    Your Registration Id: ${registrationId}, please keep this safe as this would be used to validate your registration in the future.    
		`,
	};

	try {
		await mg.messages().send(emailData);

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'User notified successfully!' }),
		};
	} catch (error) {
		console.error('Mailgun error:', error);
	}
};
