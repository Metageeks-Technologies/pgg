import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="sm:flex hidden flex-col items-start py-7 px-4 border-r border-solid bg-zinc-900 border-white border-opacity-10 max-w-[265px]">
      <div className="flex gap-2.5 ">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/51eade9060700134bc4cc5acd013b1b038482748245014fc95aacb94a840e6d0?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-full aspect-[5.26]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1438af12fb424a0ea90bbf7f6d442397b5927652f668623648440cbd47fb0cad?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 self-start mt-3.5 aspect-[0.52] w-[] "
        />
      </div>
      <div className="flex flex-col justify-center items-start px-6 py-3.5 mt-11 w-full text-sm font-bold leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db9209e67c4bb0393dbff21215aaf0993aa24371699ff285d071173d740a4cd2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto cursor-pointer">Home</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between self-center mt-7 max-w-full text-sm leading-4 text-white whitespace-nowrap w-[175px]">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aef871d6810ed863c0d1db04d9a08bf523db887190d1ad7d3c42d785f267901?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <button className="my-auto cursor-pointer">Launchpads</button>
        </div>
        <button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto w-5 aspect-square"
        />
        </button>
      </div>
      
      <div className="flex gap-5 justify-between self-center mt-10 max-w-full text-sm leading-4 text-white whitespace-nowrap w-[175px]">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e25646f0b961ec83488467105927f75adc572d86a0f6acb5b3196aad9d532b89?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto ">HarmonyLock</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto w-5 aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-between self-center mt-10 max-w-full text-sm leading-4 text-white whitespace-nowrap w-[175px]">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93db9f2d7c6676c31f883e2644e3a41c0d0bf27d79b0fcc212dab1e8516c30e9?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Airdrop</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto w-5 aspect-square"
        />
      </div>
      <div className="flex gap-5 justify-between self-center mt-10 max-w-full text-sm leading-4 text-white whitespace-nowrap w-[175px]">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/beaa543ce0422ed44fe6b1947f241e2bc4f8d595bb9198dd552cc1385506718b?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Staking</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e1b2c243a8324653b206d7be26e045789365082c9a0ced7b44e00c60d4cd25e?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 my-auto w-5 aspect-square"
        />
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-6 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc353caca8b0476a9a8272060e0b74cba23b591bced59b5e0e96c8ed65c538c7?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Private Sale</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9083261408fe8a0df1e630185490abb7186730777c963c99206217e380669b2a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Buy Crypto Fiat</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cad35bbd6b6e502597ed4c2405a61a799bbd2d941cf2c07d0b82ef49bb7fb3f2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Bridge</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2670ad88968d9354288518d036efa5dce0987753cfb8feabd755944da3bd044d?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Leaderboard</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff2d2d6a86f4384453ec9d868ecb0212e434dceb07aac7ecd0dd7aac44bda88?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Anti-Bot</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8580d718d357cdb20d3d555f82211c21ff920d9cb41034800939d461831a9e1?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Multi-Sender</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e77afce13a29f7ed4934c510449a4cc50eebd63403c1c19f32466d987fe37a?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Harmony.com</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a3b7e751ebba5bb746865e82ba42517eb499e1957451b47d65f7653630a0a2?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">Pools Alert</div>
      </div>
      <div className="flex flex-row justify-start gap-2.5 cursor-pointer items-start px-6 py-3.5 mt-4 w-full text-sm  leading-4 text-white whitespace-nowrap hover:bg-purple-600 rounded-[110px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3790562cf8de77023405b14c100d4284a507ddb939085621aef341e8c0ee4742?apiKey=fc314cf36d364dbdb6a0cce0fe9d0082&"
          className="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">KYC & Audit</div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar
