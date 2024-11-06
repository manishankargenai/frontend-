// import React from 'react';

// export default function FollowerCard({ name, location, image }) {
//   return (
//     <article className="flex gap-2.5 items-center p-2 w-full rounded-md border border-indigo-500 border-solid shadow-sm bg-slate-50">
//       <div className="flex flex-col justify-center self-stretch my-auto min-w-[240px] w-[287px]">
//         <div className="flex gap-3 items-center self-start text-base leading-none">
//           <img loading="lazy" src={image} alt={`${name}'s profile picture`} className="object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[61px]" />
//           <div className="flex flex-col justify-center self-stretch my-auto">
//             <div className="font-bold text-indigo-950">{name}</div>
//             <div className="mt-3 text-indigo-600">{location}</div>
//           </div>
//         </div>
//         <button className="flex gap-2.5 justify-center items-center px-2 py-1.5 mt-3 w-full text-sm font-medium whitespace-nowrap bg-indigo-100 rounded-md border border-indigo-300 border-solid max-w-[287px] min-h-[36px] text-slate-700">
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a199b80e5c00ca0c0022cc04ff4b2151ec8b58d3e2dd546b2680fbb7fb78b3e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//           <span className="self-stretch my-auto">Followed</span>
//         </button>
//       </div>
//     </article>
//   );
// }











// import * as React from "react";

// export function FollowerCard({ name, location, image }) {
//   return (
//     <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[243px]">
//       <div className="flex gap-2.5 items-center p-2 w-full rounded-md border border-indigo-500 border-solid shadow-sm bg-slate-50">
//         <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px]">
//           <div className="flex gap-3 items-center self-start text-base leading-none">
//             <img loading="lazy" src={image} alt={`${name}'s profile`} className="object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[61px]" />
//             <div className="flex flex-col justify-center self-stretch my-auto">
//               <h4 className="font-bold text-indigo-950">{name}</h4>
//               <p className="mt-3 text-indigo-600">{location}</p>
//             </div>
//           </div>
//           <button className="flex gap-2.5 justify-center items-center px-2 py-1.5 mt-3 w-full text-sm font-medium whitespace-nowrap bg-indigo-100 rounded-md border border-indigo-300 border-solid max-w-[287px] min-h-[36px] text-slate-700">
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a199b80e5c00ca0c0022cc04ff4b2151ec8b58d3e2dd546b2680fbb7fb78b3e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//             <span>Followed</span>
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// }









import React from 'react';

 export default function UserCard({ imageUrl, name, location }) {
  return (
    <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[243px]">
      <div className="flex gap-2.5 items-center p-2 w-full rounded-md border border-indigo-500 border-solid shadow-sm bg-slate-50">
        <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px]">
          <div className="flex gap-3 items-center self-start text-base leading-none">
            <img loading="lazy" src={imageUrl} alt={`Profile picture of ${name}`} className="object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[61px]" />
            <div className="flex flex-col justify-center self-stretch my-auto">
              <h2 className="font-bold text-indigo-950">{name}</h2>
              <p className="mt-3 text-indigo-600">{location}</p>
            </div>
          </div>
          <button className="flex gap-2.5 justify-center items-center px-2 py-1.5 mt-3 w-full text-sm font-medium whitespace-nowrap bg-indigo-100 rounded-md border border-indigo-300 border-solid max-w-[287px] min-h-[36px] text-slate-700">
            <div className="flex gap-1 items-center self-stretch my-auto">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a199b80e5c00ca0c0022cc04ff4b2151ec8b58d3e2dd546b2680fbb7fb78b3e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              <span>Followed</span>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
}

