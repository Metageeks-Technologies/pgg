'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Backers = () => {
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
        {isMobile ? <Mobilebackers /> : <Desktopbackers />}
      </div>
    </div>
  );
}

const Desktopbackers = () => {
  return (
    <div>
          <div>
      <div className="flex mt-28 justify-center items-center">
        <div className="text-5xl  leading-[80px] max-md:mt-10">
        <h1>Our <span className="text-violet-600 ">Backers</span></h1>
        </div>
      </div>

      <div className="mt-5 text-xs text-center text-white text-opacity-30 w-[502px] max-md:max-w-full mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
        accumsan in nisl nisi.
      </div>

      <div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b80cbb63e78ebbe507ad206c6bb83dbb1dfdaec468eb6b9cdb6533e7f5448c5a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="mt-9 w-full aspect-[3.85] max-w-[1500px] max-md:max-w-full"
        />
      </div>

      
    </div>
    </div>
  );
}

const Mobilebackers = () => {
  return (
    <div>
      {/* Mobile Header content */}
    </div>
  );
}

export default Backers;