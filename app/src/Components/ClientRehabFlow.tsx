import { useState } from 'react';
import { armhsServiceTypes } from '../constants';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';


export default function ClientRehabFlow() {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

	const toggleQuestion = (questionIndex) => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

	return (
			<div className='mx-auto py-20 lg:py-24'>
				<div className='flex flex-col items-center'>
					<div>
						<h2 className='text-4xl sm:text-5xl font-black tracking-wide text-center w-full'>
							Client Rehabilitation Flow
						</h2>
						<p className='w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl'>
							Below are the steps taken to ensure optimal recovery and results,
							click each to learn more:
						</p>
					</div>
					<dl className='mt-12 max-w-4xl relative'>
						{armhsServiceTypes.map((serviceType, index) => (
							<div
								key={index}
								onClick={() => {
									toggleQuestion(index);
								}}
								className='group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300'
							>
								<dt className='flex justify-between items-center'>
									<span className='text-lg lg:text-xl font-semibold'>
										{serviceType.name}
									</span>

									<ChevronUpDownIcon className='w-6 h-6' />
								</dt>
								{activeQuestionIndex === index && <dd className='pointer-events-none text-sm sm:text-base leading-relaxed'>
									{serviceType.value}
								</dd>}
							</div>
						))}
					</dl>
				</div>
			</div>
	);
}
