import { SearchInput } from './search-input';
import { OptionsInput } from './option-input';
import { CheckBoxInput } from './checkbox-input';
import { useEffect, useState } from 'react';
import useStoreState from '../../lib/store';
import { shallow } from 'zustand/shallow';

export const Form = () => {
	const [
		selector,
		selectedName,
		setSelectedName,
		setSelector,
		userRepos,
		loading,
		fetchUserRepos,
		fetchAll,
		isValidUser,
	] = useStoreState((state) => [
		state.selector,
		state.selectedName,
		state.setSelectedName,
		state.setSelector,
		state.userRepos,
		state.loading,
		state.fetchUserRepos,
		state.fetchAll,
		state.isValidUser,
	]);

	useEffect(() => {
		fetchUserRepos();
	}, []);
	console.log(userRepos, selectedName, selector);
	const HandleSubmit = async (event: React.FormEvent) => {
		setSelectedName(selector.name);
		event.preventDefault();
		await fetchAll();
	};
	const blockButton = isValidUser && selector.name === selectedName;
	return (
		<div className='p-10 grid justify-items-stretch lg:grid-cols-18 gap-10 items-center'>
			<form
				className='items-center justify-items-stretch  lg:grid-flow-col-dense grid lg:grid-cols-18 lg:gap-10'
				onSubmit={HandleSubmit}>
				<SearchInput
					loading={loading}
					blockButton={blockButton}
					value={selector?.name}
					onChange={(e) => setSelector({ name: e })}
				/>
				<OptionsInput
					value={selector?.first}
					onChange={(e) => setSelector({ first: e })}
					userRepos={userRepos}
					disabled={true}
				/>
				<OptionsInput
					value={selector.second}
					onChange={(e) => setSelector({ second: e })}
					userRepos={userRepos}
					disabled={selector.mode}
				/>
				)
				<CheckBoxInput value={selector.mode} onChange={(e) => setSelector({ mode: e })} />
				<button
					type='submit'
					disabled={!blockButton}
					className='grid items-center justify-center text-sm mb-10 lg:mb-0 font-medium p-4 lg:px-10 rounded-lg
                 active:scale-95 active:opacity-50 disabled:opacity-50
                 justify-self-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                 border-b-4 border-blue-500 hover:border-pink-500  '>
					Search
				</button>
			</form>
		</div>
	);
};
