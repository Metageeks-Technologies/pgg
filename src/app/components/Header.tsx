'use client'
import React from 'react';
import { useState } from 'react';

const Header = () => {
  const [showGamesMenu, setShowGamesMenu] = useState(false);
  const [showLaunchpadMenu, setShowLaunchpadMenu] = useState(false);

  return (
    <div >
      <div className="flex gap-5 justify-between items-start px-5 w-full  p-10 md:after:hidden">
        <a href="/"><button>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 max-w-full aspect-[3.57] w-[202px] md:flex hidden"
          alt="Header Image"
        />
        </button></a>
        <div className='flex gap-2 justify-start md:hidden'>
        <a href="/"><button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a922751de765628a0b781d7eed3988a7a8198b0aed453cafdd1ab908f5521c98?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-10 border border-solid aspect-square border-white border-opacity-10 "
        />
        </button></a>
        </div>
        <div className=" gap-5 justify-between items-start mt-5 text-base text-white whitespace-nowra md:flex hidden">
          
          <a href="/home" className="cursor-pointer hover:text-white hover:font-bold">Home</a>

          
          <a href="/about" className="cursor-pointer hover:text-white hover:font-bold">About</a>

          
          <div className="relative">
            <div
              className="flex gap-1 cursor-pointer hover:text-white hover:font-bold"
              onClick={() => setShowGamesMenu(!showGamesMenu)}
            >
              Games
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0c40eadb315315185d0358c4228ec031e6d6ec40a43e48112678911a6da8cd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 my-auto w-3.5 aspect-square"
              />
            </div>
            {showGamesMenu && (
              <div className="absolute z-10 mt-2 w-32 bg-black  shadow-lg border  border-lime-400">
                
                <div className="py-1">
                  <a href="/games/action" className="block px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">Action</a>
                  <a href="/games/adventure" className="block px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">Adventure</a>
                  
                </div>
              </div>
            )}

          </div>

          
          <div className="relative">
            <div
              className="flex gap-1 cursor-pointer hover:text-white hover:font-bold"
              onClick={() => setShowLaunchpadMenu(!showLaunchpadMenu)}
            >
              Launchpad
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c0c40eadb315315185d0358c4228ec031e6d6ec40a43e48112678911a6da8cd?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 my-auto w-3.5 aspect-square"
              />
            </div>
            {showLaunchpadMenu && (
              <div className="absolute z-10 mt-2 w-24 bg-black  shadow-lg border  border-lime-400 justify-normal right-0">
                
                <div className="py-1">
                  <a href="/launchpad/1" className="block px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">Launchpad 1</a>
                  <a href="/launchpad/2" className="block px-4 py-2 text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300">Launchpad 2</a>
                  
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3.5 text-xs font-bold text-lime-300  md:text-">
          <a href='/' className="justify-center flex  px-5 py-3 sm:py-5 border border-lime-300 border-solid max-md:px-3 hover:bg-lime-400 cursor-pointer hover:text-black">
            Alpha Mode
          </a>
          <a href='/' className="justify-center px-5 py-3 sm:py-5 border border-lime-300 border-solid max-md:px-5 hover:bg-lime-400 cursor-pointer hover:text-black">
            Degan Mode
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;