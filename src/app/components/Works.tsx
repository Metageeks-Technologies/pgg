"use client";
import React from "react";
import { useState, useEffect } from "react";

const Works = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Initial check on mount
    handleResize();
    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-4 max-md:px-5">
      {isMobile ? <Mobileworks /> : <Desktopworks />}
    </div>
  );
};

const Desktopworks = () => {
  return (
    <div>
      <div>
        <div className="flex mt-14 justify-center items-center">
          <div className="text-5xl  leading-[80px]  text-white max-md:mt-10 style={{ fontFamily: 'Republica Minor 2.0, sans-serif' }">
            <h1>
              {" "}
              How it<span className="text-violet-600"> works ?</span>
            </h1>
          </div>
        </div>

        <div className="mt-2 text-xs text-center text-white text-opacity-30 w-[502px] max-md:max-w-full mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </div>

        <div className="p-6">
          <div className="mt-12 w-full container max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col text-center max-md:gap-0">
              <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch px-5 my-auto text-xs max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl text-white text-start leading-[68px] max-md:max-w-full">
                    <h1 className="">
                      {" "}
                      How does <span className="text-[#cdff3f]">
                        Degan
                      </span>{" "}
                      mode Works
                    </h1>
                  </div>
                  <div className="mt-5 text-start leading-4 text-white text-opacity-30 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas Lorem ipsum dolor sit amet,
                    <br />
                  </div>
                  <div className="flex gap-2.5 justify-center self-start px-9 py-5 mt-7 border border-solid border-white border-opacity-10  bg-[#cdff3f] text-zinc-800 max-md:px-5">
                    <h1>
                      <a style={{ letterSpacing: "0.05em" }} href="/visit">
                        <span>Visit Site</span>
                      </a>{" "}
                    </h1>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/189ae6f35d2d48527ad9d6119fba4cf79e3aeb1664c73e1f6d820f68f6cd5852?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 my-auto border-solid aspect-[2.86] border-zinc-900 stroke-[2px] stroke-zinc-900 w-[31px]"
                    />
                  </div>
                  <div className="flex gap-3.5 justify-between mt-11 text-base font-semibold leading-6 text-white capitalize max-md:flex-wrap max-md:mt-10">
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-white hover:font-bold">
                        Built with Tailwind css
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-white hover:font-bold">
                        I18n Multilingual Support
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-white hover:font-bold">
                        Lifetime Free Updates
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 self-start mt-4 text-base font-semibold leading-6 text-white capitalize">
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-white hover:font-bold">
                        Easy to use and Clean code
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-lime-300 hover:font-bold">
                        and many more...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3f809e948a25213258fe4c9cd58443f8fdb3cb48dd4980a3955c708bf7be0a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-12 p-6 w-full container max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/328915381678ecf633eaef11aa0025a6f7b2fbe0b336c3322f9ba1a743e68c0e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="grow w-full aspect-[1.32] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch px-5 my-auto text-xs max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl text-white leading-[68px] max-md:max-w-full">
                    <h1>
                      {" "}
                      How does <span className="text-violet-600">Alpha </span>
                      mode Works
                    </h1>
                  </div>
                  <div className="mt-5 leading-4 text-white text-opacity-30 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu
                    cursus vitae congue mauris rhoncus aenean vel elit
                    scelerisque. In egestas Lorem ipsum dolor sit amet,
                    <br />
                  </div>
                  <div className="flex gap-2.5 justify-center text-white self-start px-9 py-5 mt-7 border border-solid border-white border-opacity-10  bg-violet-600 max-md:px-5">
                    <h1>
                      <a style={{ letterSpacing: "0.05em" }} href="/visit">
                        <span>Visit Site</span>
                      </a>{" "}
                    </h1>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2bb81b0333dc2cbea46bb9085ea9ead645d02a282c0f2284cd8feaa77394f54?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                      className="shrink-0 my-auto  aspect-[2.86] stroke-[2px] stroke-white w-[31px]"
                    />
                  </div>
                  <div className="flex gap-3.5 justify-between mt-11 text-base font-semibold leading-6 text-white capitalize max-md:flex-wrap max-md:mt-10">
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
                      />
                      <div className="cursor-pointer text-nowrap hover:text-white hover:font-bold">
                        Built with Tailwind css
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
                      />
                      <div className="cursor-pointer text-nowrap hover:text-white hover:font-bold">
                        I18n Multilingual Support
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
                      />
                      <div className="cursor-pointer text-nowrap hover:text-white hover:font-bold">
                        Lifetime Free Updates
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 self-start mt-4 text-base font-semibold leading-6 text-white capitalize">
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
                      />
                      <div className="cursor-pointer text-nowrap hover:text-white hover:font-bold">
                        Easy to use and Clean code
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                        className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
                      />
                      <div className="cursor-pointer hover:text-lime-300 hover:font-bold">
                        and many more...
                      </div>
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

const Mobileworks = () => {
  return (
    <div>
      <div className="self-center mt-10 text-2xl leading-10 text-center text-white">
        <h1>
          How it<span className="text-violet-600"> Works</span> ?
        </h1>
      </div>
      <div className="mt-4 px-5  text-xs text-center text-white text-opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi.
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/030e65b4fcea04bd1829a343e093f20eeba3f18fa8f71e866be6eb2d3f79f3a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="justify-center flex mt-9 w-full aspect-square max-w-[399px]"
      />

      <div className="mt-9 text-2xl leading-10 text-white">
        <h1>
          {" "}
          How does <span className="text-lime-300">Degan</span> mode Works
        </h1>
      </div>
      <div className="mt-6 text-xs leading-4 text-white text-opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas Lorem ipsum dolor sit amet,
        <br />
      </div>
      <div className="flex gap-2.5 justify-center px-4 w-[55%] py-5 mt-8 text-xs bg-lime-300 text-zinc-900">
        <h1>
          <div>Visit Site</div>
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/189ae6f35d2d48527ad9d6119fba4cf79e3aeb1664c73e1f6d820f68f6cd5852?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto border-solid aspect-[2.86] border-zinc-900 stroke-[2px] stroke-zinc-900 w-[31px]"
        />
      </div>

      <div className="flex gap-3 mt-7 text-xs font-semibold leading-6 text-white capitalize">
        <div className="flex items-start gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
          />
          <div>Built with Tailwind css</div>
        </div>
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
          />
          <div>I18n Multilingual Support</div>
        </div>
      </div>
      <div className="flex gap-3 mt-4 text-xs font-semibold leading-6 text-white capitalize">
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7746dbd21ce882fb70675caaf20feadacd499cafda9bb43ce265b4bc0336461c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
          />
          <div>Easy to use and Clean code</div>
        </div>
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7746dbd21ce882fb70675caaf20feadacd499cafda9bb43ce265b4bc0336461c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
          />
          <div>and many more...</div>
        </div>
      </div>
      <div className="flex gap-1 self-start mt-4 text-xs font-semibold leading-6 text-white capitalize">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c03206c12a5827de39051beef32a2e9eee5b5d09d812255dcb809f9627ec6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto aspect-[0.93] fill-violet-600 w-[15px]"
        />
        <div>Lifetime Free Updates</div>
      </div>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13ae17ba5fa90472b0b247bddf2e3d9a4857985134cddaca8cb62b1c32dd508?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
        className="self-center mt-16 w-full aspect-[1.32] max-w-[399px]"
      />
      <div className="mt-9 text-2xl leading-10 text-white">
        <h1>
          {" "}
          How does <span className="text-violet-600">Alpha</span> mode Works
        </h1>
      </div>

      <div className="mt-6 text-xs leading-4 text-white text-opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus
        aenean vel elit scelerisque. In egestas Lorem ipsum dolor sit amet,
        <br />
      </div>

      <div className="flex gap-2.5 justify-center px-4 w-[55%] py-5 mt-8 text-xs text-white bg-violet-600">
        <h1>
          <div>Visit Site</div>
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2bb81b0333dc2cbea46bb9085ea9ead645d02a282c0f2284cd8feaa77394f54?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto border-white border-solid aspect-[2.86] stroke-[2px] stroke-white w-[31px]"
        />
      </div>

      <div className="flex gap-1 mt-10 text-xs font-semibold  leading-6 text-white capitalize">
        <div className="flex  gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/248f83232243e59908cdaf533213b9625f5f2d0c6cb39b2f8af520f1edc6cd7c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
          />
          <div>Built with Tailwind css</div>
        </div>
        <div className="flex  gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/248f83232243e59908cdaf533213b9625f5f2d0c6cb39b2f8af520f1edc6cd7c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
          />
          <div>I18n Multilingual Support</div>
        </div>
      </div>

      <div className="flex gap-3 mt-4 text-xs font-semibold leading-6 text-white capitalize">
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
          />
          <div>Easy to use and Clean code</div>
        </div>
        <div className="flex gap-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b213e992e6aec912dbee05fac3b7b2271ff949947100de33f39eaf424db2637f?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
          />
          <div>and many more...</div>
        </div>
      </div>

      <div className="flex gap-1 self-start mt-4 text-xs font-semibold leading-6 text-white capitalize">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/248f83232243e59908cdaf533213b9625f5f2d0c6cb39b2f8af520f1edc6cd7c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto aspect-[0.93] fill-lime-300 w-[15px]"
        />
        <div>Lifetime Free Updates</div>
      </div>
    </div>
  );
};

export default Works;
