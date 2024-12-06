import React from 'react';

export default function PromptSection() {
  return (
    <div className="flex flex-col  rounded-md w-full">
      <div className="flex flex-col items-start self-end pr-16 w-full rounded-none max-w-[302px] max-md:pr-5">
        <div className="gap-1 self-stretch p-1 ml-7 text-xs font-medium leading-none text-center whitespace-nowrap bg-gray-700 rounded shadow min-h-[15px] text-slate-200 max-md:ml-2.5">
          12
        </div>
        <div className="flex">
          <div className="flex shrink-0 my-auto w-full bg-sky-600 rounded-xl h-[7px] max-md:mr-0" />
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full border border-solid border-slate-300 fill-white stroke-[1px] stroke-slate-300" />
        </div>
      </div>
      <button className="flex gap-2.5 justify-center items-center px-2 py-3.5 mt-3 w-full text-sm font-medium text-indigo-700 capitalize bg-white rounded-md border border-sky-600 border-solid shadow-sm min-h-[36px]">
        Create Dashboard
      </button>
      <form className="flex flex-col justify-center mt-3 w-full text-sm font-medium tracking-wide leading-none">
        <div className="flex flex-col p-px w-full">
          <label htmlFor="promptInput" className="gap-1.5 self-start text-slate-700">
            Type your prompt in here
          </label>
          <textarea
            id="promptInput"
            className="overflow-hidden px-3 pt-3.5 pb-14 mt-2 text-gray-400 bg-white rounded-md shadow-sm"
            placeholder="Enter here"
          />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f9e40bffba4879ef34dbb02f1a2b686228b238f5dd7882c0f6ebbe846e14c4f?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain self-center mt-1 aspect-[20.83] stroke-[2px] stroke-slate-600 w-[41px]" />
      </form>
      <button className="flex gap-2.5 items-center self-end px-2 py-3.5 mt-2 text-sm font-medium text-white capitalize bg-indigo-600 rounded-md shadow-sm min-h-[36px]">
        Run Prompt
      </button>
    </div>
  );
}

