import React from 'react';

export default function PostInput() {
  return (
    <article className="flex flex-col px-4 py-4 w-full font-medium bg-white rounded-md border border-indigo-400 border-solid max-md:max-w-full">
      <div className="flex gap-2.5 self-start text-lg text-slate-500">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1c8960d870ef1d15dd7bf0229a653a760030a8873701adbb1da27e2957d99e?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="User profile" className="object-contain shrink-0 w-11 rounded-full aspect-[0.98]" />
        <label htmlFor="postInput" className="flex-auto my-auto">What's on your mind, Larry?</label>
      </div>
      <button className="flex gap-2.5 justify-center items-center self-end px-2 py-4 mt-12 text-sm text-white capitalize whitespace-nowrap bg-indigo-600 rounded-md shadow-sm min-h-[40px] w-[61px] max-md:mt-10">
        Post
      </button>
    </article>
  );
}