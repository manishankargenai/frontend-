import React from 'react';

 export default function ActionButton2({ text, icon, active = false }) {
  const baseClasses = "flex gap-2.5 items-center p-2 my-auto rounded-md border border-solid shadow-sm min-h-[36px]";
  const activeClasses = active ? "text-white bg-indigo-600" : "bg-indigo-100 border-indigo-500 text-indigo-700";

  return (
    <button className={`${baseClasses} ${activeClasses}`}>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

