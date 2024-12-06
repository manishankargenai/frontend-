import React from 'react';
import Link from 'next/link';


export default  function ResumeSection() {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-center px-4 py-1.5 mt-2 w-full font-semibold border-b border-lime-600 max-w-[1312px] min-h-[40px] max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto text-base text-lime-600 whitespace-nowrap">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee540726dacc9d446f921570c8109f14d1ea1fd7f6f433518107c542efc09907?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <h2 className="self-stretch my-auto">Coding</h2>
      </div>
      <div className="flex justify-end items-center  flex-wrap gap-1 items-end self-stretch my-auto text-lg text-white uppercase min-w-[240px] w-[627px] max-md:max-w-full">
      
        <div className="flex  gap-px items-end  self-stretch my-auto">
          <div className="gap-1 self-stretch px-2 py-2.5 my-auto bg-lime-600 rounded border border-lime-600 border-solid shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            22
          </div>
          <div className="gap-1 self-stretch px-2 py-2.5 my-auto bg-red-500 rounded-none border border-red-500 border-solid shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            36
          </div>
        </div>
        <Link href="/"><button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/128f4322a6dea96f188f66f2a75349683a5168aae5cdf1f7ef3e0ef074a381c8?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </button>
      </Link></div>
    </section>
  );
}

