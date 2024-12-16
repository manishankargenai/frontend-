import React from 'react';
import SearchBar23 from './searchbari';
import ActionButton2 from './actbut';
import ProfileInfo23 from './provi';

export default function Header3() {
  return (
    <header className="flex flex-col items-center pb-10 bg-indigo-50">
      <div className="flex flex-col self-stretch w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-between items-center px-16 py-1.5 w-full bg-white border-b border-solid border-b-stone-300 min-h-[48px] max-md:px-5 max-md:max-w-full">
            <h1 className="gap-1 self-stretch my-auto text-2xl font-bold uppercase rotate-[-0.032deg] text-slate-700 w-[181px]">
              <span className="uppercase text-slate-700">FastHire</span>99
            </h1>
            <ProfileInfo23 />
          </div>
          <nav className="flex flex-wrap items-center py-1 pr-3.5 pl-16 mt-2 w-full text-sm rounded-sm max-md:pl-5 max-md:max-w-full">
            <a href="#" className="gap-3 self-stretch px-1 my-auto whitespace-nowrap text-slate-700">Dashboard</a>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5c9d948f9fe4d16ca6a1d11d11da79735ef87c202525148cadea1752fe8df40?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <a href="#" className="gap-3 self-stretch px-1 my-auto font-medium text-indigo-600">Social Profile</a>
          </nav>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
          <SearchBar23 />
          <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
            <ActionButton2 text="Social Profile" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e1989fa9ecf3549a8fca33a777657f9efdd7e3a606de00044a3f6cf7fc0f6787?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" active={true} />
            <ActionButton2 text="Preview" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5b6546f7231d77db067e5c5c136f08e4747eadbc6f6c72ed466be3fcc3ed27?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
            <ActionButton2 text="Scoring" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02fbc5fb1331934131fac4876333a3e4e635d6eb8318d452574e8f72959dce98?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
            <ActionButton2 text="View" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3fd20ac274696177bc9368c1cb82fa375c3933a4861d101e69aa3747cfee6a44?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" />
          </div>
        </div>
      </div>
    </header>
  );
}

