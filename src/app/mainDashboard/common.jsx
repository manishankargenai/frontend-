import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';


function CommonDashboard({onMinimize}) {
  const items = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7704f42814b0506cc91d3546316f9901b375cde732b91cd14d9f2c08140939d7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Probability of Acceptance" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eef5a7b9921144a22b83d68282ba76cee54365d987cfb9a6a1ac354de5e5c6c?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Track and Categorize" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d1ecc1a3ff0aea56d5a2e54602d9994d20ab0f653a1148504531019ee53edb8a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Comprehensive Archive" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06a145fc2343bdd10febcedc5683c4d993e7eca55faff832a2dce28c760f8dbf?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Develop Dashboard" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e134d3605453a7e510f31c9f6ad3fe36efc2211d3cd91060d68f9f9bc315728b?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Provide Statistics" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/14ddef5e871a0844b372163a09fe0d04ca735fe4bd1b03a7eb6eb15505554396?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Performance Metrics" }
  ];

  const [hovered, setHovered] = useState(false);

  const handleMinimize = (e) => {
    e.stopPropagation();
    onMinimize();
  };
  return (
    <section className=" relative flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full"
    onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col pb-7 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3 pl-4 w-full text-base font-semibold text-purple-500 border-b border-solid border-b-purple-500 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a61a66160dddc43a1f7ad596123a64997eb97c30163086eba7ae30cc00a15ca?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Common Dashboard</span>
            <Link href="/comondash"> <button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67140f1037e75d10081f573f7cddff4e9b365e6e807fef990dc3676e65c76eb4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
         </button>
            </Link> </div>
        </h2>
        <div className="flex flex-col mx-4 mt-2 text-sm font-medium leading-none min-h-[260px] text-indigo-950 max-md:mx-2.5">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 mt-1 first:mt-0 w-full rounded border border-gray-200 border-solid min-h-[40px]">
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

export default CommonDashboard;