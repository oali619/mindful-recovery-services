import { employees } from '../src/constants';

export default function Team() {
	return (
		<div className='py-24 sm:py-32'>
			<div
				aria-hidden='true'
				className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#B9F6CA] to-[#00C853] opacity-20'
				/>
			</div>
			<div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
				<div className='max-w-2xl'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						Meet our team
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Our dedicated team of mental health professionals is committed to
						providing compassionate and comprehensive care. With years of
						experience and a diverse range of expertise, our team members work
						collaboratively to support your mental well-being. Get to know the
						individuals who are here to help you on your journey to better
						mental health.
					</p>
				</div>
				<ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
					{employees.map((employee) => (
						<li key={employee.name}>
							<div className='flex items-center gap-x-6'>
								<img
									alt=''
									src={employee.img}
									className='h-16 w-16 rounded-full'
								/>
								<div>
									<h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
										{employee.name}
									</h3>
									<p className='text-sm font-semibold leading-6 text-blue-600'>
										{employee.role}
									</p>
									<p className='text-sm font-semibold leading-6 text-blue-600'>
										{employee.location}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
