'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Mainlanding = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Initial check on mount
    handleResize();
    // Listen to window resize events
    window.addEventListener('resize', handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="py-2">
        {isMobile ? <Mobilemmainlanding /> : <Desktopmainlanding />}
      </div>
    </div>
  );
}

const Desktopmainlanding = () => {
  return (
    <div>
          <div>
      <div className="self-stretch  py-9 ml-0 w-full mt-24  bg-violet-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-3 items-center text-xl font-extrabold text-white max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d7636e6a11b0945993990153ea5870dd599673b93a3e19bc4fbf05fffa990c5?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[210px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9a86440f6983c15ece976a5a72e0d27b12b74d02328e44a719c3dc163c202b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch aspect-square fill-white w-[41px]"
              />
              <div className="flex-auto self-stretch my-auto">Main Landing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dbb25c297622caf04fb7c5689d95e38528aeb023f55afafee3d8b4f31badca0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[210px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-3 items-center text-xl font-extrabold text-white max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7cfa2d2615d424cc6fda7fbae13d7ca7020337dc9b35ae0ad6cf0541e6dd0fc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[210px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9a86440f6983c15ece976a5a72e0d27b12b74d02328e44a719c3dc163c202b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch aspect-square fill-white w-[41px]"
              />
              <div className="flex-auto self-stretch my-auto">Main Landing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeed889cf2ab9771671568e4f4f04a2705a98e79bd5be526570e8f3e7546e209?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[210px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

const Mobilemmainlanding = () => {
  return (
    
      <div className="flex gap-1.5 justify-center w-full items-start self-stretch py-5 mt-11 text-xs font-extrabold text-white bg-violet-600">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6c4e9dedd7e79823708f07c254531e928edf1ff715667589281b7f8ad30442d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 mt-2 max-w-full aspect-[6.67] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[124px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c0972d42a21f09656ed2df8db7f608bb1b308f4d3c506e2f3cdaefb22477710?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 aspect-[1.04] fill-white w-[25px]"
      />
      <div className="self-stretch my-auto">Main Landing</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46ff7c26a6111122c544cd2e50e6ac54baa991f02f0066045154948b5a85212f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="shrink-0 mt-2 max-w-full aspect-[6.67] fill-[linear-gradient(90deg,#FFF_0%,rgba(255,255,255,0.00)_100%)] w-[124px]"
      />
    </div>
    
  );
}

export default Mainlanding;
