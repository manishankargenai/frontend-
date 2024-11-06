
"use client";
import React from 'react';

export default function Footer()
  {
  return (
    <footer className="flex gap-3 items-start self-end mt-6 text-base font-semibold whitespace-nowrap">
      <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 bg-white rounded-md border border-solid shadow-sm border-neutral-300 text-slate-700 w-[111px]">
        Cancel
      </button>
      <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 text-white bg-indigo-500 rounded-md border border-indigo-500 border-solid shadow-sm w-[111px]">
        Save
      </button>
    </footer>
  );
};
