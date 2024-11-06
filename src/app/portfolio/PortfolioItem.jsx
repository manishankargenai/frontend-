// import React from 'react';

// export default function PortfolioItem({ imageSrc }) {
//   return (
//     <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[242px]">
//       <img loading="lazy" src={imageSrc} alt="Portfolio project" className="object-contain w-full aspect-square" />
//       <div className="flex flex-col mt-4 w-full">
//         <h3 className="text-xl font-semibold">Project title</h3>
//         <p className="mt-2 text-lg leading-loose">UI, Art drection</p>
//       </div>
//     </article>
//   );
// }



export function PortfolioItem({ image, title, description }) {
  return (
    <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[242px]">
      <img 
        loading="lazy" 
        src={image} 
        alt={title} 
        className="object-contain w-full aspect-square" 
      />
      <div className="flex flex-col mt-4 w-full">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-lg leading-loose">{description}</p>
      </div>
    </article>
  );
}