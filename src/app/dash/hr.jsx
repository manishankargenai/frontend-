import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';


function HRSystem({onMinimize}) {
  const items = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed66938eb0e8d2a500febb573f2e8402eb34cf5c9b1e3320a3ab24575a4863f6?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Vendors" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9aa649cc05484535101accc68790b944994a17dd69ad36e6cb0c23cff36e01a4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Selections/Rejections/Hold" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/35e3747046b1ceaebc3c773150ba5b4f483e298cd8599f993bc011ac78bd57b7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Location" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03fb1bd22ad16fade29e96f8d0c86be318607439ef88b689d7ac1cbb23881978?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Recruiters" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41d35b88a20968f541fabaa046b4652af3af99cc3ce37b44d0c039b55a9a406b?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Technical Panel" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/327f797b5b248f74ec0edb4c64126815f98070e0083193c35d2b103f5afea678?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Onboarding & Back ground Verification" }
  ];
  const [hovered, setHovered] = useState(false);

  const handleMinimize = (e) => {
    e.stopPropagation();
    onMinimize();
  };

  return (
    <section className=" relative flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div className="flex flex-col pb-6 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-green-500 border-b border-green-500 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3912ac7e279521410c93188994024cf69fd3d483e36751a99c819c9a375ebb8a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Speak to HR System</span>
            <Link href="/hr"><button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ddd92d6be50722e2d6a158986954d61a994d90cf7bae0377b4b5bc75539f6e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
            </Link></div>
        </h2>
        <div className="flex flex-col mt-2 mr-4 ml-4 text-sm font-medium leading-none text-indigo-950 max-md:mx-2.5">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 mt-1 first:mt-0 w-full whitespace-nowrap rounded border border-gray-200 border-solid min-h-[40px]">
              <div className="flex gap-2 items-center self-stretch my-auto min-w-[240px] w-[293px]">
                <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                <div className="self-stretch my-auto">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {hovered && (
        <button
          onClick={handleMinimize}
          className=" absolute bottom-2 left-2 w-6 h-6 rounded-full bg-gray-200/80 hover:bg-gray-300/80 flex items-center justify-center transition-colors duration-200"   >
          
          <MinimizeSharpIcon />
        </button>
      )}
    </section>
  );
}

export default HRSystem;