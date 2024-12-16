import React from 'react';

export default function SocialLink({ icon, url }) {
  return (
    <div className="flex gap-2.5 items-center py-2 pl-2 mt-2 w-full bg-white rounded-md border border-violet-200 border-solid">
      <div className="flex gap-1 items-center self-stretch my-auto min-w-[240px]">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        <a href={url} className="self-stretch my-auto text-ellipsis overflow-hidden">{url}</a>
      </div>
    </div>
  );
}

