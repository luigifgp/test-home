import { FC } from 'react';

export const Error: FC<{ errorMessage: string }> = ({ errorMessage }) => {
	const message = errorMessage
		? errorMessage
		: 'Ups!! Something wrong happened or we are not allow to accomplish this order.';
	return (
		<div className='grid grid-flow-row px-20 lg:px-0 justify-center mt-20 text-xs md:text-md'>
			<h1
				className='text-black w-full text-center font-bold rounded-full p-1 lg:p-2  text-base
       bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
				{message}
			</h1>
			<img className='' alt='not-found' src='/not-found.png' />
		</div>
	);
};
