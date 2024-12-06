import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex overflow-hidden gap-2.5 items-center self-stretch px-2 py-1.5 my-auto font-light leading-none text-gray-400 whitespace-nowrap bg-white rounded-md shadow-sm min-h-[36px] min-w-[240px] w-[246px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b424e24f1da6f78b2229a98710e0547619cb6edb775667ad07afb579152a1d78?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <input type="text" placeholder="Search" className="self-stretch my-auto w-[119px] bg-transparent border-none focus:outline-none" />
    </div>
  );
}

