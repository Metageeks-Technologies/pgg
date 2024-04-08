// import React from 'react'

// const Degans1 = () => {
//   return (
//     <div>
//       <div className="flex flex-col px-11 py-12 text-base leading-4 w-[60%] border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
//       <div className="text-2xl text-white max-md:max-w-full">
//         Current Presales
//       </div>
      
//       <div className="flex gap-5 mt-11 max-w-full text-xl leading-4 text-white w-[569px] max-md:flex-wrap max-md:mt-10">
//         <div className="flex-auto">Token or LP Token Address</div>
//         <div>Title</div>
//       </div>
//       <div className="flex gap-5 mt-3.5 font-medium text-white max-md:flex-wrap max-md:max-w-full">
//         <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
//           Enter token or LP token address
//         </div>
//         <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
//           Ex: My Lock
//         </div>
//       </div>
//       <div className="flex gap-2 self-start mt-4 font-medium text-white">
//         <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
//         <div className="flex-auto my-auto">Use another owner?</div>
//       </div>
//       <div className="flex gap-5 mt-10 text-xl leading-4 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//         <div className="my-auto">Amount</div>
//         <div className="flex-auto max-md:max-w-full">Lock Until (UTC time)</div>
//       </div>
//       <div className="flex gap-5 mt-3 max-md:flex-wrap">
//         <div className="flex flex-1 flex-auto gap-5 justify-between px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:flex-wrap max-md:max-w-full">
//           <div className="font-medium text-white">Enter amount</div>
//           <div className="font-bold text-purple-600">MAX</div>
//         </div>
//         <div className="flex flex-1 flex-auto gap-5 justify-center px-4 py-5 font-medium text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:flex-wrap max-md:max-w-full">
//           <div className="my-auto">Select Date</div>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e7d5433322fbb7841f200e334134041649869b0c894e0683390ec0cd54e294?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
//             className="shrink-0 w-5 aspect-square"
//           />
//         </div>
//       </div>
//       <div className="flex gap-2 self-start mt-4 font-medium text-white">
//         <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
//         <div>Use Vesting?</div>
//       </div>
//       <div className="justify-center self-start px-9 py-5 mt-16 text-xs font-bold whitespace-nowrap bg-zinc-700 rounded-[50px] text-neutral-500 max-md:px-5 max-md:mt-10">
//         Next
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Degans1


import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Degans1 = () => {
  return (
    <div className='flex flex-row gap-3'>
      <Sidebar />

      <div>

        <div>
          <Header />
        </div>
      <div className="flex flex-col px-11 py-12 text-base leading-4 w-full border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
        <div className="text-2xl text-white max-md:max-w-full">
          Current Presales
        </div>
        
        <div className="flex gap-5 mt-11 max-w-full text-xl leading-4 text-white w-[569px] max-md:flex-wrap max-md:mt-10">
          <div className="flex-auto">Token or LP Token Address</div>
          <div>Title</div>
        </div>
        <div className="flex gap-5 mt-3.5 font-medium text-white max-md:flex-wrap max-md:max-w-full">
          <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-[50%] max-md:pr-5 max-md:max-w-full">
            <input type="text" className=" outline-none bg-transparent text-white" placeholder="Enter token or LP token address" />
          </div>
          <div className="grow justify-center items-start px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
            <input type="text" className="w-fit outline-none bg-transparent text-white" placeholder="Ex: My Lock" />
          </div>
        </div>
        <div className="flex gap-2 self-start mt-4 font-medium text-white">
          <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
          <div className="flex-auto my-auto">Use another owner?</div>
        </div>
        <div className="flex gap-5 mt-10 text-xl leading-4 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="my-auto">Amount</div>
          <div className="my-auto max-md:max-w-full">Lock Until (UTC time)</div>
        </div>
        <div className="flex gap-5 mt-3 max-md:flex-wrap">
          <div className="flex flex-1 flex-auto gap-5 justify-between px-4 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:flex-wrap max-md:max-w-full">
            <input type="text" className="w-full outline-none bg-transparent text-white" placeholder="Enter amount" />
            <div className="font-bold text-purple-600">MAX</div>
          </div>
          <div className="flex flex-1 flex-auto gap-5  px-4 py-5 font-medium text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto justify-start flex">Select Date</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1e7d5433322fbb7841f200e334134041649869b0c894e0683390ec0cd54e294?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-5 justify-end flex aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-2 self-start mt-4 font-medium text-white">
          <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
          <div>Use Vesting?</div>
        </div>
        <a href='' className="justify-center self-start px-9 py-5 mt-16 text-xs font-bold whitespace-nowrap bg-zinc-700 rounded-[50px] text-neutral-500 max-md:px-5 max-md:mt-10">
          Next
        </a>
      </div>
      </div>
    </div>
  );
};

export default Degans1;
