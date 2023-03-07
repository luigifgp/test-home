import { ChangeEvent, FC } from 'react';
import { SmallLoading } from '../utils/loading';


interface SearchInputProps {
  value: string;
  onChange: (arg: string) => void;
  selectedName: string;
  loading: boolean;
  valid: boolean;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange, selectedName, loading, valid }) => {

  return (
    <>
      <div className="relative mb-4 lg:mb-0">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          required
          className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
          border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search user"
          onChange={(e: ChangeEvent<{ value: string }>) => onChange(e.target.value)}
          value={value}
        />
      </div>
      <button
        onClick={() => { }}
        type="button"
        disabled={!valid}
        className={`text-white font-bold py-2 grid lg:ml-0 justify-center rounded-lg active:scale-95' disabled:opacity-50 w-14
        ${!valid ? 'bg-green-400' : 'bg-red-600'}`}
      >
        {loading ? <SmallLoading /> : 'test'}
      </button>
    </>
  );
};
