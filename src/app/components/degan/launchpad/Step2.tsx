import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Step2 = () => {
  return (
    <div className='flex flex-row gap-3'>
      <Sidebar />
      
      <div>
      <div>
        <Header />
      </div>
      <div className='flex flex-row px-5 py-6 border-solid bg-zinc-900 border-[6px] w-full border-zinc-700 max-w-full max-h-full rounded-[30px]'>
        <div className='flex w-[40%]'>
        <div className="flex flex-col grow shrink-0 basis-0 w-[50%]">
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
        <div className="justify-center items-center px-4 w-10 h-10 text-sm bg-purple-600 font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid  border-slate-600 stroke-[1px]">
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
          <img src="/vectorstand.png" alt="" className='px-8'/>
        </div>

        <div>
      <div className="flex flex-col myfont grow mt-4 text-xl leading-4 text-white max-md:mt-10 max-md:max-w-full">
      <div className="max-md:max-w-full">Presale rate</div>
      {/* <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full">
        Ex: DeganMoon
      </div> */}
      <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
      <div className="mt-4 text-s leading-4 text-purple-600 max-md:max-w-full">
        if i spend 1 BNB how many tokens will i receive?
      </div>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">Whitelist</div>
      <div className="flex gap-5 self-start mt-4 text-base font-medium leading-4 text-white whitespace-nowrap">
        <div className="flex flex-1 gap-2">
          <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
          <div className="my-auto">Disable</div>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
          <div className="my-auto">Enable</div>
        </div>
      </div>
      <div className="flex gap-5 mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">softcap (BNB)</div>
        <div className="flex-auto">HardCap (BNB)</div>
      </div>
      <div className="flex gap-5 mt-3 text-base font-medium leading-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
          </div>
      <div className="mt-4 text-xs leading-4 text-purple-600 max-md:max-w-full">
        Softcap must be &gt; = 25% of Hardcap!
      </div>
      <div className="flex gap-5 mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">Minimum buy (BNB)</div>
        <div className="flex-auto">Maximum Buy (BNB)</div>
      </div>
      <div className="flex gap-5 mt-3 text-base font-medium leading-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
          </div>
    </div>

    <div className="mt-11 myfont max-w-full w-[636px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-xl leading-4 text-white max-md:mt-6">
            <div>Refund type</div>
            <div className="flex gap-5 px-4 py-5 mt-3 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700">
              <div className="flex-auto text-zinc-700">Ex: DeganMoon</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            <div className="mt-10 max-md:mt-10">liquidity (%)</div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-6">
            <div className="text-xl leading-4 text-white">Router</div>
            <div className="flex gap-5 px-4 py-5 mt-4 w-full rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700">
              <div className="flex-auto text-base text-zinc-700 font-medium leading-4 ">
                Ex: DeganMoon
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d8a5ae730faae26c11ddc078747884e00d15ee36808d24ff97d651b3e73288?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
            <div className="mt-11 text-xl leading-4 text-white max-md:mt-10">
              Listing rate
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex gap-5 mt-3 text-base myfont font-medium leading-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
          </div>

    <div className="flex flex-col justify-center items-start py-7 pr-20 pl-3.5 mt-12 max-w-full text-base font-medium leading-6 text-purple-500 rounded-2xl bg-purple-600 bg-opacity-10 w-[636px] max-md:pr-5 max-md:mt-10">
      <div className="max-md:max-w-full">
        Enter the precentage of raised funds that should be allocated to
        Liquidity on (Min 51% Max 100%)
      </div>
      <div className="mt-9 max-md:max-w-full">
        if i spend 1 BNB on how many toknes will i receive? Usually this amount
        is lower than presale rate to allow for a higher listing prices on
      </div>
    </div>

    <div className="mt-10 myfont mr-36 text-3xl leading-4 text-white max-md:mr-2.5 max-md:max-w-full">
      Select start time & end time (UTC)
    </div>


    <div className="flex myfont text-s gap-5 mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">Minimum buy (BNB)</div>
        <div className="flex-auto">Maximum Buy (BNB)</div>
      </div>
      <div className="flex gap-5 mt-3 myfont text-base font-medium leading-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
            <div className="grow justify-center items-start px-3.5 py-6 rounded-2xl border-4 border-solid text-zinc-700 bg-zinc-900 border-zinc-700 w-fit max-md:pr-5">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
            </div>
          </div>

      <div className="max-md:max-w-full myfont mt-8">Liquidity lockup (minutes)</div>
      <div className="justify-center myfont items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full">
            <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
          </div>

      <div className="flex gap-2 myfont mt-3 text-base font-medium leading-4 text-white">
        <div className="shrink-0 bg-zinc-700 h-[22px] rounded-[40px] w-[22px]" />
        <div className="flex-auto">Using Vesting Contributor</div>
       </div>


       <div className="flex gap-3 myfont self-center mt-11 text-xs font-bold text-white whitespace-nowrap max-md:mt-10">
        <a href='' className="justify-center px-9 py-5 bg-zinc-700 rounded-[50px] max-md:px-5">
          Back
        </a>
        <a href='' className="justify-center px-9 py-5 bg-purple-600 rounded-[50px] max-md:px-5">
          Next
        </a>
      </div>
      </div>

        </div>
      </div>
    </div>
  )
}

export default Step2
