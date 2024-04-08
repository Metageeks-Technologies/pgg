'use client'
import React from 'react'
import { useState } from 'react';
import Pussytoken from './Pussytoken';

const Airdroplist = () => {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleOptionHover = (option: string) => {
    setHoveredOption(option);
  };

  const handleOptionLeave = () => {
    setHoveredOption(null);
  };
  return (
    <div className='flex flex-col p-8'>
      <div className="mt-9 myfont text-3xl text-white max-md:max-w-full">Airdrop</div>

      {/* 2nd */}
      <div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow justify-center items-center px-16 py-10 w-full border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-base leading-4 text-white">
                    AIRDROP LAUNCHED
                  </div>
                  <div className="self-center mt-3 text-4xl font-bold leading-4 text-center text-purple-600">
                    30
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex grow justify-center items-center px-16 py-10 w-full border-solid bg-zinc-900 border-[6px] border-zinc-700 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col">
                  <div className="text-base leading-4 text-white">
                    PARTICIPANTS IN ALL-TIME
                  </div>
                  <div className="self-center mt-3 text-4xl font-bold leading-4 text-center text-purple-600">
                    284
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


          {/* 3rd */}
          <div>
            <div className="flex gap-5 cursor-pointer items-start self-start mt-12 text-base text-white max-md:mt-10">
              <div
                className={`flex flex-col self-stretch font-bold text-purple-600 ${hoveredOption === 'All' ? 'hovered' : ''}`}
                onMouseEnter={() => handleOptionHover('All')}
                onMouseLeave={handleOptionLeave}
              >
                <div>All Airdrops</div>
                {hoveredOption === 'All' && (
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="self-center mt-3.5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
                  />
                )}
              </div>
              <div
                className= {`hoverable ${hoveredOption === 'My' ? 'hovered' : ''}`}
                onMouseEnter={() => handleOptionHover('My')}
                onMouseLeave={handleOptionLeave}
              >
              <div className='hover:text-purple-600 font-bold'> My Airdrops</div>
                {hoveredOption === 'My' && (
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="self-center mt-3.5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
                  />
                )}
              </div>
              <div
                className={`flex-auto hoverable ${hoveredOption === 'Created' ? 'hovered' : ''}`}
                onMouseEnter={() => handleOptionHover('Created')}
                onMouseLeave={handleOptionLeave}
              >
              <div className='hover:text-purple-600 font-bold'> Created By You</div>
                {hoveredOption === 'Created' && (
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/037c621290b83f7e39b9c91be56f0cb8bb26cfe883ec3cfb7898e0272a01f35c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="self-center mt-3.5 w-3 border-2 border-purple-600 border-solid aspect-[5.88] stroke-[2px] stroke-purple-600"
                  />
                )}
              </div>
            </div>
          </div>

          {/* 4th */}
          <div>
            <Pussytoken />
            <Pussytoken />
            <Pussytoken />
          </div>


      </div>
    </div>
  )
}

export default Airdroplist
