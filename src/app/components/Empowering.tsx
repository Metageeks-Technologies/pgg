'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Empowering = () => {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="p-8">
        {isMobile ? <Mobileempowering /> : <Desktopempowering />}
      </div>
    </div>
  );
}

const Desktopempowering = () => {
  return (
    <div>
       <div >
      <div className="mt-1.5  w-full max-w-[1500px] max-md:max-w-full p-8">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 mt-4 text-xs max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl  leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
             <h1> Empowering <span className="text-violet-600"> <br />Blockchain </span> <br />
              Innovations</h1>
            </div>
            <div className="mt-11 text-white text-opacity-30 max-md:mt-10 max-md:max-w-full">
              Choose Your Path: Curated project launches or community-powered
              sales
            </div>
            <div className="flex gap-5 mt-16 text-white max-md:flex-wrap max-md:mt-10">
              <a href="/launchpad" className="flex items-center justify-center px-14 py-5 font-bold border border-solid border-white border-opacity-10 max-md:px-5 bg-purple-700">
                <button>Lunchpad</button>
              </a>
              <a href="/find-gems" className="flex items-center justify-center px-14 py-5 font-bold border border-solid border-white border-opacity-10 max-md:px-5 bg-purple-700">
                <button>Find the Gems</button>
              </a>
            </div>

          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-px items-start self-end mt-64 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f031270ee0f3a6582eab7f445e0df8bdb3888fe46dd21bd9b5e9ac7fe299efe?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-start aspect-square fill-violet-600 w-[13px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47f2a210e8b938664c05d638b8033e03f7bf3e7a3127267c4099f0b8ffa35ab5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-end mt-36 aspect-square fill-violet-600 w-[34px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              {/* <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d97fd6f6b26871bea2bacadbbd91b30be494058199bbcb782bcacd7883e9ac91?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="w-full aspect-[1.02] max-md:max-w-full"
              /> */}
              <img src="/rocket.png" alt="" />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fc413ed0fe451f5df7a10b458fb52ca6e1b69e9985e3ae42d832a776009253?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="self-center mt-1.5 ml-16 aspect-square fill-violet-600 w-[9px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

const Mobileempowering = () => {
  return (
    <div>
      <div className="mt-14 text-2xl leading-10 text-center text-white">
       <h1> Empowering <span className="text-violet-600">Blockchain </span>Innovations </h1>
      </div>

      <div className="mt-7 w-80 text-xs text-center  text-white text-opacity-30">
        Choose Your Path: Curated project launches or community-powered sales
      </div>

      <div className="flex gap-4 mt-7 text-xs text-white">
        <div className="justify-center px-10 py-3.5 whitespace-nowrap ml-4 bg-violet-600 w-[40%]">
         <h1> Lunchpad </h1>
        </div>
        <div className="justify-center px-10 py-4 font-bold border border-solid border-white border-opacity-10">
          Find the Gems
        </div>
      </div>

      <div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6700d527d9f9e3bf2c5040f5783e4e9ed88f36155f84c38b142157ad8ca70309?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="mt-2.5 w-full max-w-xs aspect-square ml-4"
        />
      </div>
    </div>
  );
}

export default Empowering;