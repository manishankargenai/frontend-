import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col my-auto text-base font-semibold whitespace-nowrap text-indigo-950">
      <div className="flex flex-col items-center px-12 py-12 rounded-full bg-indigo-50 bg-opacity-50 fill-indigo-50 max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6640bae112d0c18d0d25882f7b0016c674239f99ea20cbda99cc2a2c64d1a02?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="FastHire99 logo" className="object-contain max-w-full aspect-square w-[104px]" />
        <div className="mt-5">FastHire99</div>
      </div>
    </div>
  );
}

