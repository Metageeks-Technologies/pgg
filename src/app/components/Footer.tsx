'use client'
import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
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
        {isMobile ? <Mobilefooter /> : <Desktopfooter />}
      </div>
    </div>
  );
}

const Desktopfooter = () => {
  return (
    <div>
        <div className='justify-center flex mb-36'>
      <div className="flex gap-5 justify-between items-start px-5 mt-12 w-full max-w-[1400px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="self-center aspect-[3.7] w-[204px]"
          />
          <div className="flex gap-3 mt-8">
            <a href="www.instagram.com" className='cursor-pointer border hover:border-lime-300 border-solid'>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
            </a>
            
            <a href="www.twitter.com" className='cursor-pointer border hover:border-lime-300 border-solid'>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
            </a>

            <a href="www.telegram.com" className='cursor-pointer border hover:border-lime-300 border-solid'>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-2 text-sm text-white whitespace-nowrap">
        
          <div className="text-xl"><h1>Discover</h1></div>
          <a href='/' className="mt-7 cursor-pointer hover:text-white hover:font-bold">Artists</a>
          <a href='/' className="mt-8 cursor-pointer hover:text-white hover:font-bold">Collections</a>
          <a href='/' className="mt-8 cursor-pointer hover:text-white hover:font-bold">Trend</a>
        </div>
        <div className="flex flex-col mt-2 text-sm text-white whitespace-nowrap">
          <div className="text-xl"><h1>Order</h1></div>
          <a href='/' className="mt-7 cursor-pointer hover:text-white hover:font-bold">Robots</a>
          <a href='/' className="mt-8 cursor-pointer hover:text-white hover:font-bold">Arts</a>
        </div>
        <div className="flex flex-col mt-2 text-sm text-white">
          <div className="text-xl"><h1>Generate</h1></div>
          <a href='/' className="mt-7 cursor-pointer hover:text-white hover:font-bold">Robot</a>
          <a href='/' className="mt-8 cursor-pointer hover:text-white hover:font-bold">Face Potrait</a>
          <a href='/' className="mt-8 cursor-pointer hover:text-white hover:font-bold">Splicer</a>
        </div>
        <div className="flex flex-col mt-2 text-xs  ">
          <div className="text-xl"><h1>Modes</h1></div>
          <a href='/'className="justify-center px-9 py-5 mt-5 text-lime-300 border border-lime-300 border-solid max-md:px-5 cursor-pointer hover:bg-lime-400 hover:text-black">
            Alpha Mode
          </a>
          <a href='/' className="justify-center px-9 py-5 mt-3 text-lime-300 border border-lime-300 border-solid max-md:px-5 cursor-pointer hover:bg-lime-400 hover:text-black">
            Degan Mode
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

const Mobilefooter = () => {
  return (
    <div className='mb-36'>
      <div className="flex gap-5 justify-between mt-9 w-full mb-30 max-w-[353px]">
        <div className="flex flex-col px-5 my-auto text-xl text-white whitespace-nowrap">
          <h1><div>Discover</div></h1>
          <h1><div className="mt-11">Order</div></h1>
        </div>
        <div className="flex flex-col items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c26546566133f58f460088ce3a44da215bc1b65604f7d6b9e580d9fe9042056?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="border border-solid aspect-square border-white border-opacity-10 stroke-[1px] stroke-white stroke-opacity-10 w-[30px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c26546566133f58f460088ce3a44da215bc1b65604f7d6b9e580d9fe9042056?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="mt-7 border border-solid aspect-square border-white border-opacity-10 stroke-[1px] stroke-white stroke-opacity-10 w-[30px]"
          />
        </div>
      </div>

      <div className="flex gap-5 items-start mt-7 w-full max-w-[353px]">
        <div className="flex flex-col grow shrink-0 px-5 mt-2 basis-0 w-fit">
          <div className="text-xl text-white">
            <h1>Generate</h1></div>
          <div className="flex gap-3 mt-11 text-xs w-[300px] font-bold text-lime-300">
            <div className="justify-center flex px-5 py-5 border border-lime-300 border-solid">
              Alpha Mode
            </div>
            <div className="justify-center flex px-5 py-5 border border-lime-300 border-solid">
              Degan Mode
            </div>
          </div>
          <div className="flex gap-3 mt-9">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e3e5479377b2b049d8c3f7bf29b3d195ab141f0a118d2d23224066238e6f9315?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a22a979a0854a9796fa199f626cb296edd20b7e466526c940017cdb2090da28a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a9469ae338bc6b54dd070a96748325c5fdfd0419429acaed40b345523fac95d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 border border-solid aspect-square border-white border-opacity-10 w-[60px]"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c26546566133f58f460088ce3a44da215bc1b65604f7d6b9e580d9fe9042056?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 border border-solid aspect-square border-white border-opacity-10 stroke-[1px] stroke-white stroke-opacity-10 w-[30px]"
        />
      </div>
    </div>
  );
}

export default Footer;
