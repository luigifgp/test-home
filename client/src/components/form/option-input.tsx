import { ChangeEvent, FC } from 'react';
import { UserRepos } from '../../interface';

interface OptionInputProps {
	userRepos: UserRepos[];
	value: string;
	onChange: (arg: string) => void;
	disabled?: boolean;
}

export const OptionsInput: FC<OptionInputProps> = ({ userRepos, value, onChange, disabled }) => {
	return (
		<div className='lg:-mt-0'>
			<label className='block mb-1 lg:mb-2 text-sm font-medium text-gray-900 dark:text-gray-600'>
				Choose a repository
			</label>
			<select
				disabled={!disabled}
				onChange={(e: ChangeEvent<{ value: string }>) => onChange(e.target.value)}
				id='default'
				className='bg-gray-50  w-12/12 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block-inline w-full lg:min-w-[10rem] lg:max-w-[10rem] 
        xl:min-w-[20rem] xl:max-w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
				<option className=' w-10/12' selected>
					{value}
				</option>
				{userRepos && userRepos?.map((u) => <option value={u?.name}>{u?.name} </option>)}
			</select>
		</div>
	);
};
