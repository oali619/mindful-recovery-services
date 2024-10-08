import { values } from "../constants";

export default function Mission() {
	return (
		<div>
			<div className='flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto'>
				<h2 className='text-5xl font-bold text-gray-900 place-self-center'>
					Mission & Values
				</h2>
				<p className='mt-4 text-gray-500'>
					Our mission is to empower individuals and communities by providing
					compassionate, evidence-based social work services that promote
					well-being, resilience, and social justice. We are committed to
					fostering positive change through personalized support, advocacy, and
					collaboration, ensuring that every person has the opportunity to
					thrive.
				</p>
				<div className="mt-10 w-full" />
				{values.map((value, i) => (
					<div className="md:w-1/2 lg:w-1/3 max-w-sm" key={i}>
						<div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8">
							<span className='sm:ml-4 mt-4 sm:mt-2'>
								<span className='mt-4 tracking-wide font-bold text-2xl leading-none'>{value.name}</span>
								<p className='mt-2 text-md text-gray-500'>
									{value.description}
								</p>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
