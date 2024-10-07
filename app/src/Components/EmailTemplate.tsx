import PropTypes from 'prop-types';
export default function EmailTemplate({ options, referral }) {
	if (referral) {
		const {
			'referrertype[type]': referrerType,
			referrerName,
			referrerPhoneNumber,
			referrerEmail,
			clientName,
			dob,
			clientPhoneNumber,
			clientEmail,
			address,
			city,
			region,
			county,
			postalcode,
			'insurancetype[type]': insuranceType,
			'waivertype[type]': waiverType,
			pmiNumber,
			'mentalHealth[type]': mentalHealthType,
			substanceAbuse,
			safety,
			'preferredLanguage[name]': preferredLanguage,
			comments,
		} = options;
		return (
			<div>
				<h3>
					Referral From:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerType}</span>
				</h3>
				<h3>
					Referrer Name:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerName}</span>
				</h3>
				<h3>
					Referrer Phone Number:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerPhoneNumber}</span>
				</h3>
				<h3>
					Referrer Email:{' '}
					<span style={{ fontWeight: 'normal' }}> {referrerEmail}</span>
				</h3>
				<h3>
					Client Name: <span style={{ fontWeight: 'normal' }}> {clientName}</span>
				</h3>
				<h3>
					Client DOB: <span style={{ fontWeight: 'normal' }}> {dob}</span>
				</h3>
				<h3>
					Client Phone Number:{' '}
					<span style={{ fontWeight: 'normal' }}> {clientPhoneNumber}</span>
				</h3>
				<h3>
					Client Email: <span style={{ fontWeight: 'normal' }}> {clientEmail}</span>
				</h3>
				<h3>
					Insurance Type:{' '}
					<span style={{ fontWeight: 'normal' }}> {insuranceType}</span>
				</h3>
				<h3>
					Waiver Type:{' '}
					<span style={{ fontWeight: 'normal' }}> {waiverType}</span>
				</h3>
				<h3>
					PMI Number:{' '}
					<span style={{ fontWeight: 'normal' }}> {pmiNumber}</span>
				</h3>
				<h3>
					Client Address:{' '}
					<span style={{ fontWeight: 'normal' }}> {address}</span>
				</h3>
				<h3>
					Client City: <span style={{ fontWeight: 'normal' }}> {city}</span>
				</h3>
				<h3>
					Client Region: <span style={{ fontWeight: 'normal' }}> {region}</span>
				</h3>
				<h3>
					Client County: <span style={{ fontWeight: 'normal' }}> {county}</span>
				</h3>
				<h3>
					Client Postal Code:{' '}
					<span style={{ fontWeight: 'normal' }}> {postalcode}</span>
				</h3>
				<h3>
					Mental Health Diagnosis:{' '}
					<span style={{ fontWeight: 'normal' }}> {mentalHealthType}</span>
				</h3>
				<h3>
					Substance Abuse History:{' '}
					<span style={{ fontWeight: 'normal' }}> {substanceAbuse}</span>
				</h3>
				<h3>
					Safety Concerns:{' '}
					<span style={{ fontWeight: 'normal' }}> {safety}</span>
				</h3>
				<h3>
					Preferred Language:{' '}
					<span style={{ fontWeight: 'normal' }}> {preferredLanguage}</span>
				</h3>
				<h3>
					Comments: <span style={{ fontWeight: 'normal' }}> {comments}</span>
				</h3>
			</div>
		);
	}

	const {
		'first-name': firstName,
		'last-name': lastName,
		company,
		email,
		country,
		'phone-number': phoneNumber,
		message,
	} = options;
	return (
		<div>
			<h1>General Inquiry</h1>
			<h3>
				First Name: <span style={{ fontWeight: 'normal' }}> {firstName}</span>
			</h3>
			<h3>
				Last Name: <span style={{ fontWeight: 'normal' }}> {lastName}</span>
			</h3>
			<h3>
				Company: <span style={{ fontWeight: 'normal' }}> {company}</span>
			</h3>
			<h3>
				E-mail: <span style={{ fontWeight: 'normal' }}> {email}</span>
			</h3>
			<h3>
				Country: <span style={{ fontWeight: 'normal' }}> {country}</span>
			</h3>
			<h3>
				Phone Number:{' '}
				<span style={{ fontWeight: 'normal' }}> {phoneNumber}</span>
			</h3>
			<h3>
				Message: <span style={{ fontWeight: 'normal' }}> {message}</span>
			</h3>
		</div>
	);
}
EmailTemplate.propTypes = {
	options: PropTypes.shape({
		// referral
		'referrertype[type]': PropTypes.string,
		referrername: PropTypes.string,
		referrernumber: PropTypes.string,
		referrerEmail: PropTypes.string,
		fullname: PropTypes.string,
		dob: PropTypes.string,
		number: PropTypes.string,
		email: PropTypes.string,
		'insurancetype[type]': PropTypes.string,
		'waivertype[type]': PropTypes.string,
		address: PropTypes.string,
		city: PropTypes.string,
		region: PropTypes.string,
		county: PropTypes.string,
		postalcode: PropTypes.string,
		comments: PropTypes.string,
		// contact
		'first-name': PropTypes.string,
		'last-name': PropTypes.string,
		company: PropTypes.string,
		country: PropTypes.string,
		'phone-number': PropTypes.string,
		message: PropTypes.string,
	}),
	referral: PropTypes.bool,
};
