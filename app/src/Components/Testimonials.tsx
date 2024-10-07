import 'slick-carousel/slick/slick.css';
import { useState } from 'react';
import Slider from 'react-slick';
import { testimonials } from '../constants';
// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { love } from '../../images';

export default function Testimonials() {
	const [sliderRef, setSliderRef] = useState(null);
	return (
		<div>
			<div className='mx-auto py-8 -z-10'>
				<div className='mb-2 border-b border-blue-900/10' />
				<h2 className='text-5xl font-bold text-gray-900 text-center'>
					Success Stories
				</h2>
				<div className='flex flex-col md:flex-row justify-between items-center py-8'>
					<div className='w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-5/12 xl:w-6/12 flex-shrink-0 relative -z-[1]'>
						<img className='rounded' src={love} />
					</div>
					<div className='w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-7/12 xl:w-6/12 mt-16 md:mt-0 md:pl-12 lg:pl-16 md:order-last'>
						<h5 className='text-3xl sm:text-4xl font-black tracking-wide text-center mt-4 font-black text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight'>
							Our Clients Love Us.
						</h5>
						<p className='mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100'>
							Here is what our clients have to say about us. We are proud to
							have helped them achieve their goals:
						</p>
						<Slider autoplay pauseOnHover arrows={false}>
							{testimonials.map((testimonial, index) => (
								<div className='outline-none h-full flex flex-col' key={index}>
									<div className='mt-4 text-xl font-bold'>
										{testimonial.heading}
									</div>
									<blockquote className='text-center mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700'>
										{testimonial.quote}
									</blockquote>
									<div className='mt-auto flex justify-between items-center flex-col sm:flex-row'>
										<div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start'>
											<img
												className='rounded-full w-16 h-16 sm:w-20 sm:h-20'
												src={testimonial.profileImageSrc}
												alt={testimonial.customerName}
											/>
											<div className='text-center md:text-left sm:ml-6 mt-2 sm:mt-0'>
												<h5 className='font-bold text-xl'>
													{testimonial.customerName}
												</h5>
												<p className='font-medium text-secondary-100'>
													{testimonial.customerLocation}
												</p>
											</div>
										</div>
										{/* <div className='flex mt-8 sm:mt-0'>
											<button
												className='mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline'
												  onClick={sliderRef?.slickPrev}
											>
												<ArrowLeftIcon />
											</button>
											<div className='divider' />
											<button
												className='mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline'
												  onClick={sliderRef?.slickNext}
											>
												<ArrowRightIcon />
											</button>
										</div> */}
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
}
