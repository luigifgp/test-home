import { FC } from 'react';
import CommitCard from './commit';
import { Error } from '../utils/error';
import { Commit, StatusResponse } from '../../interface';
import cx from 'clsx';
import { Feedback } from '../utils/feedback';

interface TableCardProps {
	firstCard: Commit[];
	secondCard?: Commit[];
	mode: boolean;
	second: string;
	first: string;
	loading: boolean;
	error?: StatusResponse;
}

const TableCard: FC<TableCardProps> = ({ mode, first, second, firstCard, secondCard, loading, error }) => {
	return (
		<div className='w-full p-3'>
			<div className='bg-secondary rounded-xl shadow-2xl shadow-black'>
				<div className='border-gray-800 p-3 grid grid-flow-col justify-items-center'>
					<h5 className='font-bold text-xl text-black'>1:{first}</h5>
					{mode && <h5 className='font-bold text-xl text-black'>2:{second}</h5>}
				</div>
				{error?.status ? (
					<Error errorMessage={error.message} />
				) : firstCard?.length ? (
					<div
						className={cx(
							mode ? 'lg:grid-cols-2' : 'grid-cols-1',
							'p-4 lg:grid-flow-col-dense grid-cols-1 grid gap-10 justify-items-stretch'
						)}>
						<CommitCard data={firstCard} loading={loading} />
						{secondCard?.length && <CommitCard data={secondCard} loading={loading} />}
					</div>
				) : (
					<Feedback message='Please choose a repository.' />
				)}
				<div></div>
			</div>
		</div>
	);
};

export default TableCard;
