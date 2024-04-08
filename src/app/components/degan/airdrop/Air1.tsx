'use client'
import React, { useState,ChangeEvent } from 'react';

const Air1 = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [inputTaken, setInputTaken] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTokenAddress(event.target.value);
    setInputTaken(event.target.value !== ''); // Check if input is taken
  };

  return (
    <div className='p-8'>
      <div className="text-3xl myfont text-white max-w-[285px]">Create New Airdrop</div>
      <div className="flex flex-col myfont px-11 py-11 text-xs mt-10 font-bold border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5">
        <div className="text-xl leading-4 text-white max-md:max-w-full">
          Token or LP Token Address
        </div>
        <input
          type="text"
          className="justify-center items-start px-4 py-6 mt-3.5 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full"
          placeholder="Enter token or LP token address"
          value={tokenAddress}
          onChange={handleInputChange}
        />
        <div className="mt-4 text-purple-600 max-md:max-w-full">
          Create airdrop fee: 0.1 ETH
        </div>
        <a href='' className={`justify-center self-start px-9 py-5 mt-8 whitespace-nowrap ${inputTaken ? 'bg-purple-600' : 'bg-zinc-700'} rounded-[50px] text-white max-md:px-5`}>
          Next
        </a>
      </div>
    </div>
  );
};

export default Air1;
