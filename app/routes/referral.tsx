import { useState, useEffect } from 'react';
import {
	ActionFunctionArgs,
	unstable_composeUploadHandlers,
	unstable_createFileUploadHandler,
	unstable_createMemoryUploadHandler,
	unstable_parseMultipartFormData,
} from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { Resend } from 'resend';
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Label,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { toast } from 'sonner';
import {
	referrerType,
	insuranceTypes,
	waiverTypes,
	mentalHealthTypes,
	languages,
} from '../src/constants';
import EmailTemplate from '~/src/Components/EmailTemplate';

export async function action({ request }: ActionFunctionArgs) {
	const uploadHandler = unstable_composeUploadHandlers(
		unstable_createFileUploadHandler({
			maxPartSize: 5_000_000,
			file: ({ filename }) => filename,
		}),
		// parse everything else into memory
		unstable_createMemoryUploadHandler()
	);
	const formData = await unstable_parseMultipartFormData(
		request,
		uploadHandler
	);
	const data = Object.fromEntries(formData.entries());
	const file = data.attachments as File;
	console.log({ data });
	const resend = new Resend(process.env.RESEND_API_KEY);
	const response = await resend.emails.send({
		from: 'admin@mindfulhealthmn.org',
		to: 'referral@mindfulhealthmn.org',
		subject: `New Referral - ${data.clientName}`,
		react: <EmailTemplate options={data} referral={true} />,
		attachments: file.size
			? [
					{
						filename: file.name,
						content: Buffer.from(await file.arrayBuffer()),
					},
			  ]
			: null,
	});
	return response;
}

export default function Referral() {
	const [selectedReferrer, setSelectedReferrer] = useState(referrerType[0]);
	const [selectedInsurance, setSelectedInsurance] = useState(insuranceTypes[0]);
	const [selectedWaiver, setSelectedWaiver] = useState(waiverTypes[0]);
	const [mentalHealthDiagnosis, setMentalHealthDiagnosis] = useState(
		mentalHealthTypes[0]
	);
	const [substanceAbuse, setSubstanceAbuse] = useState('No');
	const [safetyConcern, setSafetyConcern] = useState('No');
	const [preferredLanguage, setPreferredLanguage] = useState(languages[0]);
	const [referralSent, setReferralSent] = useState(false);
	const [referralFailed, setReferralFailed] = useState(false);

	const response = useActionData<typeof action>();
	useEffect(() => {
		response?.data?.id && setReferralSent(true);
		response?.error && setReferralFailed(true);
	}, [response]);

	function handleClear() {
		const referralForm = document.getElementById('referral_form');
		if (referralForm) {
			(referralForm as HTMLFormElement).reset();
		}
		setSelectedReferrer(referrerType[0]);
		setSelectedInsurance(insuranceTypes[0]);
		setSelectedWaiver(waiverTypes[0]);
		setMentalHealthDiagnosis(mentalHealthTypes[0]);
	}

	return (
		<>
			{referralSent && toast.success('Referral sent successfully.')}
			{referralFailed &&
				toast.error('Referral failed to send. Please try again.')}
			<form
				action='/referral'
				method='POST'
				className='py-[100px] mx-[15px]'
				id='referral_form'
				encType='multipart/form-data'
			>
				<div className='space-y-12'>
					<div className='border-b border-gray-900/10 pb-4 grid place-items-center'>
						<h1 className='text-4xl font-bold leading-7 text-gray-900'>
							Refer A Client
						</h1>
						<p className='mt-1 text-sm leading-6 text-gray-600 text-center'>
							We thank you for referring a client to us. Please fill out the
							form below.
						</p>
					</div>

					<h2 className='mt-10 text-base font-semibold leading-7 text-gray-900'>
						Referrer Information
					</h2>
					<div className='mt-10 grid grid-cols-2 sm:grid-cols-6 gap-x-4'>
						<Listbox
							name='referrertype'
							value={selectedReferrer}
							onChange={setSelectedReferrer}
						>
							<div className='col-span-1'>
								<Label className='block text-sm font-medium leading-6 text-gray-900'>
									Referrer Type
								</Label>
								<div className='relative mt-2'>
									<ListboxButton className='w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
										<span className='flex items-center'>
											<span className='ml-3 block truncate'>
												{selectedReferrer.type}
											</span>
										</span>
										<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
											<ChevronUpDownIcon
												aria-hidden='true'
												className='-mr-1 h-5 w-5 text-gray-400'
											/>
										</span>
									</ListboxButton>
									<ListboxOptions
										transition
										className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
									>
										{referrerType.map((referrer) => (
											<ListboxOption
												key={referrer.id}
												value={referrer}
												className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
											>
												<div className='flex items-center'>
													<span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
														{referrer.type}
													</span>
												</div>

												<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
													<CheckIcon aria-hidden='true' className='h-5 w-5' />
												</span>
											</ListboxOption>
										))}
									</ListboxOptions>
								</div>
							</div>
						</Listbox>
						<div className='col-span-1'>
							<label
								htmlFor='about'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Referrer Name
							</label>
							<div className='mt-2'>
								<input
									id='referrerName'
									name='referrerName'
									className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									placeholder='John Doe'
								/>
							</div>
						</div>
						<div className='col-span-1'>
							<label
								htmlFor='about'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Referrer Phone Number
							</label>
							<div className='mt-2'>
								<input
									id='referrerPhoneNumber'
									name='referrerPhoneNumber'
									className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									placeholder='123-456-7890'
								/>
							</div>
						</div>
						<div className='col-span-1 sm:col-span-2'>
							<label
								htmlFor='about'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Referrer Email
							</label>
							<div className='mt-2'>
								<input
									id='referrerEmail'
									name='referrerEmail'
									className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									placeholder='johndoe@email.com'
								/>
							</div>
						</div>
					</div>

					<div className='border-b border-gray-900/10 pb-12'>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Client Information
						</h2>
						<div className='mt-10 grid grid-cols-2 sm:grid-cols-6 gap-x-4 gap-y-2'>
							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='clientName'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Client Name
								</label>
								<div className='mt-2'>
									<input
										id='clientName'
										name='clientName'
										type='text'
										placeholder='John Doe'
										autoComplete='given-name'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1'>
								<label
									htmlFor='about'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Date of Birth
								</label>
								<div className='mt-2'>
									<input
										id='dob'
										name='dob'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
										placeholder='mm/dd/yyyy'
									/>
								</div>
							</div>

							<div className='col-span-1'>
								<label
									htmlFor='number'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Client Phone Number
								</label>
								<div className='mt-2'>
									<input
										id='clientPhoneNumber'
										name='clientPhoneNumber'
										type='text'
										placeholder='123-456-7890'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Client Email Address
								</label>
								<div className='mt-2'>
									<input
										id='clientEmail'
										name='clientEmail'
										type='email'
										autoComplete='email'
										placeholder='johndoe@email.com'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-2 sm:col-span-4'>
								<label
									htmlFor='address'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Street address
								</label>
								<div className='mt-2'>
									<input
										id='address'
										name='address'
										type='text'
										autoComplete='street-address'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='city'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									City
								</label>
								<div className='mt-2'>
									<input
										id='city'
										name='city'
										type='text'
										autoComplete='address-level2'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='region'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									State / Province
								</label>
								<div className='mt-2'>
									<input
										id='region'
										name='region'
										type='text'
										autoComplete='address-level1'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='region'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									County
								</label>
								<div className='mt-2'>
									<input
										id='county'
										name='county'
										type='text'
										autoComplete='address-level1'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='postalcode'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									ZIP / Postal code
								</label>
								<div className='mt-2'>
									<input
										id='postalcode'
										name='postalcode'
										type='text'
										autoComplete='postal-code'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<Listbox
									value={selectedInsurance}
									onChange={setSelectedInsurance}
									name='insurancetype'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Insurance
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center'>
												<span className='ml-3 block truncate'>
													{selectedInsurance.type}
												</span>
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											{insuranceTypes.map((insurance) => (
												<ListboxOption
													key={insurance.id}
													value={insurance}
													className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
													refName='insuranceType'
												>
													<div className='flex items-center'>
														<span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
															{insurance.type}
														</span>
													</div>

													<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
														<CheckIcon aria-hidden='true' className='h-5 w-5' />
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<Listbox
									value={selectedWaiver}
									onChange={setSelectedWaiver}
									name='waivertype'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Waiver Type
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center'>
												<span className='ml-3 block truncate'>
													{selectedWaiver.type}
												</span>
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											{waiverTypes.map((waiver) => (
												<ListboxOption
													key={waiver.id}
													value={waiver}
													className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
													refName='waiverType'
												>
													<div className='flex items-center'>
														<span className='ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
															{waiver.type}
														</span>
													</div>

													<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
														<CheckIcon aria-hidden='true' className='h-5 w-5' />
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>
							</div>

							<div className='col-span-1 sm:col-span-2'>
								<label
									htmlFor='number'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									PMI Number
								</label>
								<div className='mt-2'>
									<input
										id='pmiNumber'
										name='pmiNumber'
										type='text'
										placeholder='00000000'
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='border-b border-gray-900/10 pb-12'>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Additional Information
						</h2>
						<p className='mt-1 text-sm leading-6 text-gray-600'>
							Let us know anything else you think we should know about the
							client. If multiple selections need to be made please add them in
							the additional notes below. Feel free to attach any documents here
							as well.
						</p>

						<div className='mt-10 grid grid-cols-2 sm:grid-cols-6 gap-x-4 gap-y-2'>
							<div className='col-span-1 sm:col-span-2'>
								<Listbox
									value={mentalHealthDiagnosis}
									onChange={setMentalHealthDiagnosis}
									name='mentalHealth'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Mental Health Diagnosis
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center ml-3 block truncate'>
												{mentalHealthDiagnosis.type}
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											{mentalHealthTypes.map((diagnosis) => (
												<ListboxOption
													key={diagnosis.id}
													value={diagnosis}
													className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
													refName='mentalHealthType'
												>
													<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
														{diagnosis.type}
													</span>
													<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
														<CheckIcon aria-hidden='true' className='h-5 w-5' />
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>
							</div>

							<div className='col-span-1'>
								<Listbox
									value={substanceAbuse}
									onChange={setSubstanceAbuse}
									name='substanceAbuse'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Substance Abuse History
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center ml-3 block truncate'>
												{substanceAbuse}
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											<ListboxOption
												key={1}
												value={'Yes'}
												className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
												refName='substanceAbuse'
											>
												<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
													Yes
												</span>
												<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
													<CheckIcon aria-hidden='true' className='h-5 w-5' />
												</span>
											</ListboxOption>
											<ListboxOption
												key={2}
												value={'No'}
												className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
												refName='substanceAbuse'
											>
												<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
													No
												</span>
												<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
													<CheckIcon aria-hidden='true' className='h-5 w-5' />
												</span>
											</ListboxOption>
										</ListboxOptions>
									</div>
								</Listbox>
							</div>

							<div className='col-span-1'>
								<Listbox
									value={safetyConcern}
									onChange={setSafetyConcern}
									name='safety'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Safety Concerns
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center ml-3 block truncate'>
												{safetyConcern}
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											<ListboxOption
												key={1}
												value={'Yes'}
												className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
												refName='safety'
											>
												<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
													Yes
												</span>
												<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
													<CheckIcon aria-hidden='true' className='h-5 w-5' />
												</span>
											</ListboxOption>
											<ListboxOption
												key={2}
												value={'No'}
												className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
												refName='safetyConcern'
											>
												<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
													No
												</span>
												<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
													<CheckIcon aria-hidden='true' className='h-5 w-5' />
												</span>
											</ListboxOption>
										</ListboxOptions>
									</div>
								</Listbox>
							</div>

							<div className='col-span-1'>
								<Listbox
									value={preferredLanguage}
									onChange={setPreferredLanguage}
									name='preferredLanguage'
								>
									<Label className='block text-sm font-medium leading-6 text-gray-900'>
										Preferred Langauge
									</Label>
									<div className='relative mt-2'>
										<ListboxButton className='relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6'>
											<span className='flex items-center'>
												{preferredLanguage.name}
											</span>
											<span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
												<ChevronUpDownIcon
													aria-hidden='true'
													className='h-5 w-5 text-gray-400'
												/>
											</span>
										</ListboxButton>
										<ListboxOptions
											transition
											className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
										>
											{languages.map((language) => (
												<ListboxOption
													key={language.id}
													value={language}
													className='group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white'
													refName='preferredLanguage'
												>
													<span className='flex items-center ml-3 block truncate font-normal group-data-[selected]:font-semibold'>
														{language.name}
													</span>
													<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden'>
														<CheckIcon aria-hidden='true' className='h-5 w-5' />
													</span>
												</ListboxOption>
											))}
										</ListboxOptions>
									</div>
								</Listbox>
							</div>
						</div>

						<div className='mt-4 grid grid-cols-1 sm:grid-cols-3'>
							<div className='sm:col-span-4 sm:col-end-3'>
								<label
									htmlFor='comments'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Notes/Comments:
								</label>
								<div className='mt-2 sm-cols-span-4'>
									<textarea
										id='comments'
										name='comments'
										rows={3}
										className='block w-full indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
										placeholder='Any additional information...'
									/>
								</div>
							</div>

							<div className='mt-2 sm:col-span-2'>
								<label
									htmlFor='attachments'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Attach Documents
								</label>
								<div className='mt-2'>
									<input
										id='attachments'
										name='attachments'
										type='file'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6'
										multiple
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						type='button'
						className='text-sm font-semibold leading-6 text-gray-900'
						onClick={handleClear}
					>
						Clear
					</button>
					<button
						type='submit'
						className='rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
						onClick={() => toast.success('Referral submission pending...')}
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
}
