import React from 'react';

export default function ProfileSection1() {
  return (
    <section className="pt-12 pr-20 pl-6 bg-indigo-600 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f69dd458799a5947cee938087c172ff32ec4c8b211b325755cfeef3f08348a05?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="Profile" className="object-contain shrink-0 aspect-[1.01] w-[84px] max-md:mt-10" />
        </div>
        <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start text-center text-white max-md:mt-10">
            <h2 className="text-xl font-semibold">Floyd Miles</h2>
            <p className="mt-2.5 text-xs font-light">UI Developr@cognizant</p>
          </div>
        </div>
      </div>
    </section>
  );
}

