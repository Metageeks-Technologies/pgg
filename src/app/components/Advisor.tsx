"use client";
import React from "react";
import { useState, useEffect } from "react";

const Advisor = () => {
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
      <div className="p-4 max-md:px-5">
        {isMobile ? <Mobileadvisor /> : <Desktopadvisor />}
      </div>
    </div>
  );
};

const Desktopadvisor = () => {
  return (
    <div className=" container ">
      <div>
        <div className="flex mt-56 justify-center items-center">
          <div className="text-5xl text-white  leading-[80px] max-md:mt-10">
            <h1>
              {" "}
              Our <span className="text-violet-600 ">Adivsor</span>
            </h1>
          </div>
        </div>

        <div>
          <div className="px-5 p-4 mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap w-full justify-center gap-4 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Yuen Wong
                      </div>
                      <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                        Founder of Labs group
                      </div>
                    </div>
                    <a href="https://twitter.com/home">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Nikolaos Kost
                      </div>
                      <div className="mt-3.5 text-xs leading-4 text-white text-opacity-30">
                        Founder of Rebaked & Ex-Harmony
                      </div>
                    </div>
                    <a href="https://twitter.com/home">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Larry
                      </div>
                      <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                        Founder of basics capital
                      </div>
                    </div>
                    <a href="https://twitter.com/home">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Jeff
                      </div>
                      <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                        Co-founder Maven Capital
                      </div>
                    </div>
                    <a href="https://twitter.com/home">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9cabbaf9b54e886640ddc23eed5384b344697061cef51d8c1e9819db189?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Justin
                      </div>
                      <div className="mt-3.5 text-xs leading-4 text-white text-opacity-30">
                        Co-founder Maven Capital
                      </div>
                    </div>
                    <a href="https://twitter.com/home">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[24%]  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14ba75663a74d321ef3451a466e1a193059edfdeba9d74bbb0d4665b9f417362?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Evan Luthra
                      </div>
                      <div className="mt-3.5 text-xs leading-4 text-white text-opacity-30">
                        Angel Investor
                      </div>
                    </div>
                    <a href="https://linkedin.com">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[24%]  max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-10 max-md:mt-5">
                  <div className="flex flex-col justify-center bg-white">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18e9d874ac0e33697dad6930e40f6a1579aa0c2ee128f6234662cf55170123ce?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="w-full aspect-[1.25]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between mt-5">
                    <div className="flex flex-col">
                      <div className="text-xl font-bold leading-4 text-white">
                        Yash Dahenkar
                      </div>
                      <div className="mt-3.5 text-xs leading-4 text-white text-opacity-30">
                        Founder of Acknoledger
                      </div>
                    </div>
                    <a href="https://linkedin.com">
                      <button>
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8cbd9a890335c84b13dfef38553ae078d96a0a26365b8873be50b9d28e6d7cc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                          className="shrink-0 self-start aspect-square w-[34px]"
                        />
                      </button>
                    </a>
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

const Mobileadvisor = () => {
  return (
    <div>
      <div className="flex mt-10 justify-center items-center">
        <div className="text-4xl text-white leading-[80px]">
          <h1>
            {" "}
            Our <span className="text-violet-600 ">Adivsor</span>
          </h1>
        </div>
      </div>

      <div>
        <div className="px-0 mt-10 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-20 max-md:mt-5">
                <div className="flex flex-col justify-center bg-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/46c0e6b9c357bd65209a3aa5b59b8b4d358e14b6fe5190db58176a6621dcc91c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="w-full aspect-[1.25]"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-5">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold leading-4 text-white">
                      Yuen Wong
                    </div>
                    <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                      Founder of Labs group
                    </div>
                  </div>
                  <a href="https://twitter.com/home">
                    <button>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 self-start aspect-square w-[34px]"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-20 max-md:mt-5">
                <div className="flex flex-col justify-center bg-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b84996fd0479fafdb9f821d2f4d7f50dcf5e7b6955afc63bc96ec134805544c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="w-full aspect-[1.25]"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-5">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold leading-4 text-white">
                      Nikolaos Kost
                    </div>
                    <div className="mt-3.5 text-xs leading-4 text-white text-opacity-30">
                      Founder of Rebaked & Ex-Harmony
                    </div>
                  </div>
                  <a href="https://twitter.com/home">
                    <button>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 self-start aspect-square w-[34px]"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-20 max-md:mt-5">
                <div className="flex flex-col justify-center bg-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/50151e0c443fa119d7ec0907247362dc02a16f6244edb20620b82b305f855582?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="w-full aspect-[1.25]"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-5">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold leading-4 text-white">
                      Larry
                    </div>
                    <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                      Founder of basics capital
                    </div>
                  </div>
                  <a href="https://twitter.com/home">
                    <button>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 self-start aspect-square w-[34px]"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 py-5 border border-solid border-white border-opacity-20 max-md:mt-5">
                <div className="flex flex-col justify-center bg-white">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a358b290fdaf0bd8d9858d427687ba1dd4e32b884dd4b53d602eaa5bdeefbcc?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="w-full aspect-[1.25]"
                  />
                </div>
                <div className="flex gap-5 justify-between mt-5">
                  <div className="flex flex-col">
                    <div className="text-xl font-bold leading-4 text-white">
                      Jeff
                    </div>
                    <div className="mt-2.5 text-xs leading-4 text-white text-opacity-30">
                      Co-founder Maven Capital
                    </div>
                  </div>
                  <a href="https://twitter.com/home">
                    <button>
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b1d844b570a262863f05bde5663c65e288c741a81944414c39d2ff945c3d277?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 self-start aspect-square w-[34px]"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="align-center justify-center flex">
        <div className="justify-center flex text-center w-[40%]  px-3 py-4 mt-8 text-xs font-bold text-lime-300 border border-lime-300 border-solid">
          See More
        </div>
      </div>
    </div>
  );
};

export default Advisor;
