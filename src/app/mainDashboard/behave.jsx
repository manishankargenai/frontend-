import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
function BehaviouralSkills({onMinimize}) {
  const skills = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b21576ceeee15f2181af8b9ae951b42393c6ac4f3941aa669e6ef7c93df6bfa?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Teamwork" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/230aecd3b87128acf307b293b22d8eb1e78d314ac15913f1f41560e1d9019044?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Organization-Specific" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb4e5ea69e2adf618c4d6df17f2ae0ab51268e74ac7e5261324888403a431266?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Leadership" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c59a29e7e1d5266e6263861c7e45ba07659b129f675bfdfb843df5a7912ef46?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Success" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c69b46d2430992a735ab6cc7c1f88f83397c20fa20b201afebc1281ad5f3ca5?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Adaptability" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9bec3ffeb143fe1b5e075cc2b181d8e4165f2b200fd7bb50497d9b2aadb9722?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Responsibility" }
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
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-indigo-500 border-b border-solid border-b-indigo-500 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a448a04235407c8626e9e123b5c204b12191e8ea2b6c31cad52bab1efe0fcc2?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Behavioural skills</span>
            <Link href="/pages/behavior"> <button>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e11855dda7740b815a1769ac261bf7c96c31c01f29013ab3ab201affaf981b5f?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          
            </button>
            </Link>
            </div>
        </h2>
        <div className="flex flex-col mx-4 mt-2 text-sm font-medium leading-none whitespace-nowrap text-indigo-950 max-md:mx-2.5">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center p-2 mt-1 first:mt-0 w-full rounded border border-gray-200 border-solid min-h-[40px]">
              <div className="flex gap-2 items-center self-stretch my-auto min-w-[240px] w-[293px]">
                <img loading="lazy" src={skill.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                <div className="self-stretch my-auto">{skill.text}</div>
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

export default BehaviouralSkills;