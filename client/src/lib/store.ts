import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { StatusResponse, UserRepos, RepoSelected, PayloadSetSelector, Commit, UserCommits } from '../interface';
import { fetchCommit, fetchUserRepos } from './fetch';

interface InitialStoreState {
	loading: boolean;
	userRepos: UserRepos[];
	statusResponse?: StatusResponse;
	selector: RepoSelected;
	selectedName: string | null;
	setSelectedName: (payload: string) => void
	setSelector: (payload: PayloadSetSelector) => void;
	commits: UserCommits;
	fetchCommit: () => void;
	isValidUser: boolean;
	fetchUserRepos: () => void;
	fetchAll: () => void;
}

const useStoreState = create<InitialStoreState>()(
	devtools((set, get) => ({
		loading: false,
		selector: { first: '', second: '', name: 'luigifgp', mode: false },
		selectedName: null,
		setSelectedName: (payload: string) => set({selectedName: payload}),
		userRepos: [],
		commits: { firstCard: [], secondCard: [] },
		statusResponse: { message: '', status: false },
		setSelector: (payload: PayloadSetSelector) => set((state) => ({ selector: { ...state.selector, ...payload } })),
		fetchUserRepos: async () => {
			try {
				set({ loading: true,statusResponse: { message: '', status: false }, });
				const userRepos = await fetchUserRepos(get().selector?.name);
				if (userRepos?.length) {
					set({ userRepos, loading: false, selectedName: userRepos[0]?.owner?.login });
				}
			} catch (err) {
				set({
					statusResponse: { message: 'Something wrong happened fetching User Repositories', status: true },
					loading: false,
				});
				console.log(err);
			}
		},
		isValidUser: get()?.selector?.name === get()?.selectedName ?? false,
		fetchCommit: async () => {
			try {
				set({ loading: true });
				const commits = await fetchCommit(get().selector);
				set({ commits, loading: false });
			} catch (err) {
				set({
					statusResponse: {
						message: 'Ups!! Something wrong happened or we are not allow to accomplish this order.',
						status: true,
					},
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