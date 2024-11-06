"use client";
import React from 'react';

// import ActionButtons from './actb';
// import ProfileInfo from './proff';
import SearchBar from "../top/searchBar";
import ActionButtons from '../dash/act';
import ProfileActions from '../top/profile';
 export default function Header() {
  return (
    <header className="flex flex-col self-stretch w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center px-16 py-1.5 w-full bg-white border-b border-solid border-b-stone-300 min-h-[48px] max-md:px-5 max-md:max-w-full">
        <h1 className="gap-1 self-stretch my-auto text-2xl font-bold uppercase rotate-[-0.032deg] text-slate-700 w-[181px]">
          <span className="uppercase text-slate-700">FastHire</span>99
        </h1>
        

    
        <div className="flex gap-10 items-center self-stretch my-auto text-center w-[58px]">
          <div className="flex gap-9 items-center self-stretch my-auto min-h-[36px] w-[58px]">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <div className="flex gap-4 items-center self-stretch my-auto">
                <div className="flex gap-1.5 items-center self-stretch my-auto">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b9d0deb94edbc51529ae070a6c941023ea77dbec1049ebec2996eade67bc489?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square" />
                  <div className="flex flex-col items-start self-stretch my-auto">
                    <div className="text-sm font-medium text-slate-700">CSR GenAI</div>
                    <div className="mt-1.5 text-xs text-gray-500">Recruiter</div>
                  </div>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c88c435fc1fa01526abbdd224bc7a45eff4ba2712a6af5f2a617e6719c192713?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex items-center py-1 pr-3.5 pl-16 mt-2 w-full text-base font-bold leading-none whitespace-nowrap rounded-sm text-slate-700 max-md:pl-5 max-md:max-w-full">
        <div className="gap-3 self-stretch px-1 my-auto">Dashboard</div>
      </nav>
      <div className="flex flex-wrap gap-10 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
        <SearchBar />
        <ActionButtons />
        <ProfileActions/>
      </div>
    </header>
  );
}


   
 


