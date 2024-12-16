import React from 'react';

export default function SocialStats({ friends, followers }) {
  return (
    <div className="flex flex-col self-stretch w-full">
      <div className="flex gap-2.5 items-center p-2 w-full bg-white rounded-md border border-indigo-500 border-solid shadow-sm">
        <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-indigo-600 rounded-md border border-indigo-600 border-solid shadow-sm">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cc8a9558d3b4c2ddf57a39b011047acfbe4e120b442d302457e9b306f1f6050?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
          <div className="my-auto text-sm font-medium leading-5 text-indigo-500 capitalize w-[175px]">
            <span className="text-base font-bold text-indigo-950">{friends}k</span>
            <br />
            <span className="text-indigo-500">Friends</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21a6abffa7531ff39c12da8ab28795ef060b7c4f66bb54abb7e5c48f73ad7ff?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
      </div>
      <div className="flex gap-2.5 items-center p-2 mt-2 w-full bg-white rounded-md border border-indigo-500 border-solid shadow-sm">
        <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-indigo-600 rounded-md border border-indigo-600 border-solid shadow-sm">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cc8a9558d3b4c2ddf57a39b011047acfbe4e120b442d302457e9b306f1f6050?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          </div>
          Continuing from where we left off:

          <div className="my-auto text-sm font-medium leading-5 text-indigo-500 capitalize w-[174px]">
            <span className="text-base font-bold text-indigo-950">{followers}k</span>
            <br />
            <span className="text-indigo-500">Followers</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21a6abffa7531ff39c12da8ab28795ef060b7c4f66bb54abb7e5c48f73ad7ff?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
        </div>
      </div>
    </div>
  );
}

