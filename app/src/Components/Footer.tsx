export default function Footer2() {
	return (
		<div className='relative bg-blue-800 text-gray-100 -mx-8 -mb-8 px-8'>
			<div className='max-w-screen-xl mx-auto pt-16 pb-8'>
				<div className='flex flex-wrap justify-between'>
					<div className='text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5'>
						<div className='flex items-center justify-center lg:justify-start'>
							<img className='w-8' src='' />
							<h5 className='ml-2 text-xl font-black'>
								Mindful Recovery Services
							</h5>
						</div>
						<p className='mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left'>
							151 Silver Lake Rd NW, Suite 110, New Brighton, MN 55112
						</p>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Quick Links</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=id_058153#P22_1124'
									target='_blank'
								>
									Resources
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#'
								>
									FAQs
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#mission'
								>
									Values
								</a>
							</li>
							{/* <li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='#suceessStories'
								>
									Testimonials
								</a>
							</li> */}
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Product</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/referral'
								>
									Referral
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/services'
								>
									Services
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/team'
								>
									Team
								</a>
							</li>
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Legal</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/legal'
								>
									Privacy Policy
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/legal'
								>
									HIPAA Compliance
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/legal'
								>
									Disclaimer
								</a>
							</li>
						</ul>
					</div>
					<div className='w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left'>
						<div className='font-bold uppercase'>Contact</div>
						<ul className='mt-4 text-sm font-medium'>
							<li className='mt-3'>+1 (612) 261-9312</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='mailto:contact@mindfulhealthmn.org'
								>
									contact@mindfulrecoveryservices.org
								</a>
							</li>
							<li className='mt-3'>
								<a
									className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition duration-300'
									href='/contact'
								>
									Contact Form
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='my-8 border-b-2 border-white' />
				<div className='pb-0 text-sm font-normal items-center'>
					&copy; Copyright 2024, Mindful Recovery Services LLC
				</div>
			</div>
		</div>
	);
}
