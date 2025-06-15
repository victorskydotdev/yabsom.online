const mailgun = require('mailgun-js');

exports.handler = async (event) => {
	const formData = JSON.parse(event.body);
	console.log('formData', formData);

	const {
		firstName,
		lastName,
		email,
		registrationId,
		dob,
		gender,
		phone,
		nationality,
		cor,
		state,
		cityTown,
		highestQualification,
		currentlyRunABusiness,
		termsConditionsConsent,
		communicationConsent,
		informationAccuracyConsent,
		yabsomEmail,
	} = formData;

	const DOMAIN = process.env.MAILGUN_DOMAIN;

	const mg = mailgun({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: DOMAIN,
	});

	const notificationData = {
		from: 'Yabsom <postmaster@yabsom.school>',
		to: [`Yabsom School <${yabsomEmail}>`],
		replyTo: 'admissions@yabsom.school',
		subject: 'New Student Reg Notification',
		text: `Hello Admin, 

		Below is the registration details of ${firstName} ${lastName}.

    Registration Id: ${registrationId},

    Email: ${email},
    Phone: ${phone},
    Date of Birth: ${dob},
    Gender: ${gender},
    Nationality: ${nationality},
    Country of Residence: ${cor},
    State: ${state},
    City/Town: ${cityTown},
    Highest Qualification: ${highestQualification},
    Currently Running a Business: ${currentlyRunABusiness},
    Terms and Conditions Consent: ${termsConditionsConsent},
		Communication Consent: ${communicationConsent},
		Information Accuracy Consent: ${informationAccuracyConsent},
		`,
	};

	const autoresponseData = {
		from: 'Yabsom.school <hello@yabsom.school>',
		to: [`Registration Confirmation <${email}>`],
		subject: 'Registration Successful!',
		text: `Hello ${firstName} ${lastName}, 

		Your registration is successful and is being verified by our team.

		You'll receive another email as soon as verification is complete.

    Your Registration Id: ${registrationId}, please keep this safe as this would be used to validate your registration in the future.    
		`,
	};

	try {
		await mg.messages().send(notificationData);
		await mg.messages().send(autoresponseData);

		return {
			statusCode: 200,
			body: JSON.stringify({ message: 'YABSOM Admin notified successfully!' }),
		};
	} catch (error) {
		console.error('Mailgun error:', error);

		return {
			statusCode: 500,
			body: JSON.stringify({ message: 'Error sending email', error }),
		};
	}
};
