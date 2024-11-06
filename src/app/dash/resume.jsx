"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import "./styles.css"


//import JobFilter from '../resumeof/jobfilter';

function Resume({onMinimize}) {
  const items = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/801ecc177f4bc6a37e6dc54b8f658cd15be9bac9f3780fbf531f59e64ac20f59?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Skills" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fa69cdf433c0c436d932402bf1caabdb28b5a184f4174f8849ba9272ea2ee28?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Experiences" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5dffb1ac45ef3b8a10c775c167ad659670fa3f9bfc69aa01434e7acf03ce83ad?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Education" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a709afdfb36cadab0d462975513dab75b80cd2d2b34bf4e9d5a1176182c37c5c?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Project Experience" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98901ed105b0e8a4816f5f2130bba51b49a25dae84da9fd40b4a595ea77790a5?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Soft Skills" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e06762a85c91b135dea208a42b46d2f330eb9ee157f8c0724b2e49c27c8988d?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Tools and Technologies" }
  ];
  const [hovered, setHovered] = useState(false);

  const handleMinimize = (e) => {
    e.stopPropagation();
    onMinimize();
  };
  return (

    
    <section className=" relative flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="flex flex-col pb-6 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-lime-600 whitespace-nowrap border-b border-solid border-b-lime-600 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f366fef88f602d28e40b6672148f3daaf5c8392fd855d11589060b3350b621?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Resume</span>
           <Link href="/bot"> <button>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dbe3da57652e7615453a120da9f5e1a1ea660bed464f515eaa3c866789c67d4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
           
           </button>
           </Link>
          </div>
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

export default Resume;