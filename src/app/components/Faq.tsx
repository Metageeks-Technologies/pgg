'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Faq = () => {
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
      <div className="p-8">
        {isMobile ? <Mobilefaq /> : <Desktopfaq />}
      </div>
    </div>
  );
}

const Desktopfaq = () => {
  return (
    <div>
       <div>
      <div className="flex mt-56 justify-center items-center">
        <div className="text-5xl text-bold leading-[80px] max-md:mt-10">
         <h1> FAQ</h1>
        </div>
      </div>

      <div className="mt-5 text-xs text-center text-white text-opacity-30 w-[502px] max-md:max-w-full mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
        accumsan in nisl nisi.
      </div>

      <div>
        <div className="flex gap-5 p-4 mt-9 w-full text-sm text-center text-white leading-[79.94px] max-w-[1500px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex  flex-auto gap-5 justify-center px-5 py-5 border border-solid border-white border-opacity-10 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto"><h1>What makes Alpha Mode unique?</h1></div>
            <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
            />
            </button>
          </div>
          <div className="flex  flex-auto gap-5 justify-center px-5 py-5 border border-solid border-white border-opacity-10 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto">
              <h1>Can anyone launch a project in Degen Mode?</h1>
            </div>
            <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
            />
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-5 p-4 mt-4 w-full text-sm text-white max-w-[1500px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex  flex-auto gap-5 justify-center px-5 py-5 text-center border border-solid border-white border-opacity-10 leading-[571%] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto max-md:max-w-full">
             <h1> What types of projects can apply for Alpha Mode?</h1>
            </div>
            <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
            />
            </button>
          </div>
          <div className="flex  flex-auto gap-5 justify-center px-5 py-5 text-center border border-solid border-white border-opacity-10 leading-[571%] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="flex-auto my-auto max-md:max-w-full">
             <h1> How does TokenLaunch.pro support projects in Degen Mode?</h1>
            </div>
            <button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
            />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const Mobilefaq = () => {
  return (
    <div>
      <div className="self-center mt-10 text-2xl leading-10 text-center text-white">
        <h1>FAQ</h1>
      </div>
      <div className="mt-3.5 text-xs text-center text-white text-opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
        accumsan in nisl nisi.
      </div>
      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-10 max-w-[354px]">
        <div className="my-auto w-[243px]">
         <h1> What makes alpha mode unique?</h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-10 max-w-[354px]">
        <div className="my-auto w-[243px]">
         <h1> Can anyone launch a project in Degan Mode?</h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-10 max-w-[354px]">
        <div className="my-auto w-[243px]">
         <h1> What types of project can apply for Alpha Mode?</h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-10 max-w-[354px]">
        <div className="my-auto w-[243px]">
         <h1>How deos TokentLaunch.pro support projects in Degan Mode? </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>
    </div>
  );
}

export default Faq;