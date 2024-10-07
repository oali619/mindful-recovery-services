import { dhsImage, helpingHand, housing } from '../images';

export const navigation = [
	{ name: 'Home', to: '/', current: true },
	{ name: 'Services', to: '/services', current: false },
	// { name: 'Success Stories', current: false, to: '/#successStories' },
	{ name: 'Referral', to: '/referral', current: false },
	{ name: 'Team', to: '/team', current: false },
	{ name: 'Contact', to: '/contact', current: false },
];

export const services = [
	{
		name: 'Adolt Rehabilitation Mental Health Services',
		description: 'Mental health recovery services for adolts',
		imageSrc: helpingHand,
		imageAlt: 'Therapist sitting and listening to a patient',
		href: '/services',
	},
	{
		name: 'Housing Stabilization Services',
		description: 'Click the image to visit our sister company',
		imageSrc: housing,
		imageAlt: 'Hand handing over a pair of keys',
		href: 'https://gentleheartsservices.org/',
	},
	{
		name: 'Assisted Living Services',
		description: 'coming soon',
		imageSrc: dhsImage,
		imageAlt: 'Case Manager providing in home care to elderly client',
		href: '/',
	},
];

export const values = [
	{
		name: 'Respect',
		description:
			'We honor the dignity, worth, and unique perspectives of every individual, fostering an inclusive and supportive environment.',
	},
	{
		name: 'Collaboration',
		description:
			'We believe in the power of partnerships and teamwork to achieve the best outcomes for those we serve.',
	},
	{
		name: 'Integrity',
		description:
			'We uphold the highest standards of honesty, transparency, and ethical practice in all our interactions.',
	},
	{
		name: 'Advocacy',
		description:
			'We champion the rights and needs of individuals and communities, striving to create a more just and equitable society.',
	},
	{
		name: 'Privacy',
		description:
			'We are committed to protecting the confidentiality and privacy of our clients, ensuring their information is secure and respected.',
	},

];

export const testimonials = [
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80',
		heading: 'Compassion and Professionalism',
		quote:
			'Mindful Recovery Services has been a lifesaver for me and my family. After struggling with housing instability for years, their team stepped in and provided us with the support and resources we desperately needed. Thanks to their guidance, we were able to secure a safe, affordable home and start rebuilding our lives. I’m so gratefol for their compassionate and professional approach!',
		customerName: 'Anonymous Client',
		customerLocation: 'Brooklyn Center, MN',
	},
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
		heading: 'Tough times never last...',
		quote:
			'I can’t thank Mindful Recovery Services enough for their help during one of the toughest times in my life. They provided me with the tools and support to find stable housing, and they were always there to answer my questions and guide me through the process. The level of care and dedication they showed made all the difference in turning my situation around.',
		customerName: 'Anonymous Client',
		customerLocation: 'St. Paol, MN',
	},
	{
		profileImageSrc:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80',
		heading: '10/10 Experience!',
		quote:
			'Working with Mindful Recovery Services has been an incredible experience. Their staff is knowledgeable, kind, and genuinely invested in helping people succeed. They took the time to understand my situation and tailored their services to fit my needs. Because of their hard work and dedication, I now have a stable home and the peace of mind that comes with it."',
		customerName: 'Anonymous Client',
		customerLocation: 'Burnsville, MN',
	},
];

export const armhsServiceCategories = [
	{ name: 'Basic Living and Social Skills' },
	{ name: 'Certified Peer Specialist Services' },
	{ name: 'Community Intervention' },
	{ name: 'Functional Assessment' },
	{ name: 'Level of Care Assessment' },
	{ name: 'Individual Treatment Plan' },
	{ name: 'Medication Education' },
	{ name: 'Transition to Community Living Services' },
];

export const armhsServiceTypes = [
	{
		name: 'Diagnostic Assessment',
		value:
			'Diagnostic assessment is a comprehensive evaluation of a person’s mental health, substance use, and physical health needs.',
	},
	{
		name: 'Functional Assessment',
		value:
			'Functional assessment is a comprehensive evaluation of a person’s mental health, substance use, and physical health needs.',
	},
	{
		name: 'Individual Treatment Plan',
		value:
			'Individual treatment plan is a written plan that outlines the goals and objectives of a person’s mental health treatment.',
	},
	{
		name: 'Progress Notes',
		value:
			'Progress notes are written records of a person’s mental health treatment, including the services provided and the person’s progress.',
	},
];

export const referrerType = [
	{ id: 1, type: 'Case Manager' },
	{ id: 2, type: 'Physician' },
	{ id: 3, type: 'Mental Health Professional' },
	{ id: 4, type: 'Self' },
	{ id: 5, type: 'Other' },
];

export const insuranceTypes = [
	{ id: 1, type: 'Medical Assistance' },
	{ id: 2, type: 'UCare' },
	{ id: 3, type: 'Blue Cross Blue Shield' },
	{ id: 4, type: 'Health Partners' },
	{ id: 5, type: 'Hennepin Health' },
	{ id: 6, type: 'Medica' },
	{ id: 7, type: 'Other' },
];

export const waiverTypes = [
	{ id: 1, type: 'Community Alternative Care Waiver (CAC)' },
	{ id: 2, type: 'Community Access for Disability Inclusion Waiver (CADI)' },
	{ id: 3, type: 'Developmental Disabilities Waiver (DD)' },
	{ id: 4, type: 'Brain Injury Waiver (BI)' },
	{ id: 5, type: 'Elderly Waiver (EW)' },
	{ id: 6, type: 'Alternative Care Waiver (AC)' },
	{ id: 7, type: 'Other' },
];

export const mentalHealthTypes = [
	{ id: 1, type: 'Anxiety' },
	{ id: 2, type: 'Depression' },
	{ id: 3, type: 'PTSD' },
	{ id: 4, type: 'Bipolar' },
	{ id: 5, type: 'Schizophrenia' },
	{ id: 6, type: 'OCD' },
	{ id: 7, type: 'ADHD' },
	{ id: 7, type: 'Other' },
];

export const languages = [
	{ id: 1, name: 'English' },
	{ id: 2, name: 'Somali' },
	{ id: 3, name: 'Oromo' },
	{ id: 4, name: 'Spanish' },
	{ id: 5, name: 'Hmong' },
	{ id: 6, name: 'Arabic' },
	{ id: 7, name: 'Other' },
];

export const employees = [
	{
		name: 'Abdirizak Ismail',
		role: 'Director',
		location: 'Greater Minneapolis/St. Paol',
		img: 'https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600',
	},
	{
		name: 'Mohamed Muhumed',
		role: 'Program Manager',
		location: 'Greater Minneapolis/St. Paol',
		img: 'https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600',
	},
	{
		name: 'Tanya LastName, LICSW',
		role: 'Clical Supervisor',
		location: 'Greater Minneapolis/St. Paol',
		img: 'https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600',
	},
];

export const legalTexts = [
	{
		heading: 'Privacy Policy',
		element: (
			<div>
				<i>Last updated: 10.1.2024</i>
				<p>
					At Mindful Recovery Services, we are committed to maintaining the
					privacy and protection of your personal information. This Privacy
					Policy outlines how we collect, use, disclose, and safeguard your
					information in accordance with applicable laws, including the Health
					Insurance Portability and Accountability Act (HIPAA) and other federal
					and state regolations.
				</p>
				<b>Information We Collect</b>
				<p>
					We collect and maintain both personal and health-related information
					from you, which may include:
				</p>
				<ol>
					<li>
						Personal Information: Name, address, phone number, email address,
						date of birth, and other identifying details.
					</li>
					<li>
						Health Information: Medical history, treatment records, mental
						health evaluations, treatment plans, medications, and other
						health-related information shared during your care.
					</li>
				</ol>
				<b>How We Use Your Information</b>
				<p>We use the information we collect to:</p>
				<ol>
					<li>
						Provide ARMHS services, including assessment, treatment, and
						coordination with healthcare providers.
					</li>
					<li>
						Communicate with you regarding appointments, care updates, and
						related services.
					</li>
					<li>
						Comply with legal requirements, such as reporting to government
						agencies when mandated.
					</li>
					<li>
						Enhance and improve the services we offer through feedback and
						outcome evaluations.
					</li>
				</ol>
				<b>Disclosure of Information</b>
				<p>
					We will not disclose your personal or health information without your
					consent unless permitted or required by law. The instances where we
					may disclose information include:
				</p>
				<ol>
					<li>
						For Treatment: To other healthcare providers involved in your care.
					</li>
					<li>
						For Payment: To process insurance claims or obtain payment for
						services rendered.
					</li>
					<li>
						For Healthcare Operations: To evaluate the quality of care and
						improve our services.
					</li>
					<li>
						As Required by Law: For compliance with court orders, legal
						investigations, or in cases where reporting is mandated (e.g., cases
						of abuse or public health concerns).
					</li>
				</ol>
				<b>How We Protect Your Information</b>
				<p>
					We employ a variety of security measures to ensure the protection of
					your personal and health information:
				</p>
				<ol>
					<li>
						Physical security measures, such as secured facilities and locked
						filing systems.
					</li>
					<li>
						Technical safeguards, including encrypted electronic communications
						and restricted access to digital records.
					</li>
					<li>
						Administrative protocols, such as training staff on confidentiality
						practices and requiring confidentiality agreements.
					</li>
				</ol>
				<h2>Your Rights</h2>
				<p>
					You have specific rights regarding your personal and health
					information, including:
				</p>
				<ol>
					<li>
						Access: You may request to review or obtain a copy of your health
						records.
					</li>
					<li>
						Amendments: You may request corrections or updates to your records.
					</li>
					<li>
						Restrictions: You may request limitations on the use or disclosure
						of your information.
					</li>
					<li>
						Confidential Communications: You may request that we communicate
						with you in a specific way or at a specific location for greater
						privacy.
					</li>
					<li>
						Complaints: You may file a complaint if you believe your privacy
						rights have been violated.
					</li>
				</ol>
				<h2>Retention of Data</h2>
				<p>
					We retain your personal and health information for as long as
					necessary to provide services, comply with legal obligations, resolve
					disputes, and enforce our agreements. When no longer required, your
					data will be securely destroyed in accordance with legal and
					regolatory guidelines.
				</p>
				<h2>Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy from time to time. Any changes will
					be posted on our website, and we encourage you to review the policy
					periodically to stay informed about how we are protecting your
					information.
				</p>
				<h2>Contact Us</h2>
				<p>
					If you have any questions or concerns regarding this Privacy Policy or
					your rights, please contact us at:
				</p>
				<p>Mindful Recovery Services</p>
				<p>6040 Earle Brown Dr. Suite 310B Brooklyn Center, MN 55430 </p>
				<p>Phone: 612.990.3110</p>
				<p>Email: admin@mindfulhealthmn.org</p>
				<p>
					This privacy policy ensures you are transparent about how you manage
					client data while remaining compliant with HIPAA and other
					regolations.
				</p>
			</div>
		),
	},
	{
		heading: 'HIPPA Compliance',
		element: (
			<div>
				<p>
					Mindful Recovery Services LLC (ARMHS Provider) is committed to
					protecting the privacy and security of your protected health
					information (PHI) in compliance with the Health Insurance Portability
					and Accountability Act (HIPAA). We adhere to all state and federal
					laws regarding the collection, use, and disclosure of PHI.
				</p>
				<p>
					Our HIPAA compliance policy includes the following key components:
				</p>
				<ol>
					<li>
						Confidentiality: Your personal information, including your medical
						history, treatment plans, and any other health-related information
						shared with us, is strictly confidential. We will not disclose any
						information without your explicit written consent, unless required
						by law.
					</li>
					<li>
						Use of Information: PHI may be used for treatment purposes, payment
						processing, and healthcare operations, in accordance with HIPAA
						regolations. This includes communication with other healthcare
						providers or entities directly involved in your care.
					</li>
					<li>
						Security: We have implemented physical, technical, and
						administrative safeguards to ensure the security of your PHI. All
						electronic communications are encrypted, and access to your health
						records is restricted to authorized personnel only.
					</li>
					<li>
						Rights: You have the right to access, review, and request amendments
						to your health records. You may also request an accounting of any
						disclosures of your PHI, and file a complaint if you believe your
						privacy rights have been violated.
					</li>
				</ol>
				<p>
					For more information on our privacy practices or to report a concern,
					please contact us at admin@mindfulhealthmn.org
				</p>
			</div>
		),
	},
	{
		heading: 'Quality Assurance Plan',
		element: (
			<p>
				Click to download our{' '}
				<a
					href='/QualityAssurancePlan.pdf'
					download='QualityAssurancePlan.pdf'
					className='underline'
				>
					Quality Assurance Plan.pdf
				</a>
			</p>
		),
	},
];
