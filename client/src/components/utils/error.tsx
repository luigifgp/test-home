import { FC } from 'react'

export const Error: FC<{ error: string }> = ({ error }) => {
  return (
    <div className="grid grid-flow-row px-20 lg:px-0 justify-center mt-20 text-xs md:text-md">
      <h1
        className="text-black w-full text-center font-bold rounded-full p-1 lg:p-2 
       bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
      >
        Ups!! Something wrong happened or we are not allow to accomplish this order.
      </h1>
      <img className="" alt="not-found" src="/not-found.png" />
    </div>
  )
}
