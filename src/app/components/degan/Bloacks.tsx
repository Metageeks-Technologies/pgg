import React from 'react'

const Bloacks = () => {
  return (
    <div className='flex flex-col justify-center gap-5 mt-6 py-6 p-4 sm:flex-row'>
      <div className="flex flex-col p-4  w-[100%] sm:w-[290px] justify-center sm:justify-center sm:px-9 sm:py-9 text-center border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px]">
        <div className="self-center text-4xl font-extrabold text-purple-600">
          $1.1B
        </div>
        <div className="mt-5 text-base font-medium text-white">
          Total Liquidity Raised
        </div>
      </div>

      <div className="flex flex-col p-4  w-[100%] sm:w-[290px] justify-center sm:justify-center sm:px-9 sm:py-9 text-center border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px]">
        <div className="self-center text-4xl font-extrabold text-purple-600">
          22698
        </div>
        <div className="mt-5 text-base font-medium text-white">
          Total Projects
        </div>
      </div>

      <div className="flex flex-col p-4  w-[100%] sm:w-[290px] justify-center sm:justify-center sm:px-9 sm:py-9 text-center border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px]">
        <div className="self-center text-4xl font-extrabold text-purple-600">
          2.7M
        </div>
        <div className="mt-5 text-base font-medium text-white">
          Total Participants
        </div>
      </div>

      <div className="flex flex-col p-4  w-[100%] sm:w-[290px] justify-center sm:justify-center sm:px-9 sm:py-9 text-center border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px]">
        <div className="self-center text-4xl font-extrabold text-purple-600">
          $572.3M
        </div>
        <div className="mt-5 text-base font-medium text-white">
          Total Values Locked
        </div>
      </div>
    </div>
  )
}

export default Bloacks
