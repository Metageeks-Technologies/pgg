import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Degans3 = () => {
  return (
    <div className='flex flex-row gap-3'> 
      <Sidebar />
      <div className='flex  flex-col w-full'>
        <div>
          <Header />
        </div>
        <div className="flex flex-col myfont px-9 py-14 w-full text-2xl border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
          <div className="text-white max-md:max-w-full">Lock Info</div>
          
          <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Current Locked Amount</div>
            <div className="flex-auto font-bold text-white text-right">20,000,000 wTAI</div>
          </div>
          
          <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Current Values Locked</div>
            <div className="flex-auto font-bold text-right text-white">
              $337,628
            </div>
          </div>
          
          <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Token Address</div>
            <div className="flex-auto font-bold text-right text-purple-600 max-md:max-w-full">
              0x42AfF683884B1Eaa174793733A1F022b386Cd10b
            </div>
          </div>
          
          <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Tone Name</div>
            <div className="font-bold text-right text-white">Trade AI</div>
          </div>
          
          <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Token Symbol</div>
            <div className="font-bold text-right text-white">wTAI</div>
          </div>
          
          <div className="flex gap-5 mt-9 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-neutral-500">Token Decimals</div>
            <div className="font-bold text-right text-white">9</div>
          </div>
        </div>
        <div className="flex flex-col myfont mt-12 px-11 py-14 border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
          <div className="text-2xl text-white max-md:max-w-full">Lock Records</div>
          
          <div className="flex gap-5 justify-between items-start mt-6 text-base max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col  whitespace-nowrap">
              <div className="font-medium text-neutral-500 text-left">Wallet</div>
              <div className="mt-8 font-semibold text-white">0x6227...FcCB</div>
            </div>
            <div className="flex flex-col text-right whitespace-nowrap">
              <div className="font-medium text-neutral-500 text-left">Amount</div>
              <div className="mt-8 font-semibold text-white">20,000,000</div>
            </div>
            <div className="flex flex-col text-right whitespace-nowrap">
              <div className="font-medium text-neutral-500">Cycle(d)</div>
              <div className="self-center mt-8 font-semibold text-white">-</div>
            </div>
            <div className="flex flex-col text-right">
              <div className="font-medium text-neutral-500">Cycle Realse(%)</div>
              <div className="self-center mt-8 font-semibold text-white">-</div>
            </div>
            <div className="flex flex-col text-right whitespace-nowrap">
              <div className="font-medium text-neutral-500">TGE(%)</div>
              <div className="self-center mt-8 font-semibold text-white">-</div>
            </div>
            <div className="flex flex-col text-right">
              <div className="font-medium text-neutral-500 text-left">Unlock time(UTC)</div>
              <div className="mt-7 font-semibold text-white">2024.08.25 15:30</div>
            </div>
            <a href='' className="self-end mt-11 text-xs font-bold text-purple-600 max-md:mt-10">
              View
            </a>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Degans3
