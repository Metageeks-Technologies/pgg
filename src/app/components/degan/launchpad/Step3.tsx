import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const Step3 = () => {
  return (
    <div className='flex flex-row gap-3'>
      <Sidebar />
      

      <div>
      <div>
        <Header />
      </div>
      <div className='flex flex-row  px-5 py-6 border-solid bg-zinc-900 border-[6px] w-full border-zinc-700 max-w-full max-h-full rounded-[30px]'>

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
          <img src="/vectorstand.png" alt=""  className='px-8'/>
        </div>
        <div>
        <div className="flex flex-col myfont grow mt-4 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-xl leading-4 text-white">Logo URL</div>
              <div className="justify-center items-start px-3.5 py-6 mt-3 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-xl leading-4 text-white">Website</div>
              <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
            </div>
          </div>
          <div className="mt-4 text-xs leading-4 text-purple-600 max-md:max-w-full">
            Softcap must be &gt; = 25% of Hardcap!
          </div>
          <div className="flex gap-5 mt-11 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-xl leading-4 text-white">Facebook</div>
              <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
            </div>
            <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
              <div className="text-xl leading-4 text-white">Twitter</div>
              <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-11 max-w-full text-xl leading-4 text-white whitespace-nowrap w-[438px] max-md:mt-10">
            <div>Github</div>
            <div>Telegram</div>
          </div>
          <div className="flex gap-5 mt-3 max-md:flex-wrap">
            <div className="flex  flex-auto gap-5 px-4 py-5 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700">
              <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-5 my-auto aspect-square flex justify-end"
              />
            </div>
            <div className="flex  flex-auto gap-5 px-4 py-5 rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700">
              <div className="flex-auto text-base font-medium leading-4 text-white">
                <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97ac9f4a10ea1391d4f6c668cd138f04e2dd2019a40a1fe4b07b0ebac8528cfd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 my-auto w-5 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d8a5ae730faae26c11ddc078747884e00d15ee36808d24ff97d651b3e73288?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="mt-11 text-xl leading-4 text-white max-md:mt-10 max-md:max-w-full">
            Reddit
          </div>
          <div className="justify-center items-start px-3.5 py-6 mt-4 text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 max-md:pr-5 max-md:max-w-full">
            <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
          </div>
        </div>
        <div className="justify-start myfont flex mt-11 text-xl leading-4 text-white max-md:mt-10">
          Reddit
        </div>
        <div className="items-start myfont  px-3.5 pt-6 pb-28 mt-4 max-w-full text-base font-medium leading-4 text-white rounded-2xl border-4 border-solid bg-zinc-900 border-zinc-700 w-full max-md:pr-5">
          <input type="text" placeholder="Ex: DeganMoon" className="bg-zinc-900 text-white placeholder-zinc-700 px-3 py-1 rounded-lg outline-none border-none" />
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Step3;
