import { FC } from 'react';
import { Form } from './form/form';

const Home: FC = () => {
	return (
		<div className='mx-auto'>
			<div className=' px-0 lg:px-4 md:px-0 mt-0  lg:mb-16 text-white leading-normal'>
				<Form />
				<div className='flex flex-row flex-wrap flex-grow -mt-10 lg:mt-2'>
					<p></p>
				</div>
			</div>
		</div>
	);
};

export default Home;
