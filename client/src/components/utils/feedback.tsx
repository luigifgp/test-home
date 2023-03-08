import { FC } from 'react';

export const Feedback: FC<{ message: string }> = ({ message }) => {
	return (
		<div className='grid grid-flow-row px-20 lg:px-0 justify-center mt-20 text-xs md:text-md'>
			<h1
				className='text-black w-full text-center font-bold rounded-full p-1 lg:p-2  text-lg
       bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
				{message}
			</h1>
			<img className='mt-10 w-72 h-72' alt='feedback' src='/feedback.png' />
		</div>
	);
};
