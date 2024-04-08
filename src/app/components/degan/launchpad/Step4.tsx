import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

const Step4 = () => {
  return (
    <div className='flex flex-row gap-3'>
      <Sidebar />
      <div>
        <div>
          <Header />
        </div>
      <div className='flex flex-row  px-5 py-6 overflow-hidden border-solid bg-zinc-900 border-[6px] w-full border-zinc-700 max-w-full max-h-full rounded-[30px]'>
        
        <div className='flex w-[70%]'>
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
        <div className="justify-center items-center px-4 w-10 h-10 text-sm bg-purple-600 font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid  border-slate-600 stroke-[1px]">
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
        <div className="justify-center items-center px-4 w-10 h-10 text-sm bg-purple-600 font-medium leading-7 text-center text-white whitespace-nowrap rounded-full border border-solid  border-slate-600 stroke-[1px]">
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
          <img src="/vectorstand.png" alt=""  className='px-8'/>
        </div>
        
        <div>
        <div className="flex myfont flex-col gap-7 ml-6 grow mt-4 overflow-hidden text-xl leading-4 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-white">Total token</div>
            <div className="flex-auto text-right text-purple-500">
              2739720 MOONF
            </div>
          </div>
          <div className="max-w-0 min-h-0" />
          <div className="flex gap-5  text-white max-md:flex-wrap max-md:max-w-full">
            <div>Total name</div>
            <div className="flex-auto text-right">Moonforsure</div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Total Symbol</div>
            <div className="text-right">MOONF</div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Total decimals</div>
            <div className="text-right">18</div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Presale rate</div>
            <div className="flex-auto text-right">10000 MOONF</div>
          </div>
          
          <div className="flex gap-5 justify-between mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div>Softcap</div>
            <div className="text-right">100 BNB</div>
          </div>
          
          <div className="flex gap-5 justify-between mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div>Hardcap</div>
            <div className="text-right">200 BNB</div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Minimum buy</div>
            <div className="text-right">1 BNB</div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Maximum buy</div>
            <div className="text-right">5BNB</div>
          </div>
          
          <div className="flex gap-5 justify-between mt-4 text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div>Liquidity</div>
            <div className="text-right">51%</div>
          </div>
          
          <div className="flex gap-5 mt-3.5 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto">Start time</div>
            <div className="flex-auto text-right">2021-0622T00:00 (UTC)</div>
          </div>
          
          <div className="flex gap-5 mt-3.5 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto">End time</div>
            <div className="flex-auto text-right">2021-06-24T00:00 (UTC)</div>
          </div>
          
          <div className="flex gap-5 justify-between mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div>Liquidity</div>
            <div className="text-right">5 minutes</div>
          </div>
          
          <div className="flex gap-5 mt-3.5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-white">
              Liquidity lockup Time
            </div>
            <div className="flex-auto text-right text-purple-500">
              https://www.moonforsuretoken.com
            </div>
          </div>
          
          <div className="flex gap-5 mt-4 text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Description</div>
            <div className="flex-auto text-right">
              This token will go to the moon!
            </div>
          </div>
          <div className="justify-center px-3 py-4 mt-7 text-base font-medium leading-6 text-purple-600 rounded-2xl bg-purple-600 bg-opacity-10 max-md:max-w-full">
            For tokens with burns, rebase or other special transfers please ensure
            that you have a way to whitelist multiple addresses or turn off the
            special transfer events (By setting fes to 0 for example for the
            duration of the presale)
          </div>
        </div>
        <div className="flex gap-3 self-center mt-11 text-xs font-bold text-white whitespace-nowrap max-md:mt-10">
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

export default Step4
