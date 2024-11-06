"use client";
import React from 'react';
import Link from "next/link";
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';

function Coding({onMinimize}) {
  const skills = [
    "HTML", "CSS", "Bootstrap", "Next.js", "JavaScript",
    "User Interface Designing", "JS", "Figma", "UX/UI",
    "Wireframe", "Photoshop", "Prototyping", "Python",
    "C language", "Java", "React.js", "DB"
  ];

  const [hovered, setHovered] = useState(false);

  const handleMinimize = (e) => {
    e.stopPropagation();
    onMinimize();
  };
  return (
    <section className="relative flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}>
      <div className="flex flex-col pb-16 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-red-500 whitespace-nowrap border-b border-solid border-b-red-500 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee540726dacc9d446f921570c8109f14d1ea1fd7f6f433518107c542efc09907?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Coding</span>
            <Link href="/coding"><button><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa323c5a4cb508ce60c4f4b90abd14b762959b60aebdb8d7ae14ebbc5baf2e0a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            </button>
            </Link>
          </div>
        </h2>
        <div className="flex flex-wrap gap-2 items-start mt-2.5 mr-4 ml-4 text-sm font-medium text-center capitalize text-indigo-950 max-md:mx-2.5">
          {skills.map((skill, index) => (
            <div key={index} className="gap-2.5 self-stretch px-4 py-2.5 whitespace-nowrap bg-white rounded-3xl border border-indigo-100 border-solid">
              {skill}
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

export default Coding;