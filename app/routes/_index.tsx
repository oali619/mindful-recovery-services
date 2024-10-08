import type { MetaFunction } from '@remix-run/node';
import { useState, useEffect } from 'react';
import { services, values } from '../src/constants';
import { therapy, mission1, mission2, mission3, mission4 } from '../images';
import Testimonials from '../src/Components/Testimonials';
import Footer from '~/src/Components/Footer';
import ContactForm from '~/src/Components/ContactForm';
import Mission from '~/src/Components/Mission';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Mindful Recovery Services' },
		{ name: 'description', content: 'Welcome to our mental health site!' },
	];
};

export default function Index() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			<div className='min-h-full mb-0'>
				<div
					aria-hidden='true'
					className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
				>
					<div
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#64B5F6] to-[#0D47A1 ] opacity-20'
					/>
				</div>
				<main>
					<section>
						<div className='flex flex-col sm:flex-row mt-20'>
							<img className='rounded-lg sm:mr-4' src={therapy} alt='Therapy' />
							<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 content-center'>
								<h1 className='text-7xl font-bold tracking-tight text-gray-900'>
									Mindful Recovery Services
								</h1>
								{/* <p className='text-3xl text-right'>
									Adult Rehabilitation Mental Health Services (ARMHS)
								</p> */}
							</div>
						</div>
					</section>

					<div className='mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8'>
						<section className='grid' id='services'>
							<div className='mb-2 border-b border-blue-900/10' />
							<h2 className='text-5xl font-bold text-gray-900 place-self-center'>
								Our Services
							</h2>
							<div>
								<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
									<div className='mx-auto max-w-2xl py-8 lg:max-w-none'>
										<div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
											{services.map((service) => (
												<div key={service.name} className='group'>
													<div className='h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
														<a
															href={service.href}
															className='block w-full h-full'
														>
															<img
																alt={service.imageAlt}
																src={service.imageSrc}
																className='h-full w-full object-cover object-center'
															/>
														</a>
													</div>
													<a
														className='mt-6 text-base font-semibold text-gray-900'
														href={service.href}
													>
														{service.name}
													</a>
													<p className='text-sm text-gray-500'>
														{service.description}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</section>

						<section className='grid mt-6' id='mission'>
							<div
								aria-hidden='true'
								className='hidden absolute blur-3xl sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu '
							>
								<div
									style={{
										clipPath:
											'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
									}}
									className='aspect-[1400/845] w-[68.5625rem] bg-gradient-to-tr from-[#64B5F6] to-[#0D47A1 ] opacity-20'
								/>
							</div>
							<div className='mb-2 border-b border-blue-900/10' />
							<Mission />
							{/* <h2 className='text-5xl font-bold text-gray-900 place-self-center'>
								Mission & Values
							</h2>
							<div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
								<div>
									<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
										Mission
									</h2>
									<p className='mt-4 text-gray-500'>
										Our mission is to empower individuals and communities by
										providing compassionate, evidence-based social work services
										that promote well-being, resilience, and social justice. We
										are committed to fostering positive change through
										personalized support, advocacy, and collaboration, ensuring
										that every person has the opportunity to thrive.
									</p>

									<h2 className='mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
										Values
									</h2>
									<dl className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
										{values.map((value) => (
											<div
												key={value.name}
												className='border-t border-gray-200 pt-4'
											>
												<dt className='font-medium text-gray-900'>
													{value.name}
												</dt>
												<dd className='mt-2 text-sm text-gray-500'>
													{value.description}
												</dd>
											</div>
										))}
									</dl>
								</div>
								<div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8'>
									<img
										alt='Social worker with client in office.'
										src={mission1}
										className='rounded-lg bg-gray-100'
									/>
									<img
										alt='Social worker with client in office.'
										src={mission2}
										className='rounded-lg bg-gray-100'
									/>
									<img
										alt='Social worker with client in office.'
										src={mission3}
										className='rounded-lg bg-gray-100'
									/>
									<img
										alt='Social worker with client in office.'
										src={mission4}
										className='rounded-lg bg-gray-100'
									/>
								</div>
							</div> */}
						</section>
						<section id='contact'>
							<ContactForm />
						</section>
						<section id='footer'>
							<Footer />
						</section>
					</div>
				</main>
			</div>
		</>
	);
}
