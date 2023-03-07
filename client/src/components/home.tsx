import { FC } from 'react';
import { Form } from './form/form';
import useStoreState from '../store';
import TableCard from './cards/table';

const Home: FC = () => {
	const [selector, commits, loading, error] = useStoreState((state) => [
		state.selector,
		state.commits,
		state.loading,
		state.statusResponse,
	]);
	return (
		<div className='mx-auto'>
			<div className=' px-0 lg:px-4 md:px-0 mt-0  lg:mb-16 text-white leading-normal'>
				<Form />
				<div className='flex flex-row flex-wrap flex-grow -mt-10 lg:mt-2'>
					<TableCard {...commits} loading={loading} {...selector} error={error?.message || ''} />
				</div>
			</div>
		</div>
	);
};

export default Home;
