import { armhsServiceCategories } from '../src/constants';
import { puzzleBrain } from '../images';
import ClientRehabFlow from '~/src/Components/ClientRehabFlow';

export default function Services() {
	return (
		<div className='pt-24 sm:pt-32'>
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
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-5xl lg:mx-0 grid'>
					<h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						What is ARMHS?
					</h2>
					<div className='mx-auto max-w-2xl sm:row-start-2'>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Adult Rehabilitative Mental Health Services (ARMHS) is a
							strengths-based, person-centered, recovery-focused program with
							the purpose of helping individuals with mental illness overcome
							impairments caused by their symptoms in order to function
							independently in their homes or places of residence. ARMHS can
							provide individuals with support in the following areas:
						</p>
					</div>
					<img
						src={puzzleBrain}
						alt='puzzle brain'
						className='mx-10 my-10 lg:mx-0 lg:max-w-none row-start-2'
					/>
				</div>
				<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
					<div className='text-base font-semibold leading-7 text-gray-600 indent-8 '>
						{armhsServiceCategories.map((service) => (
							<li key={service.name}>{service.name}</li>
						))}
					</div>
				</div>
				<ClientRehabFlow />
			</div>
		</div>
	);
}
