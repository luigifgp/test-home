import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { StatusResponse, UserRepos } from './interface'

interface InitialState {
  loading: boolean
  userRepos: UserRepos[]
  statusResponse?: StatusResponse
  setInitialStore: (payload: InitialState) => void
}

const useInitialStore = create<InitialState>()(
  devtools(
    persist(
      (set) => ({
        loading: false,
        userRepos: [],
        statusResponse: { message: '', },
        setInitialStore: (payload) => set(payload),
      }),
      {
        name: 'test-home',
      }
    )
  )
)

export default useInitialStore