"use client";
import React from "react";
import { useState, useEffect } from "react";

const Faq = () => {
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
      <div className="p-8 max-md:px-5 max-md:pt-3">
        {isMobile ? <Mobilefaq /> : <Desktopfaq />}
      </div>
    </div>
  );
};

const Desktopfaq = () => {
  return (
    <div>
      <div className="container">
        <div className="flex mt-12 justify-center items-center">
          <div className="text-5xl text-violet-600 text-bold leading-[80px] max-md:mt-10">
            <h1> FAQ</h1>
          </div>
        </div>

        <div className="mt-2 text-xs text-center text-white text-opacity-30 w-[502px] max-md:max-w-full mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi.
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5 p-4 mt-9 w-full text-sm text-center text-white leading-[79.94px]  max-md:flex-wrap max-md:max-w-full">
            {faqData.map((data) => (
              <div
                key={data.id}
                className="flex w-full gap-5 justify-center px-5 py-5 border-[2px] border-solid border-white border-opacity-10  max-md:pl-5 max-md:max-w-full"
              >
                <div className=" my-auto">
                  <h1 style={{ letterSpacing: "0.08em" }}>{data.question}</h1>
                </div>
                <button>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                    className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
                  />
                </button>
              </div>
            ))}
            {/* <div className="flex  flex-auto gap-5 justify-center px-5 py-5 border-[2px] border-solid border-white border-opacity-10 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
              <div className="flex-auto my-auto">
                <h1
                  className=" text-nowrap"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Can anyone launch a project in Degen Mode?
                </h1>
              </div>
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
                />
              </button>
            </div> */}
          </div>
        </div>

        {/* <div>
          <div className="flex gap-5 p-4 mt-4 w-full text-sm text-white max-w-[1500px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex  flex-auto gap-5 justify-center px-5 py-5 text-center border-[2px] border-solid border-white border-opacity-10 leading-[571%] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
              <div className="flex-auto my-auto max-md:max-w-full">
                <h1 style={{ letterSpacing: "0.08em" }}>
                  {" "}
                  What types of projects can apply for Alpha Mode?
                </h1>
              </div>
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
                />
              </button>
            </div>
            <div className="flex  flex-auto gap-5 justify-center px-5 py-5 text-center border-[2px] border-solid border-white border-opacity-10 leading-[571%] max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
              <div className="flex-auto my-auto max-md:max-w-full">
                <h1 style={{ letterSpacing: "0.08em" }}>
                  {" "}
                  How does TokenLaunch.pro support projects in Degen Mode?
                </h1>
              </div>
              <button>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12c288bbf93f813b1ec1a76cddf74b6b4fc0cf0d1466949b90ae8f8b337a5399?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
                  className="shrink-0 w-11 border border-solid aspect-square border-white border-opacity-10"
                />
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const faqData = [
  {
    id: 1,
    question: "What makes Alpha Mode unique?",
  },
  {
    id: 2,
    question: "Can anyone launch a project in Degen Mode?",
  },
  {
    id: 3,
    question: "What types of projects can apply for Alpha Mode?",
  },
  {
    id: 4,
    question: "How does TokenLaunch.pro support Degen Mode?",
  },
];

const Mobilefaq = () => {
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className="self-center mt-0 text-2xl leading-10 text-center text-white">
        <h1>FAQ</h1>
      </div>
      <div className="mt-3.5  text-xs text-center text-white text-opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Egestas purus
        viverra accumsan in nisl nisi.
      </div>
      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-20 max-w-[354px]">
        <div className="my-auto w-[243px]">
          <h1 style={{ letterSpacing: "0.05em" }}>
            {" "}
            What makes alpha mode unique?
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-20 max-w-[354px]">
        <div className="my-auto w-[243px]">
          <h1 style={{ letterSpacing: "0.05em" }}>
            {" "}
            Can anyone launch a project in Degan Mode?
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-20 max-w-[354px]">
        <div className="my-auto w-[243px]">
          <h1 style={{ letterSpacing: "0.05em" }}>
            {" "}
            What types of project can apply for Alpha Mode?
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>

      <div className="flex gap-5 justify-center px-4 py-5 mt-4 w-full text-xs leading-5 text-white border border-solid border-white border-opacity-20 max-w-[354px]">
        <div className="my-auto w-[243px]">
          <h1>
            <span style={{ letterSpacing: "0.05em" }}>
              How deos TokentLaunch.pro support projects in Degan Mode?{" "}
            </span>
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/838618196fb82e42f1ddb37781a7a9891f4b08e9d7f4757b16e8acb5d171a5a6?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-8 border border-solid aspect-square border-white border-opacity-10"
        />
      </div>
    </div>
  );
};

export default Faq;
