// import React from 'react';
// import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
// import { useState } from 'react';

// function JobDescription({onMinimize}) {
//   const items = [
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cd7a97f5d5451b7488e2088200e05bfc61c77dd80cbcdd95c2930eba0f29340?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Skills Matrix" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/217418a3c750322e87ee2464ef0eeebcbbba29ecb32d75ed262aa59e2c47e392?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Experience Distribution" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17d5b864d33d65915fab52bf70262ada378eda3fd5ef4d5ffd665dcc7d897c35?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Location and Availability" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40c9c418908d556717d6d34782bc429d80f237b9137d2594f99cda25a745f0c1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Project Experience and Domain Expertise" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d927e39578ca4fe83d72edb8cdea0a057f56a8d4b180fee1c1811477127147f3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Soft Skills and Collaboration" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b72b12cc8dbe9a1ffa61d213d34315370f2ec5800f892ad2c5284177f831c943?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Tools and Technologies" }
//   ];
//   const [hovered, setHovered] = useState(false);

//   const handleMinimize = (e) => {
//     e.stopPropagation();
//     onMinimize();
//   };

//   return (
//     <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[435px] max-md:max-w-full" 
//     onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}>
//       {hovered && (
//         <button
//           onClick={handleMinimize}
//           className="left-1/2 transform -translate-x-1/2 mb-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
//         >
//           <MinimizeSharpIcon />
//         </button>
//       )}
//       <div className="flex flex-col pb-6 w-full bg-white shadow-sm max-md:max-w-full">
       
//         <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-sky-500 border-b border-solid border-b-sky-500 max-md:max-w-full">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/370b9cdf0dbe6d1e7ad2ab4adb53385a17f049446cc95d383dc45e0150231711?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//           <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
//             <span>Job description</span>
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8702b031f886444505645dc0c0900c33994e8285ce1e38b0ba7593f08070555f?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//           </div>
//         </h2>
//         <div className="flex flex-col mt-2 mr-4 ml-4 text-sm font-medium leading-none min-h-[260px] text-indigo-950 max-md:mx-2.5">
//           {items.map((item, index) => (
//             <div key={index} className="flex justify-between items-center p-2 mt-1 first:mt-0 w-full rounded border border-gray-200 border-solid min-h-[40px]">
//               <div className="flex gap-2 items-center self-stretch my-auto min-w-[240px] w-[293px]">
//                 <img loading="lazy" src={item.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//                 <div className="self-stretch my-auto">{item.text}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
//   );
// }

// export default JobDescription;













"use client";
import React from 'react';
import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';
import { useState } from 'react';
import Link from 'next/link';

function JobDescription({ onMinimize }) {
  const items = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cd7a97f5d5451b7488e2088200e05bfc61c77dd80cbcdd95c2930eba0f29340", text: "Skills Matrix" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/217418a3c750322e87ee2464ef0eeebcbbba29ecb32d75ed262aa59e2c47e392", text: "Experience Distribution" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/17d5b864d33d65915fab52bf70262ada378eda3fd5ef4d5ffd665dcc7d897c35", text: "Location and Availability" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40c9c418908d556717d6d34782bc429d80f237b9137d2594f99cda25a745f0c1", text: "Project Experience and Domain Expertise" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d927e39578ca4fe83d72edb8cdea0a057f56a8d4b180fee1c1811477127147f3", text: "Soft Skills and Collaboration" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b72b12cc8dbe9a1ffa61d213d34315370f2ec5800f892ad2c5284177f831c943", text: "Tools and Technologies" }
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
      <div className="flex flex-col pb-6 w-full bg-white shadow-sm max-md:max-w-full">
        <h2 className="flex gap-2.5 items-center py-2 pr-3.5 pl-4 w-full text-base font-semibold text-sky-500 border-b border-solid border-b-sky-500 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/370b9cdf0dbe6d1e7ad2ab4adb53385a17f049446cc95d383dc45e0150231711" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <div className="flex gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[371px]">
            <span>Job description</span>
            <Link href="/jd"><button> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8702b031f886444505645dc0c0900c33994e8285ce1e38b0ba7593f08070555f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </button></Link>
          </div>
        </h2>
        <div className="flex flex-col mt-2 mr-4 ml-4 text-sm font-medium leading-none min-h-[260px] text-indigo-950 max-md:mx-2.5">
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

export default JobDescription;