import React from 'react';

export default function SearchBar() {
  const actions = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload JD" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload Resume" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Link to HR DB" },
    
  ];
  return (
    <><div className="flex overflow-hidden gap-2.5 items-center self-stretch px-2 py-1.5 my-auto font-light leading-none text-gray-400 whitespace-nowrap bg-white rounded-md shadow-sm min-h-[36px] min-w-[240px] w-[246px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b424e24f1da6f78b2229a98710e0547619cb6edb775667ad07afb579152a1d78?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <input type="text" placeholder="Search" className="self-stretch my-auto w-[119px] bg-transparent border-none focus:outline-none" />
    </div><div className="flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
        {actions.map((action, index) => (
          <button key={index} className="flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px]">
            <img loading="lazy" src={action.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
            <span className="self-stretch my-auto">{action.text}</span>
          </button>
        ))}
      </div></>
  );
}

