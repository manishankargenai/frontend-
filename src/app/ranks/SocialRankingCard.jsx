import React from 'react';

export default function SocialRankingCard({ name, rank, image }) {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[242px]">
      <div className="flex gap-2.5 items-center p-2 w-full rounded-md border border-indigo-500 border-solid shadow-sm bg-slate-50">
        <div className="flex flex-col justify-center self-stretch my-auto">
          <div className="flex gap-3 items-center">
            <img loading="lazy" src={image} alt={`${name}'s profile`} className="object-contain shrink-0 self-stretch my-auto aspect-[0.98] w-[61px]" />
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="font-bold text-indigo-950">{name}</div>
              <div className="flex items-start self-start mt-3.5 text-indigo-600">
                <span className="w-[55px]">Rank - </span>
                <span className="font-bold">{rank}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}