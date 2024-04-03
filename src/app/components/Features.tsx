"use client";
import React from "react";
import { useState, useEffect } from "react";

const Features = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="p-2 max-md:p-0">
        {isMobile ? <Mobilefeatures /> : <Desktopfeatures />}
      </div>
    </div>
  );
};

const Desktopfeatures = () => {
  return (
    <div>
      <div>
        <div className="flex mt-10  justify-center items-center">
          <div className="text-5xl text-white  leading-[80px] max-md:mt-10">
            <h1>
              {" "}
              Our <span className="text-violet-600">Features</span>
            </h1>
          </div>
        </div>

        <div className="mt-2 text-xs text-center text-white text-opacity-30 w-[502px] max-md:max-w-full mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </div>

        <div>
          <div className=" p-2 container px-12 mt-11 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center pt-4 pb-9 cursor-pointer border-[2px] border-solid border-white hover:bg-zinc-800 hover:text-white hover:text-bold border-opacity-10 max-md:mt-5">
                  <div className="shrink-0  bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl  tracking-wide text-center text-white">
                    <h1> 01.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-12 py-16 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99c4bc0c2cb9e9c46051857cf11ea3f63b0dfda4ba47d87174d884ad999720f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1>Web3 Innovation</h1>
                      </button>
                    </div>
                    <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                      Helping web2 brands and businesses develope cutting edge
                      web3 strategy.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center pt-4 pb-10 border-[2px] border-solid hover:bg-zinc-800 border-white border-opacity-10 max-md:mt-5">
                  <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                    <h1> 02.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-12 py-16 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b85dce7c40be9c789a34a15068721548b4a9497ef22aea300e68bdc9fd8bf7e7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1>Launchpad</h1>
                      </button>
                    </div>
                    <div className="mt-5 text-xs leading-5 text-white text-opacity-30">
                      Our next generation launchpad that has successfully funded
                      more than 50+ IDOs.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center pt-4 pb-9 border-[2px] border-solid hover:bg-zinc-800 border-white border-opacity-10 max-md:mt-5">
                  <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                    <h1>03.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed938f7556b4588d662bbd7a8e3e1fa50cb1e4227c15eb9b54533dc53ea5625?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1>Incubator</h1>
                      </button>
                    </div>
                    <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                      A carefully selected portfolio of projects that we treat
                      as our own and pre primed for global success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-12 container mt-6 w-full  max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center pt-4 pb-9 border-[2px] border-solid hover:bg-zinc-800 border-white border-opacity-10 max-md:mt-5">
                  <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                    <h1>04.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-10 py-16 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a08cf672f5504b9c5806b36a6c36e1970c45123c9212ac248c381fcca99b07?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1>Fundraising</h1>
                      </button>
                    </div>
                    <div className="mt-5 text-xs leading-5 text-white text-opacity-30">
                      supporting all partners with fundraising support inclusive
                      of investor planning, roadshows, fundraising strategy and
                      more.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center pt-4 pb-9 border-[2px] border-solid hover:bg-zinc-800 border-white border-opacity-10 max-md:mt-5">
                  <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                    <h1>05.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-10 py-16 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/09da100e07bb56b717c2658962ea6d7918525cbb6e93beee528499910676bdda?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1> Partnerships</h1>
                      </button>
                    </div>
                    <div className="mt-5 text-xs leading-5 text-white text-opacity-30">
                      Intorducation of critical partners such as CEX, layer 1 or
                      2, Market Makers, KOLs, media partners, community
                      gatekeepers & events
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center py-5 border-[2px] border-solid hover:bg-zinc-800 border-white border-opacity-10 max-md:mt-5">
                  <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                  <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                    <h1>06.</h1>
                  </div>
                  <div className="flex flex-col self-stretch px-4 mt-7">
                    <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7646b484ec92b45045d2f356a1f7dc69d33490a69635f31adb0a6a4e46d73871?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="w-full aspect-square"
                      />
                    </div>
                    <div className="mt-5 text-2xl leading-4 text-white">
                      <button className="hover hover:text-white hover:font-bold">
                        <h1>Events</h1>
                      </button>
                    </div>
                    <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                      We organize & Partner with some of the biggest web3 events
                      to help show case your brand and project at giving you
                      maximum visibility so therte’s enough brand awareness and
                      engagement
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
};

const Mobilefeatures = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <div>
        <div className="flex mt-10 justify-center items-center">
          <div className="text-4xl text-white text-center leading-[80px] max-md:mt-10">
            <h1>
              {" "}
              Our <span className="text-violet-600">Features</span>
            </h1>
            <div className="mt-2 text-xs px-5 text-center text-white text-opacity-30 max-md:max-w-full mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi.
            </div>
          </div>
        </div>
        <div className="px-5 p-2 mt-11 w-full max-w-[100px] max-md:mt-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center py-4 cursor-pointer border border-solid border-white hover:bg-zinc-800 hover:text-white hover:text-bold border-opacity-20 max-md:mt-5">
                <div className="shrink-0  bg-white h-[3px] w-[38px]" />
                <div className="mt-1.5 text-xl  tracking-wide text-center text-white">
                  <h1> 01.</h1>
                </div>
                <div className="flex flex-col self-stretch px-4 mt-7">
                  <div className="flex flex-col justify-center px-12 py-16 bg-zinc-900 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f99c4bc0c2cb9e9c46051857cf11ea3f63b0dfda4ba47d87174d884ad999720f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-5 text-xl leading-4 text-white">
                    <button className="hover hover:text-white hover:font-bold">
                      <h1>Web3 Innovation</h1>
                    </button>
                  </div>
                  <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                    Helping web2 brands and businesses develope cutting edge
                    web3 strategy.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center py-4 border border-solid hover:bg-zinc-800 border-white border-opacity-20 max-md:mt-5">
                <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                  <h1> 02.</h1>
                </div>
                <div className="flex flex-col self-stretch px-4 mt-7">
                  <div className="flex flex-col justify-center px-12 py-16 bg-zinc-900 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b85dce7c40be9c789a34a15068721548b4a9497ef22aea300e68bdc9fd8bf7e7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-5 text-xl leading-4 text-white">
                    <button className="hover hover:text-white hover:font-bold">
                      <h1>Launchpad</h1>
                    </button>
                  </div>
                  <div className="mt-5 text-xs leading-5 text-white text-opacity-30">
                    Our next generation launchpad that has successfully funded
                    more than 50+ IDOs.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center py-4  border border-solid hover:bg-zinc-800 border-white border-opacity-20 max-md:mt-5">
                <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                  <h1>03.</h1>
                </div>
                <div className="flex flex-col self-stretch px-4 mt-7">
                  <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed938f7556b4588d662bbd7a8e3e1fa50cb1e4227c15eb9b54533dc53ea5625?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className="mt-5 text-xl leading-4 text-white">
                    <button className="hover hover:text-white hover:font-bold">
                      <h1>Incubator</h1>
                    </button>
                  </div>
                  <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                    A carefully selected portfolio of projects that we treat as
                    our own and pre primed for global success.
                  </div>
                </div>
              </div>
            </div>
            {showMore ? (
              <>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center py-4  border border-solid hover:bg-zinc-800 border-white border-opacity-20 max-md:mt-5">
                    <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                    <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                      <h1>04.</h1>
                    </div>
                    <div className="flex flex-col self-stretch px-4 mt-7">
                      <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a08cf672f5504b9c5806b36a6c36e1970c45123c9212ac248c381fcca99b07?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="mt-5 text-xl leading-4 text-white">
                        <button className="hover hover:text-white hover:font-bold">
                          <h1>Fundraising</h1>
                        </button>
                      </div>
                      <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                        supporting all partners with fundraising support
                        inclusive of investor planning, roadshows, fundraising
                        strategy and more.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center py-4  border border-solid hover:bg-zinc-800 border-white border-opacity-20 max-md:mt-5">
                    <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                    <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                      <h1>05.</h1>
                    </div>
                    <div className="flex flex-col self-stretch px-4 mt-7">
                      <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09da100e07bb56b717c2658962ea6d7918525cbb6e93beee528499910676bdda?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="mt-5 text-xl leading-4 text-white">
                        <button className="hover hover:text-white hover:font-bold">
                          <h1>Partnerships</h1>
                        </button>
                      </div>
                      <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                        Intorducation of critical partners such as CEX, layer 1
                        or 2, Market Makers, KOLs, media partners, community
                        gatekeepers & events
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center py-4  border border-solid hover:bg-zinc-800 border-white border-opacity-20 max-md:mt-5">
                    <div className="shrink-0 bg-white h-[3px] w-[38px]" />
                    <div className="mt-1.5 text-xl tracking-wide text-center text-white">
                      <h1>06.</h1>
                    </div>
                    <div className="flex flex-col self-stretch px-4 mt-7">
                      <div className="flex flex-col justify-center px-8 py-14 bg-zinc-900 max-md:px-5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09da100e07bb56b717c2658962ea6d7918525cbb6e93beee528499910676bdda?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="w-full aspect-square"
                        />
                      </div>
                      <div className="mt-5 text-xl leading-4 text-white">
                        <button className="hover hover:text-white hover:font-bold">
                          <h1>Events</h1>
                        </button>
                      </div>
                      <div className="mt-6 text-xs leading-5 text-white text-opacity-30">
                        We organize & Partner with some of the biggest web3
                        events to help show case your brand and project at
                        giving you maximum visibility so therte’s enough brand
                        awareness and engagement
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div
        onClick={handleShowMore}
        className="flex justify-center align-middle"
      >
        <div className="justify-center flex w-[40%] py-4 mt-2 text-xs font-bold text-lime-300 border border-lime-300 border-solid">
          {showMore ? "Show Less" : "Show More"}
        </div>
      </div>
    </div>
  );
};

export default Features;
