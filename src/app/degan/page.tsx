import React from 'react'
import Sidebar from '../components/degan/Sidebar'
import Header from '../components/degan/Header'
import Crypto from '../components/degan/Crypto'
import Bloacks from '../components/degan/Bloacks'
import Coins from '../components/degan/Coins'
import Token from '../components/degan/Token'
import Token2 from '../components/degan/Token2'

const page = () => {
  return (
    <div className='bg-black'>
    <div className='flex flex-row justify-center '>
     
      <Sidebar />
      <div>
       <Header />
       <Crypto />
       
        <div className="sm:text-5xl text-3xl myfont sm:flex sm:justify-center mt-6 flex text-center justify-center sm:mt-12 sm:p-4 text-white ">
            The Launchpad Protocol for everyone!
          </div>
        <div className="text-base flex px-4 myfont  sm:flex text-center justify-center sm:justify-center items-center text-zinc-700">
          Harmony Launcher helps everyone to create their own tokens and token sales
          in few seconds.
          <br />
          Tokens created on Harmony Launcher will be verified and published on
          explorer websites.
        </div>
        <div className="sm:flex sm:justify-center  flex justify-center gap-3 px-10 py-6  text-xs font-bold text-white">
          <a href='' className=" sm:px-9 sm:py-5 px-7 py-5 text-center justify-center flex bg-purple-600 rounded-[50px]">
            Create now
          </a>
          <a href='' className="justify-center  sm:py-5 px-7 py-5 bg-zinc-900 rounded-[50px]">
            Learn More
          </a>
        </div>
       
        <Bloacks />
        <div className="text-5xl text-white justify-start myfont p-4 sm:p-8">Coins</div>
        <Coins />
        <div className='sm:flex hidden justify-center p-4'>
          <img src="/table2.png" alt=""  className='w-full p-2 '/>
        </div>

        <div className='sm:hidden flex justify-center p-2'>
          <img src="/tablesm.png" alt=""  className='w-full p-2 '/>
        </div>

        <div className='sm:justify-start text-white myfont mt-16 text-center justify-center flex myfont p-4 sm:p-8 text-3xl'>
          A Suite of Tools for Token Sales.
        </div>
        <div className="text-base text-center sm:text-left justify-center sm:px-8 px-4 text-zinc-700">
          A suite of tools were built to help you create your own tokens and
          launchpads in a fast, simple <br />and cheap way, with no prior code knowledge
          required and 100% decentralized!
          
        </div>
        <Token />

        <div className='hidden mt-10 p-4 sm:flex justify-center w-full sm:flex-row sm:gap-28'>
          {/* 1sthalf */}
          <div>
            <div className="flex flex-col text-xl w-800px text-zinc-600 max-md:mt-10">
              <div className="text-2xl myfont text-purple-600">How it Works ?</div>
              <div className="mt-7 myfont text-5xl text-white">from idea to launch</div>
              <div className="flex myfont gap-5 mt-14 text-purple-500 max-md:mt-10">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a81ba8f187b0e677a729a1d73c8fb8ca14cb177fc0f4408ae6aad21c2eb9cbdd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
            </div>
          </div>

          {/* 2ndhalf */}
          <div>
          <img src="/frame.png" alt=""  className='w-full p-2 '/>
          </div>
        </div>

        <div className='sm:hidden mt-10 flex flex-col justify-center p-4'>
          {/* 1sthalfsm */}
          <div>
            <img src="/framesm.png" alt=""  className='w-full p-2 '/>
          </div>
          {/* 2ndhalfsm */}
          <div>
          <div className="flex flex-col text-xl w-800px text-zinc-600 max-md:mt-10">
              <div className="text-2xl myfont text-purple-600">How it Works ?</div>
              <div className="mt-7 myfont text-5xl text-white">from idea to launch</div>
              <div className="flex myfont gap-5 mt-14 text-purple-500 max-md:mt-10">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a81ba8f187b0e677a729a1d73c8fb8ca14cb177fc0f4408ae6aad21c2eb9cbdd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
              <div className="flex gap-5 mt-3">
                <div className="flex-auto myfont my-auto">from idea to launch</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/581fb55048399e2b045154365be48cd962c8c4b33ebf3d4e31cf4a407829d8a0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
              <img src="/vector.png" alt="" className=' mt-3'/>
            </div>
          </div>
        </div>

        <div className='sm:justify-start mt-16 text-white justify-center flex p-4 myfont sm:p-8 text-3xl'>
          A Growing Protocol Ecosystem
        </div>
        <div className="text-base text-center sm:text-left justify-center sm:px-8 px-4 text-zinc-700">
          A suite of tools were built to help you create your own tokens and
          launchpads in a fast, simple <br />and cheap way, with no prior code knowledge
          required and 100% decentralized!
          
        </div>

        <Token2 />
      </div>
      
      

    </div>
    <div>
     <div className='sm:justify-start p-2 text-white' style={{backgroundImage: '/degansm', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
      <img src="/degansm" alt="" />
     </div>
     </div>
    </div>
    
    
  )
}

export default page
