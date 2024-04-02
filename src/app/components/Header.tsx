"use client";
import React from "react";
import { useState } from "react";

const Header = () => {
  const [showGamesMenu, setShowGamesMenu] = useState(false);
  const [showLaunchpadMenu, setShowLaunchpadMenu] = useState(false);

  const handleShowGamesMenu = () => {
    setShowLaunchpadMenu(false);
    setShowGamesMenu(!showGamesMenu);
  };
  const handleShowLaunchpadMenu = () => {
    setShowGamesMenu(false);
    setShowLaunchpadMenu(!showLaunchpadMenu);
  };

  return (
    <div className="container p-0">
      <div className="flex gap-5 sm:gap-5 sm:justify-between items-center sm:px-8 max-md:py-5 max-md:px-5 w-full p-10 md:after:hidden">
        <a href="/">
          <span>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd032a0418051cd4d5cdb003a4d6da371d34a7b1396b7000a1f3f62ee14ec748?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
              className="shrink-0 max-w-full aspect-[3.57] w-[202px] md:flex hidden"
              alt="Header Image"
            />
          </span>
        </a>
        <div className="flex -ms-4 justify-start items-start px-0 sm:hidden">
          <a href="/">
            <span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a922751de765628a0b781d7eed3988a7a8198b0aed453cafdd1ab908f5521c98?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="shrink-0 w-10 border-[2px] border-solid aspect-square border-white border-opacity-10 "
              />
            </span>
          </a>
        </div>
        <div className=" gap-5 justify-between items-center text-base  text-white whitespace-nowra md:flex hidden">
          <a
            href="/home"
            className="cursor-pointer hover:text-white font-bold hover:font-bold"
          >
            Home
          </a>

          <a
            href="/about"
            className="cursor-pointer text-gray-500 hover:text-white hover:font-bold"
          >
            About
          </a>

          <div className="relative">
            <div
              className="flex gap-1 cursor-pointer text-gray-500 hover:text-white group hover:font-bold"
              onClick={handleShowGamesMenu}
            >
              Games
              <div className="shrink-0 opacity-500 my-auto w-3.5 aspect-square">
                <svg
                  className="text-gray-500 group-hover:text-white group-hover:font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="m7.216 9.237 3.75-3.868c.235-.241.093-.702-.215-.702H3.249c-.308 0-.45.461-.216.702l3.75 3.868a.29.29 0 0 0 .433 0Z"
                  />
                </svg>
              </div>
            </div>
            {showGamesMenu && (
              <div className="absolute z-10 mt-2 w-32 bg-black  shadow-lg border  border-lime-400">
                <div className="">
                  <a
                    href="/games/action"
                    className="block px-4 py-2 text-sm  transition-all duration-200 text-white hover:text-black hover:font-bold hover:bg-lime-300"
                  >
                    Action
                  </a>
                  <a
                    href="/games/adventure"
                    className="block px-4 py-2 text-sm transition-all duration-200 text-white hover:text-black hover:font-bold hover:bg-lime-300"
                  >
                    Adventure
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div
              className="flex gap-1 cursor-pointer text-gray-500 hover:text-white group hover:font-bold"
              onClick={handleShowLaunchpadMenu}
            >
              Launchpad
              <div className="shrink-0 opacity-500 my-auto w-3.5 aspect-square">
                <svg
                  className="text-gray-500 group-hover:text-white group-hover:font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  fill="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="m7.216 9.237 3.75-3.868c.235-.241.093-.702-.215-.702H3.249c-.308 0-.45.461-.216.702l3.75 3.868a.29.29 0 0 0 .433 0Z"
                  />
                </svg>
              </div>
            </div>
            {showLaunchpadMenu && (
              <div className="absolute z-10 mt-2 w-fit bg-black  shadow-lg border  border-lime-400 justify-normal right-0">
                <div className="">
                  <a
                    href="/launchpad/1"
                    className="block px-4 py-2 text-nowrap text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300"
                  >
                    Launchpad 1
                  </a>
                  <a
                    href="/launchpad/2"
                    className="block px-4 py-2 text-nowrap text-sm text-white hover:text-black hover:font-bold hover:bg-lime-300"
                  >
                    Launchpad 2
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 px-6 max-md:px-0 max-md:w-full justify-end text-xs font-bold text-lime-300  ">
          <a
            href="/"
            className="justify-center max-md:text-[8px] flex  px-5 py-3 sm:py-5 border border-lime-300 border-solid max-md:px-3 hover:bg-lime-400 cursor-pointer hover:text-black"
          >
            Alpha Mode
          </a>
          <a
            href="/"
            className="justify-center px-5 py-3 max-md:text-[8px] sm:py-5 border border-lime-300 border-solid max-md:px-5 hover:bg-lime-400 cursor-pointer hover:text-black"
          >
            Degan Mode
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
