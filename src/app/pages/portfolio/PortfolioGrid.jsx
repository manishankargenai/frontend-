// import React from 'react';
// import PortfolioItem from './PortfolioItem';

// export default function PortfolioGrid() {
//   const portfolioItems = [
//     { id: 1, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad661b8258f5f8763f5f0684f84787a1bf9d4a7c3d860e0a2d1e0a8a59170259?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 2, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7afd93252ef2f41fa01e159b7afe62855aa0f73353b9249109d098e127456890?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 3, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b29d3dfd717317be0d7ec0f2ec44de4dd1f04e7ce96d046a13e1b7d8dcaf0bbd?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 4, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ad661b8258f5f8763f5f0684f84787a1bf9d4a7c3d860e0a2d1e0a8a59170259?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 5, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/95ac8d1c9200280976f8928f62eeacb92da474edfd8b3b3c036053cba8d49bcc?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 6, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2b3f6c736bf16f7ea39fa89322289cd26e3c5cdc14e060644d5a2cb709019dc?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 7, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/90dc45fa5b532809fd90ec343ffdb0bf34576896fbf54a615fb70ac2a17db30a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' },
//     { id: 8, imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d9dc52e196f65e21c6448bed0a66e6f681e67ca5fe3f1ff9a6bd16bbae8d40b5?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9' }
//   ];

//   return (
//     <section className="flex flex-col px-6 mt-6 mb-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
//       <h2 className="self-start text-2xl font-semibold text-center text-slate-700">Portfolio</h2>
//       <div className="flex flex-col mt-11 w-full text-zinc-800 max-md:mt-10 max-md:max-w-full">
//         <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
//           {portfolioItems.slice(0, 4).map((item) => (
//             <PortfolioItem key={item.id} imageSrc={item.imageSrc} />
//           ))}
//         </div>
//         <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
//           {portfolioItems.slice(4).map((item) => (
//             <PortfolioItem key={item.id} imageSrc={item.imageSrc} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { PortfolioItem } from './PortfolioItem';
import { portfolioItems } from './PortfolioData';

export function PortfolioGrid() {
  return (
    <section className="flex flex-col px-6 mt-6 mb-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
      <h2 className="self-start text-2xl font-semibold text-center text-slate-700">
        Portfolio
      </h2>
      <div className="flex flex-col mt-11 w-full text-zinc-800 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          {portfolioItems.slice(0, 4).map(item => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          {portfolioItems.slice(4, 8).map(item => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


