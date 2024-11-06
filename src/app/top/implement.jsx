
"use client";
import React from 'react';

function ImplementationItem({ title, percentage }) {
  return (
    <div className="flex gap-10 justify-between items-center p-2 mt-1 w-full rounded border border-solid bg-slate-50 border-neutral-300 min-h-[40px] max-md:max-w-full">
      <div className="gap-2 self-stretch my-auto text-sm leading-none text-indigo-950 w-[213px]">{title}</div>
      <div className="flex relative gap-3.5 items-start self-stretch my-auto w-[78px]">
        <div className="flex z-0 shrink-0 my-auto h-2 rounded-3xl bg-zinc-100 w-[78px]" />
        <div className="flex absolute bottom-0 -left-px z-0 shrink-0 self-start w-3.5 h-2 bg-purple-500 rounded-3xl" style={{width: percentage}} />
      </div>
      <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto text-xs tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
        {percentage}
      </div>
    </div>
  );
}

function ImplementationSection() {
  const implementationItems = [
    { title: "Database Setup", percentage: "35%" },
    { title: "Backup and Recovery", percentage: "20%" },
    { title: "Security Configuration", percentage: "20%" },
    { title: "Scalability and High Availability", percentage: "10%" },
    { title: "Use Real-Life Examples", percentage: "5%" },
    { title: "Visualize Your Proficiency", percentage: "10%" },
    { title: "Performance Tuning", percentage: "10%" }
  ];

  return (
    <section className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[386px] max-md:max-w-full">
      <div className="flex flex-col pb-3.5 w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
        <div className="flex  gap-2.5 items-center px-4 py-1.5 w-full text-base font-medium leading-none whitespace-nowrap bg-indigo-50 border border-solid border-neutral-300 text-indigo-950 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/49475660e1328e46ab9c192a0d1bb8accab5041a460b5e6e6e01882adddb5827?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <h3 className="flex grow shrink gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[412px]">
            <span className="self-stretch my-auto">Implementation</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77479a8a7294ed8871ce5ac07fc13987e99d7f0b98d82f9b93cd7327ade0ceb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </h3>
        </div>
        <div className="flex flex-col mx-3 mt-2.2 max-md:mr-2.5 max-md:max-w-full">
          {/* <div className="flex gap-10 justify-between items-center p-2 w-full rounded border border-solid bg-slate-50 border-neutral-300 min-h-[40px] max-md:max-w-full">
            <div className="gap-2 self-stretch my-auto text-sm leading-none text-indigo-950 w-[219px]">Database Setup</div>
            <div className="flex relative gap-3.5 items-start self-stretch my-auto w-[78px]">
              <div className="flex z-0 shrink-0 my-auto h-2 rounded-3xl bg-zinc-100 w-[78px]" />
              <div className="flex absolute bottom-0 -left-px z-0 shrink-0 self-start w-3.5 h-2 bg-purple-500 rounded-3xl" />
            </div>
            <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto text-xs tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
              35%
            </div>
          </div> */}
          {implementationItems.map((item, index) => (
            <ImplementationItem key={index} title={item.title} percentage={item.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImplementationSection;

