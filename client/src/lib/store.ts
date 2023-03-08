import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { StatusResponse, UserRepos, RepoSelected, PayloadSetSelector, Commit, UserCommits } from '../interface';
import { fetchCommit, fetchUserRepos } from './fetch';

interface InitialStoreState {
	loading: boolean;
	userRepos: UserRepos[];
	statusResponse?: StatusResponse;
	selector: RepoSelected;
	setSelector: (payload: PayloadSetSelector) => void;
	isValidUser: boolean;
	commits: UserCommits;
	fetchCommit: () => void;
	fetchUserRepos: () => void;
	fetchAll: () => void;
}

const useStoreState = create<InitialStoreState>()(
	devtools((set, get) => ({
		loading: false,
		selector: { first: '', second: '', name: 'luigifgp', mode: false },
		userRepos: [],
		commits: { firstCard: [], secondCard: [] },
		statusResponse: { message: '', status: false },
		setSelector: (payload: PayloadSetSelector) => set((state) => ({ selector: { ...state.selector, ...payload } })),
		isValidUser: false,
		fetchUserRepos: async () => {
			try {
				set({ loading: true });
				const userRepos = await fetchUserRepos(get().selector?.name);
				if (userRepos?.length) {
					const isValid = userRepos[0] && userRepos[0]?.owner?.login === get().selector?.name ? true : false;
					set({ userRepos, loading: false, isValidUser: isValid });
				}
				
			} catch (err) {
				set({
					statusResponse: { message: 'Something wrong happened fetching User Repositories', status: true },
					loading: false,
				});
				console.log(err);
			}
		},
		fetchCommit: async () => {
			try {
				set({ loading: true });
				const commits = await fetchCommit(get().selector);
				set({ commits, loading: false });
			} catch (err) {
				set({
					statusResponse: { message: 'Something wrong happened fetching User Commits', status: true },
					loading: false,
				});
				console.log(err);
			}
		},
		fetchAll: async () => {
			await get().fetchUserRepos();
			await get().fetchCommit();
		},
	}))
);

export default useStoreState