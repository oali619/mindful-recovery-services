import { useState } from 'react';
import { legalTexts } from '../src/constants';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function Legal() {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

	const toggleQuestion = (questionIndex) => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

	return (
		<div className='flex flex-col items-center mx-auto py-20 lg:py-24'>
			<h1 className='text-4xl sm:text-5xl font-black tracking-wide text-center w-full'>
				Legal Texts
			</h1>
			<dl className='mt-12 w-[48rem]'>
				{legalTexts.map((legalText, index) => (
					<div
						key={index}
						className='group mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300'
					>
						<dt
							onClick={() => {
								toggleQuestion(index);
								console.log({ index, activeQuestionIndex });
							}}
							className='flex justify-between items-center cursor-pointer'
						>
							<span className='text-lg lg:text-xl font-semibold'>
								{legalText.heading}
							</span>

							<ChevronUpDownIcon className='w-6 h-6' />
						</dt>
						{activeQuestionIndex === index && (
							<dd className='mt-4 text-sm sm:text-base leading-relaxed'>
								{legalText.element}
							</dd>
						)}
					</div>
				))}
			</dl>
		</div>
	);
}
