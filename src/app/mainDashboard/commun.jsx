import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';

function CommunicationSkills({onMinimize}) {
  const skills = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6414b3a80636367454e426eef38a5df6f9cf5c1a954ecf825e64fead118793b4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Public Speaking" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2f8f0a8283b927729c8e230fff0d1fd27bf13398e16d5c813a842881b70e79f?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Message" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca2ce6bc3a842bbc04e7aa256b16a0c305f98362c8aee2dc4da47c6d5354e7c4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Presentation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c7b4390154945f9ca23b02ace31fcff344498cfe2b2a66cd5feca3df11d1b9a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Diplomacy" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/927a5e28e0c2a9312d8b4d807bd53d82b9a47e304e9090e4417c373e7fca3f0b?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Explanation" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf207709e12af36fc8b3446a92e521154f3da1cc1ee2926e305e8ded8f1098b?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Conflict" }
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
      <div className="flex flex-col pb-6 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-amber-500 border-b border-solid border-b-amber-500 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9bbbba430a587c5734e37a25577b97b3b7d5ac00d88705ab561bbfc527014bf?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />

          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">

            <span>Communication Skills</span>
            <Link href="/clouds"> <button ><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5d320d16ca13ca311856d6941399a7c588fd1a78a6ced6d401dc75041dcff60?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </button>
            </Link></div>
        </h2>
        <div className="flex flex-col mx-4 mt-2 text-sm font-medium leading-none text-indigo-950 max-md:mx-2.5">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center p-2 mt-1 first:mt-0 w-full whitespace-nowrap rounded border border-gray-200 border-solid min-h-[40px]">
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

export default CommunicationSkills;
