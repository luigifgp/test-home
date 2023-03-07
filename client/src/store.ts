import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { apiRequest } from './lib/api-request';
import { StatusResponse, UserRepos, RepoSelected, PayloadSetSelector } from './interface';



interface InitialStoreState {
	loading: boolean;
	userRepos: UserRepos[];
	statusResponse?: StatusResponse;
	selector: RepoSelected;
	setSelector: (payload: PayloadSetSelector) => void;
	fetch?: () => void;
}

const useStoreState = create<InitialStoreState>()(
	devtools(
		persist(
			(set) => ({
				loading: false,
				selector: { first: 'test-home', second: 'nextjs-layout-state', name: 'luigifgp', mode: true },
				userRepos: [],
				statusResponse: { message: '' },
				setSelector: (payload: PayloadSetSelector) => set((state) => ({ selector: { ...state.selector, ...payload } })),
				fetch: async () => {
					// const userRepos = await apiRequest();
					// const commits = await apiRequest('');
					// const SelectedData = await apiRequest('');
				},
			}),
			{
				name: 'test-home',
			}
		)
	)
);

export default useStoreState