
"use client";
import React from 'react';



export default function DatabaseSection() 
 {
  return (
    <section className="flex flex-col grow shrink justify-center min-w-[240px] w-[386px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[483px]">
        <div className="flex flex-col pb-5 w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
          <div className="flex gap-2 items-center px-4 py-1.5 text-base font-medium leading-none whitespace-nowrap bg-indigo-50 border border-solid border-neutral-300 text-indigo-950">
            <div className="flex gap-1 items-center self-stretch my-auto min-w-[240px] w-[451px] max-md:max-w-full">
              <img
               loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be2c8611516d4fa8d4792bd6f85022515971bc9d5a2e52af0e157c7225d43332?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
              <div className="self-stretch my-auto min-w-[240px] w-[390px]">Database</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77479a8a7294ed8871ce5ac07fc13987e99d7f0b98d82f9b93cd7327ade0ceb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
            </div>
          </div>
          <div className="flex self-center mt-4 max-w-full w-[342px] max-md:mt-3">
            <div className="flex flex-col text-xs">
              <div className="flex flex-col w-full max-w-[219px]">
                <div className="flex gap-3 items-center w-full">
                  <div className="flex flex-col items-start self-stretch px-7 my-auto tracking-wide leading-none text-right rounded-none text-neutral-800 w-[134px]">
                    <div className="opacity-70">Database Design</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    30%
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-2 w-full">
                  <div className="flex flex-col items-start self-stretch px-9 my-auto tracking-wide leading-none text-right rounded-none text-neutral-800 w-[135px]">
                    <div className="opacity-70">SQL Proficiency</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    30%
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-2 w-full">
                  <div className="flex flex-col items-start self-stretch px-9 my-auto tracking-wide leading-3 text-right rounded-none text-neutral-800 w-[135px]">
                    <div className="opacity-70">Database Administration</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    15%
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 w-full max-w-[219px]">
                <div className="flex gap-3 items-center w-full">
                  <div className="flex flex-col items-start self-stretch px-9 my-auto tracking-wide leading-3 text-right rounded-none text-neutral-800 w-[134px]">
                    <div className="opacity-70">Backup and Recovery</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    10%
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-2 w-full whitespace-nowrap">
                  <div className="flex flex-col items-start self-stretch px-9 my-auto tracking-wide leading-none text-right rounded-none text-neutral-800 w-[135px]">
                    <div className="opacity-70">Security</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    5%
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-2 w-full">
                  <div className="flex flex-col items-start self-stretch px-6 my-auto tracking-wide leading-none text-right rounded-none text-neutral-800 w-[135px]">
                    <div className="opacity-70">NoSQL Databases</div>
                  </div>
                  <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
                    5%
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 w-px border border-solid bg-neutral-300 border-neutral-300 h-[187px]"></div>
            <div className="flex flex-col items-start self-start">
              <div className="flex shrink-0 self-stretch bg-blue-100 h-[18px]"></div>
              <div className="flex shrink-0 self-stretch mt-4 bg-blue-200 h-[18px]"></div>
              <div className="flex shrink-0 mt-4 bg-blue-400 h-[18px] w-[66px]"></div>
              <div className="flex shrink-0 mt-3 w-10 bg-sky-500 h-[18px]"></div>
              <div className="flex shrink-0 mt-3.5 bg-sky-700 h-[18px] w-[23px]"></div>
              <div className="flex shrink-0 mt-3.5 bg-blue-900 h-[18px] w-[23px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

