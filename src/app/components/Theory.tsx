"use client";
import React from "react";
import { useState, useEffect } from "react";

const Theory = () => {
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
      <div className="p-8">
        {isMobile ? <Mobiletheory /> : <Desktoptheory />}
      </div>
    </div>
  );
};

const Desktoptheory = () => {
  return (
    <div>
      <div>
        <div className="mt-36 w-full container max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col items-center max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 mt-1 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl text-white  leading-[68px] max-md:max-w-full">
                  <h1>
                    {" "}
                    Know more about <br />
                    <span className="text-[#cdff3f]">Tokenlunch, pro</span>
                  </h1>
                </div>
                <div className="mt-7 text-sm text-gray-500 text-justify leading-5  max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in nisl nisi. Arcu Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore{" "}
                  <span className="text-white">magna aliqua</span>. Egestas
                  purus viverra accumsan in nisl nisi.{" "}
                  <span className="text-white">Arcu cursus </span>vitae congue
                  mauris rhoncus aenean vel elit scelerisque. In egestas Lorem
                  ipsum dolor sit amet,
                  <br />
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In <span className="text-white">
                    egestas
                  </span>{" "}
                  Lorem ipsum dolor sit amet, accumsan in nisl nisi.{" "}
                  <span className="text-white">Arcu cursus </span>vitae congue
                  mauris rhoncus aenean vel elit scelerisque. In egestas Lorem
                  ipsum dolor sit amet,
                  <br />
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In <span className="text-white">
                    egestas
                  </span>{" "}
                  Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Egestas purus viverra
                  accumsan in nisl nisi. Arcu Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore{" "}
                  <span className="text-white">magna aliqua</span>. Egestas
                  purus viverra accumsan in nisl nisi.{" "}
                  <span className="text-white">Arcu cursus </span>vitae congue
                  mauris rhoncus aenean vel elit scelerisque. In egestas Lorem
                  ipsum dolor sit amet,
                  <br />
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In <span className="text-white">
                    egestas
                  </span>{" "}
                  Lorem ipsum dolor sit amet, accumsan in nisl nisi.{" "}
                  <span className="text-white">Arcu cursus </span>vitae congue
                  mauris rhoncus aenean vel elit scelerisque. In egestas Lorem
                  ipsum dolor sit amet,
                  <br />
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In <span className="text-white">
                    egestas
                  </span>{" "}
                  Lorem ipsum dolor sit amet,
                  <span className="text-white">Arcu cursus </span>vitae congue
                  mauris rhoncus aenean vel elit scelerisque. In egestas Lorem
                  ipsum dolor sit amet,
                  <br />
                  cursus vitae congue mauris rhoncus aenean vel elit
                  scelerisque. In <span className="text-white">
                    egestas
                  </span>{" "}
                  Lorem ipsum dolor sit amet,
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d06ff8fa3a197b301374e7a02140980e43b372133e3d9d2cf9235e5eabd2a19?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mobiletheory = () => {
  return (
    <div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce37ed401791466a3d32ad4533bc677cf085adfa06fab46c42710c9a0341e37d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="flex mt-16 max-w-full justify-center ml-10 aspect-square w-[full] sm:justify-center"
      />

      <div className=" mt-9 ml-8 text-xl leading-10 text-white">
        <h1>
          {" "}
          Know more about <span className="text-lime-300">Tokenlunch,pro</span>
        </h1>
      </div>

      <div className="mt-6 text-xs leading-4 text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore <span className="text-white">magna aliqua</span>. Egestas
        purus viverra accumsan in nisl nisi.{" "}
        <span className="text-white">Arcu cursus </span>
        vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas
        Lorem ipsum dolor sit amet,
        <br />
        cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In{" "}
        <span className="text-white">egestas</span> Lorem ipsum dolor sit amet,
        accumsan in nisl nisi. <span className="text-white">Arcu cursus </span>
        vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas
        Lorem ipsum dolor sit amet,
        <br />
        cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In{" "}
        <span className="text-white">egestas</span> Lorem ipsum dolor sit
        amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut <br />
        <br />
        <br />
        <br />
      </div>

      <div className="justify-center self-center ml-20 mr-20 px-8 py-4 mt-6 text-xs font-bold text-lime-300 border border-lime-300 border-solid">
        Read More
      </div>
    </div>
  );
};

export default Theory;
