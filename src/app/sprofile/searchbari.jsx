import React from 'react';
import ActionButton2 from './actbut';

 export default function SearchBar23() {
  return (
    <div className="flex flex-wrap gap-1.5 items-center min-w-[240px] max-md:max-w-full">
      <div className="flex overflow-hidden gap-2.5 items-center self-stretch px-2 py-1.5 my-auto font-light leading-none text-gray-400 whitespace-nowrap bg-white rounded-md shadow-sm min-h-[36px] min-w-[240px] w-[246px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2611275571a341655b63a422724a8cce2bba2f315caee034c8774e2004980604?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <input type="text" placeholder="Search" className="self-stretch my-auto w-[119px] bg-transparent border-none focus:outline-none" />
      </div>
      <div className="flex flex-wrap gap-1.5 items-center self-stretch my-auto font-medium text-indigo-700 capitalize min-w-[240px] max-md:max-w-full">
        <ActionButton2 text="Upload JD" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
        <ActionButton2 text="Upload Resume" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
        <ActionButton2 text="Link to HR DB" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6c73dc0f20644e94d511f5ee31a1f956aa524c9a6dd11312f1efa92026830bf8?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
      </div>
    </div>
  );
}

