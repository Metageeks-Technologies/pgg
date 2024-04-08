'use client'
import React , { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Step1 = () => {

  const [currency, setCurrency] = useState('');

  const handleCurrencyHover = (currency: string) => {
    setCurrency(currency);
  };
  return (
    <div className='flex flex-row gap-3'>
      <Sidebar />
      

      {/* 1sthalf */}
      
      {/* 2ndhalf */}
      <div>
      <div>
        <Header />
      </div>

      
      <div className='flex flex-row px-5 py-6 border-solid bg-zinc-900 border-[6px] w-full border-zinc-700 max-w-full max-h-full rounded-[30px]'>
        <div className='flex w-[40%]'>
        <div className="flex flex-col grow shrink-0 basis-0 w-[50%] h-[60%]">
      <div className="flex gap-3">
        <div className="flex flex-col text-base font-bold leading-8 text-center text-white whitespace-nowrap">
          <div className="justify-center items-center px-4 w-10 h-10 text-sm bg-purple-600 font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid  border-slate-600 stroke-[1px]">
            1
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94a68f6617700d8d9d6c0f5f56a55dd3886d7a48b00f52c50c74214255263a5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="self-center w-px border border-solid aspect-[0.01] border-slate-600 fill-slate-600 stroke-[1px] stroke-slate-600"
          />
        </div>
        <div className="flex flex-col grow shrink-0 self-start mt-3 basis-0 w-fit">
          <div className="text-xl font-bold leading-4 text-white">
            Verify Token
          </div>
          <div className="mt-3.5 text-base text-zinc-700">
            Enter the token address and verify
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="justify-center items-center px-4 w-10 h-10 text-sm font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid bg-slate-600 border-slate-600 stroke-[1px]">
          2
        </div>
        <div className="flex-auto my-auto text-xl font-bold leading-4 text-white">
          DeFi Launchpad Info
        </div>
      </div>
      <div className="flex gap-5 self-start ml-5 text-base text-zinc-700 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94a68f6617700d8d9d6c0f5f56a55dd3886d7a48b00f52c50c74214255263a5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-px border border-solid aspect-[0.01] border-slate-600 fill-slate-600 stroke-[1px] stroke-slate-600"
        />
        <div className="flex-auto self-start">
          Enter the launchpad information that you want to raise , that should
          be enter all details about your presale
        </div>
      </div>
      <div className="flex gap-3">
        <div className="justify-center items-center px-4 w-10 h-10 text-sm font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid bg-slate-600 border-slate-600 stroke-[1px]">
          3
        </div>
        <div className="flex-auto my-auto text-xl font-bold leading-4 text-white">
          Add Additional Info
        </div>
      </div>
      <div className="flex gap-5 self-start ml-5 text-base text-zinc-700 max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a94a68f6617700d8d9d6c0f5f56a55dd3886d7a48b00f52c50c74214255263a5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-px border border-solid aspect-[0.01] border-slate-600 fill-slate-600 stroke-[1px] stroke-slate-600"
        />
        <div className="flex-auto self-start">Let people know who you are</div>
      </div>
      <div className="flex gap-3 self-start whitespace-nowrap">
        <div className="justify-center items-center px-4 w-10 h-10 text-sm font-medium leading-7 text-center text-white rounded-full border border-solid bg-slate-600 border-slate-600 stroke-[1px]">
          4
        </div>
        <div className="my-auto text-xl font-bold leading-4 text-white">
          Finish
        </div>
      </div>
      <div className="self-start mt-1.5 flex-auto px-12 text-base text-zinc-700">
        Review your information
      </div>
    </div>
        </div>

        <div>
          <img src="/vectorstand.png" alt="" className='px-4 h-100px' />
        </div>


        <div>
        <div className="flex flex-col myfont grow mt-4 max-md:mt-10 max-md:max-w-full">
          <div className="text-xl leading-4 text-white max-md:max-w-full">
            Token Address
          </div>
          <div className="flex gap-3 mt-3.5 text-white max-md:flex-wrap max-md:max-w-full">
              <div className="grow justify-center items-start px-3.5 py-6 text-base font-medium leading-4 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5 max-md:max-w-full">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
            <a href='' className="justify-center px-7 py-5 my-auto text-s font-bold bg-purple-500 rounded-[50px] max-md:px-5">
              Create Token
            </a>
          </div>
          <div className="flex gap-4 mt-14 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col flex-1 grow shrink-0 text-white whitespace-nowrap basis-0 w-fit">
              <div className="text-xl leading-4">Currency</div>
              <div className="flex gap-4 mt-4 text-s font-semibold leading-4">
                <div className="flex flex-col flex-1 justify-center px-12 py-5 border border-solid border-zinc-700 rounded-[50px] max-md:px-5"
                onMouseEnter={() => handleCurrencyHover('BNB')}
                onMouseLeave={() => handleCurrencyHover('')}
                >
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/386d39c1286c6fd484ecd3c85d013138d784e69d4223efddef506a6152eff6ff?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 aspect-square w-[18px]"
                    />
                    <a href=''>BNB</a>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center px-12 py-5 border border-solid border-zinc-700 rounded-[50px] max-md:px-5"
                onMouseEnter={() => handleCurrencyHover('BUSD')}
                onMouseLeave={() => handleCurrencyHover('')}
                >
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/824add94413a6a0157524a110f88f6d5de19300b2170737b38405dbf6ed43104?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 aspect-square w-[18px]"
                    />
                    <a href=''>BUSD</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 self-start text-s leading-4 basis-0 w-fit">
              <div className="self-end text-purple-600">
              Users will pay with <span className='font-bold'> {currency ? ` ${currency}` : ''} </span>for your token
              </div>
              <div className="flex gap-4 mt-5 font-semibold text-white whitespace-nowrap">
                <div className="flex flex-col flex-1 justify-center px-12 py-5 border border-solid border-zinc-700 rounded-[50px] max-md:px-5"
                onMouseEnter={() => handleCurrencyHover('USDT')}
                onMouseLeave={() => handleCurrencyHover('')}
                >
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8d3209d2a61f2501617c79c0a05e5de407fc0c5cdfaf2bb6d82075679aef940?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 aspect-square w-[18px]"
                    />
                    <a href=''>USDT</a>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-center px-12 py-5 border border-solid border-zinc-700 rounded-[50px] max-md:px-5"
                onMouseEnter={() => handleCurrencyHover('USDC')}
                onMouseLeave={() => handleCurrencyHover('')}
                >
                  <div className="flex gap-2">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5015a4d5c6f8e27ff240990b84f89c73bb9b8748a99a9df7e7862a371a906a73?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 aspect-square w-[18px]"
                    />
                    <a href=''>USDC</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-11 text-white max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col">
              <div className="text-xl leading-4">Fee Options</div>
              <a href='' className="justify-center px-5 py-6 mt-4 text-s font-semibold leading-4 border border-solid border-zinc-700 rounded-[50px]">
                <span className="font-extrabold">5%</span> 
                <span className="font-medium">USDC raised only</span>
              </a>
            </div>
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="self-center text-xl leading-4">Listing Options</div>
              <div className="flex gap-4 px-px mt-4 text-s font-semibold leading-4 max-md:flex-wrap">
                <a href='' className="justify-center px-14 py-7 whitespace-nowrap border border-solid border-zinc-700 rounded-[50px] max-md:px-5">
                  Others
                </a>
                <a href='' className="justify-center px-11 py-6 border border-solid border-zinc-700 rounded-[50px] max-md:px-5">
                  Auto Listing
                </a>
                <a href='' className="justify-center px-10 py-6 border border-solid border-zinc-700 rounded-[50px] max-md:px-5">
                  Manual listing
                </a>
              </div>
            </div>
          </div>
          <div className="mt-11 text-xl leading-4 text-white max-md:mt-10 max-md:max-w-full">
            Currency
          </div>
          <div className="flex justify-center gap-5 mt-4 text-s font-semibold leading-4 text-white max-md:flex-wrap max-md:max-w-full">
            <a href='' className="grow flex justify-center items-center px-16 py-7 border border-solid border-zinc-700 rounded-[50px] w-fit max-md:px-5">
              Disable Affiliate
            </a>
            <a href='' className="grow justify-center flex items-center px-16 py-7 border border-solid border-zinc-700 rounded-[50px] w-fit max-md:px-5">
              Enable Affiliate
            </a>
          </div>
          <a href='' className="justify-center self-start px-9 py-5 mt-11 text-s font-bold text-white whitespace-nowrap bg-purple-600 rounded-[50px] max-md:px-5 max-md:mt-10">
            Next
          </a>
        </div>
        </div>
      </div>



      </div>


      
    </div>
  )
}

export default Step1
