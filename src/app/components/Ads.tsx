'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Ads = () => {
  const [showMenu, setShowMenu] = useState(false);
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
      <div className="p-2">
        {isMobile ? <Mobileads /> : <Desktopads />}
      </div>
    </div>
  );
}

const Desktopads = () => {
  return (
    <div>
       <div>
      <div className="mt-20 ml-20 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-3/4 max-md:ml-0 max-md:w-full">
            <div className="grow p-4 border border-solid border-white border-opacity-10 max-md:pr-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center border border-solid border-white border-opacity-10 max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3a3940a49d254098a7d7815e9ab877675d2124235eb41fc1bb5b83416308e5a1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="aspect-[1.1] w-[183px]"
                      alt="Alpha Mode"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-xs text-white max-md:mt-10">
                    <h1><div className="text-2xl">Alpha Mode</div></h1>
                    <div className="mt-4 text-white text-opacity-30">
                      Describe Alpha Mode as a selective, supportive pathway offering comprehensive services to ensure project success.
                    </div>
                    <div className="flex gap-2 justify-center px-6 py-3 mt-5 font-bold border w-[50%] border-solid border-white border-opacity-10 max-md:px-5 bg-purple-700">
                    <a href="/visit"><button>Visit Site</button></a> 
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be960850d7fdcea72d19af2f7a591a75a109f11af0672ea234ffbd4a06dadf2c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto border border-white border-solid aspect-[2.86] stroke-[1px] stroke-white w-[31px]"
                        alt="Visit Site"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/4 max-md:ml-0 max-md:w-full">
            <div className="grow p-4 border border-solid border-white border-opacity-10 max-md:pr-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow justify-center items-center border border-solid border-white border-opacity-10 max-md:mt-8">
                  <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bee1a5412c43de2bfc626dbb211c2564917bf89f62f14665cbf6cbcbd908940e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="aspect-[1.1] w-[183px]"
            />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-xs text-white max-md:mt-10">
                   <h1> <div className="text-2xl">Degan Mode</div></h1>
                    <div className="mt-4 text-white text-opacity-30">
                      Random project launched by team
                    </div>
                    <div className="flex gap-2 justify-center px-6 py-3 mt-8 w-[60%] font-bold border border-solid border-white border-opacity-10 max-md:px-5 bg-purple-700 ">
                    <a href="/visit"><button>Visit Site</button></a> 
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/be960850d7fdcea72d19af2f7a591a75a109f11af0672ea234ffbd4a06dadf2c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto border border-white border-solid aspect-[2.86] stroke-[1px] stroke-white w-[31px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const Mobileads = () => {
  return (
    <div>
      <div className="flex mt-10 flex-col p-4 border border-solid border-white border-opacity-10">
      <div className="flex flex-col justify-center border border-solid border-white border-opacity-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/696e226205b7f73720dcc2ca03135c969e69fdb4cb4642d6c3ca2a40ca77eb2e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-full aspect-[3.23]"
        />
      </div>
      <div className="mt-5 text-xl text-white">
        <h1>Alpha Mode </h1></div>
      <div className="mt-4 text-xs text-white text-opacity-30">
        Describe Alpha Mode as a selective, supportive pathway offering
        comprehensive services to ensure project success.
      </div>
      <div className="flex gap-2 justify-center px-5 py-3 mt-3 text-xs font-bold text-white bg-violet-600">
        <div>Visit Site</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/751470282e8f139c0e0902723c91f0f6956faac4b6db4ff53a49e3e0b552239b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 self-start border border-white border-solid aspect-[2.63] stroke-[0.95px] stroke-white w-[29px]"
        />
      </div>
    </div>

    <div className="flex flex-col p-4 mt-5 border border-solid border-white border-opacity-10">
      <div className="flex flex-col justify-center border border-solid border-white border-opacity-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c0e8209ba40515dd611063d35102e0f8d07fd49b2aef67aafb825f8b1d96f0c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="w-full aspect-[3.23]"
        />
      </div>
      <div className="mt-5 text-xl text-white">Degan Mode</div>
      <div className="mt-4 text-xs text-white text-opacity-30">
        Random project launched by team
      </div>
      <div className="flex gap-2 justify-center px-5 py-3 mt-5 text-xs font-bold text-white bg-violet-600">
        <div>Visit Site</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/751470282e8f139c0e0902723c91f0f6956faac4b6db4ff53a49e3e0b552239b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 self-start border border-white border-solid aspect-[2.63] stroke-[0.95px] stroke-white w-[29px]"
        />
      </div>
    </div>
    </div>
  );
}

export default Ads;
