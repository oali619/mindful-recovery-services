import { useState } from 'react';
import { Link } from '@remix-run/react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from '../constants';

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [currentNavIndex, setCurrentNavIndex] = useState(0);
	return (
		<div className='min-h-full'>
			<Disclosure as='nav' className='bg-blue-800 fixed top-0 left-0 right-0'>
				<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<div className='flex items-center'>
							<Link to='/' className='flex-shrink-0'>
								<img
									alt='Mindful Recovery Services Logo'
									src=''
									className='h-16 w-16'
								/>
							</Link>
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									{navigation.map((item, index) => {
										const current = index === currentNavIndex;
										return (
											<Link
												key={item.name}
												to={item.to}
												aria-current={current ? 'page' : undefined}
												onClick={() => {
													setCurrentNavIndex(index);
												}}
												className={classNames(
													current
														? 'bg-blue-700 text-white'
														: 'text-white hover:bg-blue-700',
													'rounded-md px-3 py-2 text-sm font-medium'
												)}
											>
												{item.name}
											</Link>
										);
									})}
								</div>
							</div>
						</div>
						<div className='-mr-2 flex md:hidden'>
							{/* Mobile menu button */}
							<DisclosureButton className='group relative inline-flex items-center justify-center rounded-md bg-blue-800 p-2 text-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800'>
								<span className='absolute -inset-0.5' />
								<span className='sr-only'>Open main menu</span>
								<Bars3Icon
									aria-hidden='true'
									className='block h-6 w-6 group-data-[open]:hidden'
								/>
								<XMarkIcon
									aria-hidden='true'
									className='hidden h-6 w-6 group-data-[open]:block'
								/>
							</DisclosureButton>
						</div>
					</div>
				</div>

				<DisclosurePanel className='md:hidden'>
					<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
						{navigation.map((item) => (
							<DisclosureButton
								key={item.name}
								as='a'
								href={item.to}
								aria-current={item.current ? 'page' : undefined}
								className={classNames(
									item.current
										? 'bg-blue-900 text-white'
										: 'text-white hover:bg-gray-700 hover:text-white',
									'block rounded-md px-3 py-2 text-base font-medium'
								)}
							>
								{item.name}
							</DisclosureButton>
						))}
					</div>
				</DisclosurePanel>
			</Disclosure>
		</div>
	);
}
