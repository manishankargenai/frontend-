import React from 'react';

export default function TabNavigation() {
  return (
    <nav className="flex flex-wrap items-center text-sm tracking-normal leading-3 capitalize text-slate-700 max-md:max-w-full">
      <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 min-w-[240px] w-[331px]">
        Tab
      </a>
      <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 min-w-[240px] w-[389px]">
        Tab
      </a>
      <div className="flex flex-wrap items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[102px]">
          Profile
        </a>
        <a href="#" aria-current="page" className="gap-3 self-stretch px-3 py-4 my-auto font-bold whitespace-nowrap border-b-2 border-solid border-b-indigo-700 w-[97px]">
          Followers
        </a>
        <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[97px]">
          Friends
        </a>
        <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[108px]">
          Portfolio
        </a>
        <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto border-b border-solid border-b-neutral-300 w-[188px]">
          Social Ranking
        </a>
      </div>
    </nav>
  );
}