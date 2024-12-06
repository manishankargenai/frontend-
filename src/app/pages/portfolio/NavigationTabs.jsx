import React from 'react';

export default function NavigationTabs() {
  const tabs = [
    { id: 1, name: '', width: 'w-[600px]' },
    
    { id: 3, name: 'Profile', width: 'w-[102px]' },
    { id: 4, name: 'Followers', width: 'w-[97px]' },
    { id: 5, name: 'Friends', width: 'w-[97px]' },
    { id: 6, name: 'Portfolio', width: 'w-[108px]',  },
    { id: 7, name: 'Social Ranking', width: 'w-[188px]' }
  ];

  return (
    <nav className="flex flex-wrap items-center text-sm tracking-normal leading-3 capitalize text-slate-700 max-md:max-w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap ${tab.width} ${
            tab.active 
              ? 'font-bold border-b-2 border-solid border-b-indigo-700'
              : 'border-b border-solid border-b-neutral-300'
          }`}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
}