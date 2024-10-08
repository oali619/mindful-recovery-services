import { useState, useEffect } from 'react';
import { Resend } from 'resend';
import { ActionFunctionArgs } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Field, Switch } from '@headlessui/react';
import { toast } from 'sonner';
import EmailTemplate from '~/src/Components/EmailTemplate';

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData.entries());

	const resend = new Resend(process.env.RESEND_API_KEY);

	const response = await resend.emails.send({
		// from: 'admin@mindfulhealthmn.org',
		// to: 'contact@mindfulhealthmn.org',
		subject: 'New Contact Form Submission',
		react: <EmailTemplate options={data} />,
	});
	return response;
}

export default function Contact() {
	const [agreed, setAgreed] = useState(false);
	const [emailSent, setEmailSent] = useState(false);
	const [emailFailed, setEmailFailed] = useState(false);

	const response = useActionData<typeof action>();
	useEffect(() => {
		response?.data?.id && setEmailSent(true);
		response?.error && setEmailFailed(true);
	}, [response]);

	return (
		<>
			{emailSent && toast.success('Email sent successfully.')}
			{emailFailed && toast.error('Email failed to send. Please try again.')}
			<div className='px-6 py-24 sm:py-48 lg:px-8'>
				<div
					aria-hidden='true'
					className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl'
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#64B5F6] to-[#0D47A1 ] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
					/>
				</div>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Contact Us
					</h2>
					<p className='mt-2 text-lg leading-8 text-gray-600'>
						We look forward to hearing from you. We will get back to you in 1-2
						business days.
					</p>
				</div>
				<form
					action='/contact'
					method='POST'
					className='mx-auto mt-16 max-w-xl sm:mt-20'
					id='contact_form'
				>
					<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='first-name'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								First name
							</label>
							<div className='mt-2.5'>
								<input
									id='first-name'
									name='first-name'
									type='text'
									autoComplete='given-name'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor='last-name'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								Last name
							</label>
							<div className='mt-2.5'>
								<input
									id='last-name'
									name='last-name'
									type='text'
									autoComplete='family-name'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='company'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								Company
							</label>
							<div className='mt-2.5'>
								<input
									id='company'
									name='company'
									type='text'
									autoComplete='organization'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='email'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								Email
							</label>
							<div className='mt-2.5'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='phone-number'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								Phone number
							</label>
							<div className='relative mt-2.5'>
								<div className='absolute inset-y-0 left-0 flex items-center'>
									<label htmlFor='country' className='sr-only'>
										Country
									</label>
									<select
										id='country'
										name='country'
										className='h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm'
									>
										<option>US</option>
										<option>CA</option>
									</select>
									<ChevronDownIcon
										aria-hidden='true'
										className='pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400'
									/>
								</div>
								<input
									id='phone-number'
									name='phone-number'
									type='tel'
									autoComplete='tel'
									className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block text-sm font-semibold leading-6 text-gray-900'
							>
								Message
							</label>
							<div className='mt-2.5'>
								<textarea
									id='message'
									name='message'
									rows={4}
									className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									defaultValue={''}
								/>
							</div>
						</div>
						<Field className='flex gap-x-4 sm:col-span-2'>
							<div className='flex h-6 items-center'>
								<Switch
									checked={agreed}
									onChange={setAgreed}
									className='group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 data-[checked]:bg-blue-600'
								>
									<span className='sr-only'>Agree to policies</span>
									<span
										aria-hidden='true'
										className='h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
									/>
								</Switch>
							</div>
							<div className='text-sm leading-6 text-gray-600'>
								By selecting this, you agree to our{' '}
								<a
									href='/legal'
									target='_blank'
									className='font-semibold text-blue-600'
								>
									privacy&nbsp;policy
								</a>
								.
							</div>
						</Field>
					</div>
					<div className='mt-10'>
						<button
							type='submit'
							className='block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
						>
							Send
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
