import cx from 'clsx';
import { FC } from 'react';
import { Commit } from '../../interface';
import { Loading } from '../utils/loading';

interface CommitCardProps {
	data: Commit[];
	loading: boolean;
}

const CommitCard: FC<CommitCardProps> = ({ data, loading }) => {
	if (!data.length) return null;
	const tableNav = ['User', 'Message', 'Date', 'Time'];
	return (
		<div className='grid grid-cols-1'>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left  text-secondary '>
					<thead
						className={cx(
							{ hidden: !data },
							'text-xmd text-box duration-700 bg-gradient-to-r',
							'from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
						)}>
						<tr>
							{tableNav?.map((nav) => (
								<th scope='col' className='px-6 py-3'>
									{nav}
								</th>
							))}
						</tr>
					</thead>
					{!loading && data?.map((d) => <TableBody {...d} />)}
				</table>
			</div>
			{loading && <Loading />}
		</div>
	);
};
export default CommitCard;

const messageReducer = (message: string) => {
	if (message.length > 60) return message.substring(0, 50).concat('...');
	return message;
};

interface TableBodyProps extends Commit {}

const TableBody: FC<TableBodyProps> = ({ user, message, date, url }) => {
	return (
		<tbody>
			<tr className='bg-gray-800 hover:bg-box hover:bg-opacity-90 overflow-hidden'>
				<td className=''>
					<div className='lg:px-2 text-center text-xs lg:text-md text-gray-400'>{user}</div>
				</td>
				<td className='px-3 py-4 max-w-lg font-medium transition-all text-ellipsis overflow-hidden  xl:whitespace-pre'>
					<a target='_blank' href={url}>
						{messageReducer(message)}
					</a>
				</td>
				<td className='px-6 lg:px-2 text-center lg:py-4 text-xs text-secondary whitespace-no-wrap opacity-40 hover:opacity-100'>
					<a target='_blank' href={url}>
						<span className='inline-flex lending-5 bg-gradient-to-r  from-green-400 to-blue-500 rounded-full  bg-opacity-40 p-1 lg:p-2'>
							{new Date(date).toDateString()}
						</span>
					</a>
				</td>
				<td className='px-6 py-4 w-10 text-center max-w-xs text-xs'>{new Date(date).toLocaleTimeString()}</td>
			</tr>
		</tbody>
	);
};
