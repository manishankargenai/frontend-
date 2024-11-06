

// // ThresholdScore.js
// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';

// function ThresholdScore({ onMinimize }) {
//   const categories = [
//     { color: "bg-sky-400", text: "Job description" },
//     { color: "bg-lime-600", text: "Resume" },
//     { color: "bg-red-500", text: "Code" },
//     { color: "bg-purple-500", text: "Behavioural skills" },
//     { color: "bg-indigo-500", text: "Common" },
//     { color: "bg-amber-500", text: "Communication Skills" }
//   ];

//   const [hovered, setHovered] = useState(false);

//   return (
//     <section
//       className="flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="flex flex-col pb-20 w-full bg-white shadow-sm max-md:max-w-full">
//         <h2 className="flex gap-2.5 items-center px-4 py-2 text-base font-semibold text-teal-400 border-b border-solid border-b-teal-400 max-md:-mr-0.5 max-md:max-w-full">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//           <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
//             <span>Threshold Score</span>
//             <Link href="/top">
//               <button>
//                 <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b3ca0d860fd9bb197ab7bd8899e32b2091d19f4add052ce219142ed4da3bdc?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//               </button>
//             </Link>
//           </div>
//         </h2>
        // <div className="self-start ml-5 max-md:ml-2.5">
        //   <div className="flex gap-5 max-md:flex-col">
        //     <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
        //       <div className="flex z-10 flex-col justify-center items-start self-stretch my-auto mr-0 text-sm text-zinc-700 max-md:mt-10">
        //         {categories.map((category, index) => (
        //           <div key={index} className="flex gap-2 items-center mt-2.5 first:mt-0">
        //             <div className={`flex shrink-0 self-stretch my-auto w-3 h-3 ${category.color} rounded-3xl`} />
        //             <div className="self-stretch my-auto">{category.text}</div>
        //           </div>
        //         ))}
        //       </div>
        //     </div>
        //     <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
        //       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0d743ea71cf8a5057bd997c073198cfc1a9c8c1dcc994ad5eb3236cde65172?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="Threshold Score Chart" className="object-contain grow w-full aspect-[0.99]" />
        //     </div>
        //   </div>
        // </div>
      // </div>
//       <div style={{ visibility: hovered ? 'visible' : "hidden", marginBottom: "1rem" }}>
//   <button onClick={onMinimize}>
//     <MinimizeSharpIcon />
//   </button>
// </div>

//     </section>
//   );
// }

// export default ThresholdScore;



"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';

function ThresholdScore({ onMinimize }) {
  const categories = [
    { color: "bg-sky-400", text: "Job description" },
    { color: "bg-lime-600", text: "Resume" },
    { color: "bg-red-500", text: "Code" },
    { color: "bg-purple-500", text: "Behavioural skills" },
    { color: "bg-indigo-500", text: "Common" },
    { color: "bg-amber-500", text: "Communication Skills" }
  ];

  const [hovered, setHovered] = useState(false);

  const handleMinimize = (e) => {
    e.stopPropagation();
    onMinimize();
  };

  return (
    <section
      className="relative flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col pb-20 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center px-4 py-2 text-base font-semibold text-teal-400 border-b border-solid border-b-teal-400 max-md:-mr-0.5 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Threshold Score</span>
            <Link href="/top">
              <button>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b3ca0d860fd9bb197ab7bd8899e32b2091d19f4add052ce219142ed4da3bdc" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              </button>
            </Link>
          </div>
        </h2>
        <div className="self-start ml-5 max-md:ml-2.5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex z-10 flex-col justify-center items-start self-stretch my-auto mr-0 text-sm text-zinc-700 max-md:mt-10">
                {categories.map((category, index) => (
                  <div key={index} className="flex gap-2 items-center mt-2.5 first:mt-0">
                    <div className={`flex shrink-0 self-stretch my-auto w-3 h-3 ${category.color} rounded-3xl`} />
                    <div className="self-stretch my-auto">{category.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0d743ea71cf8a5057bd997c073198cfc1a9c8c1dcc994ad5eb3236cde65172?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="Threshold Score Chart" className="object-contain grow w-full aspect-[0.99]" />
            </div>
          </div>
        </div>
      </div>
      {hovered && (
        <button
          onClick={handleMinimize}
          className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-gray-200/80 hover:bg-gray-300/80 flex items-center justify-center transition-colors duration-200"   >
          
          <MinimizeSharpIcon />
        </button>
      )}
    </section>
  );
}

export default ThresholdScore;
