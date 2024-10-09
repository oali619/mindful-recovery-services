import { useState, useEffect } from 'react';
import { Resend } from 'resend';
import { ActionFunctionArgs } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { toast } from 'sonner';
import EmailTemplate from '~/src/Components/EmailTemplate';

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData.entries());

	const resend = new Resend(process.env.RESEND_API_KEY);

	console.log({ data });
	const response = await resend.emails.send({
		from: 'info@mindfulrecoveryservices.org',
		to: 'info@mindfulrecoveryservices.org',
		subject: data.subject,
		react: <EmailTemplate options={data} />,
	});
	console.log({ response });
	return response;
}
import EmailIllustrationSrc from '../../images/email-illustration.svg';

export default () => {
	const [emailSent, setEmailSent] = useState(false);
	const [emailFailed, setEmailFailed] = useState(false);

	const response = useActionData<typeof action>();
	useEffect(() => {
		response?.data?.id && setEmailSent(true);
		response?.error && setEmailFailed(true);
	}, [response]);

	return (
		<div>
			{emailSent && toast.success('Email sent successfully.')}
			{emailFailed && toast.error('Email failed to send. Please try again.')}
			<div className='mb-2 border-b border-blue-900/10' />
			<div className='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-6 md:py-4'>
				<div className='w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 flex-shrink-0 h-80 md:h-auto'>
					<div
						className='rounded bg-contain bg-no-repeat bg-center h-full'
						style={{ backgroundImage: `url(${EmailIllustrationSrc})` }}
					/>
				</div>
				<div className='w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first'>
					<div className='lg:py-8 text-center md:text-left'>
						<h2 className='mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight'>
							<>
								Feel free to{' '}
								<span className='text-primary-500'>get in touch</span>
								<wbr /> with us.
							</>
						</h2>
						<form
							action='/'
							method='POST'
                            id='contact_form'
							className='mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0'
						>
							<input
								className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500'
								type='email'
								name='email'
								placeholder='Your Email Address'
							/>
							<input
								className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500'
								type='text'
								name='fullName'
								placeholder='Full Name'
							/>
							<input
								className='mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500'
								type='text'
								name='subject'
								placeholder='Subject'
							/>
							<textarea
								className='mt-6 first:mt-0 h-24 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500'
								name='message'
								placeholder='Your Message Here'
							/>
							<button
								className='px-8 py-3 font-bold rounded bg-blue-800 text-gray-100 hover:bg-blue-700 hover:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 inline-block mt-8'
								type='submit'
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
