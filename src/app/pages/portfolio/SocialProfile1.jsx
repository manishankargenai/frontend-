import React from 'react';
import ProfileHead24 from './ProfileHeader';
import NavigationTabs from './NavigationTabs';
//import PortfolioGrid from './PortfolioGrid';
import Header3 from"../../sprofile/Header";
import Link from 'next/link';

export default function Social2() {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-24 bg-indigo-50">
      <Header3 />
      
    <main className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
      <article className="flex flex-col pb-96 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
        <header className="flex flex-wrap gap-10 justify-between items-center px-4 py-2 w-full border-b border-indigo-500 min-h-[40px] max-md:max-w-full">
          <div className="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-indigo-600">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1797a7e592e007bed6feb4918bb8bac12a36d8b25a8647260684d873a78b0dfe?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <h1 className="self-stretch my-auto">Social Profile</h1>
          </div>
          <div className="flex  justify-end gap-1 items-center self-stretch my-auto min-w-[240px] w-[627px] max-md:max-w-full">
          <Link href="/sprofile"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ea30ec29d76f4a801da11b95bfd74e0ee9e2ebf68a2f37ce1250f2cdf740ba?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          
          </Link>
          </div>
        </header>
        <ProfileHead24 />
        <NavigationTabs />
        {/* <PortfolioGrid /> */}
      </article>
    </main>
    </div>
  );
}