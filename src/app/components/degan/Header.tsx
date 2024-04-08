import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex sm:gap-96 justify-between sm:justify-between w-[auto] p-8 max-md:flex-wrap max-md:max-w-full">
        <div className="hidden sm:flex gap-5  max-md:flex-wrap">
          <div className=" flex-auto gap-2.5 hidden sm:flex justify-start px-6 py-4 text-xs w-[350px] whitespace-nowrap bg-zinc-900 rounded-[50px] text-neutral-500 max-md:px-5">
            
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6875f4d7feb552f4fdbb83a80199fc407a3e2fc51de5233c760f8e961589af4?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-6"
            />
            <input
              type="text"
              placeholder="Search...."
              className="bg-zinc-900 text-white placeholder-neutral-500 px-3 py-1 rounded-lg outline-none border-none"
            />
          </div>
        </div>
        <div className='flex justify-start gap-3 sm:hidden'>
        <img src="/degansm.png" alt="" 
            className=' flex sm:hidden w-full h-full justify-start'
            />
            <img src="/smdp.png" alt="" 
            className=' flex sm:hidden w-full h-full justify-start'
            />
        </div>
        <div className="flex gap-3 justify-end align-end  text-xs font-bold text-white max-md:flex-wrap">
          <a href='' className="justify-center hidden sm:flex px-9 py-5 bg-zinc-900 rounded-[50px] max-md:px-5">
            BSC Mainnet
          </a>
          <div className=" gap-2.5 hidden sm:flex  px-9 py-4 whitespace-nowrap bg-zinc-900 rounded-[50px] max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42ee1a28bdc775c654e503c3603d044d940db5d563370d7790d07e677fdb8243?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-6 aspect-square"
            />
            <a href='' className="my-auto">Harmony.com</a>
          </div>
          
          <a href='' className="sm:justify-center p-4 flex justify-end sm:flex sm:px-9 sm:py-5 whitespace-nowrap bg-purple-600 rounded-[50px] max-md:px-5  ">
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
