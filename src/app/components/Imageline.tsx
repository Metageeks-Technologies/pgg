"use client";
import React from "react";
import { useState, useEffect } from "react";

const Imageline = () => {
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
        {isMobile ? <Mobileimageline /> : <Desktopimageline />}
      </div>
    </div>
  );
};

const Desktopimageline = () => {
  return (
    <div>
      <div className="mt-14 w-full">
        <div className="flex gap-5 p-6 justify-between items-center px-5 mt-11 w-full max-w-[1500px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3cd30d295f02e000bee4e58f199500b4e3d1c72ef290b87026ba7a62b04621df?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[135px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cfb1ea916bf1943c7ce350a21243b2f426a0c677a93e7838334edc828a06f0d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[4.35] w-[132px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc9319b1be47f9830af10691bfea9f73ff4bd681d196e55d48747a8bdbef3898?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[3.7] w-[124px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e8a066aa15f11682ead2c79eeef689f2baca79746a7811ff36958957e9f5f44?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch max-w-full aspect-[3.23] w-[134px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0861ddc82463980852e38a09f148a1b55cfb2e8983d55f94bed11282d69e6eec?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[5] w-[138px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/58a31c03b4221ddf1937c672ced9f85f4dba939fbabb1d706252362bd3e0381d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[4.76] w-[145px]"
          />
        </div>
      </div>
    </div>
  );
};

const Mobileimageline = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between mt-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b2d8357fa39f3984b9a390be968f02d2b0aa7bab24dc90292de97983f203310?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 self-start w-16 aspect-[3.7]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07d42d28b5608debee6f7611ec8f7660ab197d9243c8247ce27b2f3fb9dff58c?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto w-16 aspect-[4.35]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dfe2e974bef5130645259c108ff7e5618cbe88b7eb80cb1b7e1d0dede8a56ef?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 self-start aspect-[3.57] w-[60px]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad3f159fad30af58af049bdb6b9e06b386d1469da3538602622c029d9b0a63cb?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 aspect-[3.45] w-[65px]"
        />
      </div>
    </div>
  );
};

export default Imageline;
