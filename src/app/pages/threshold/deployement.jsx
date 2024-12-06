
"use client";
import React from 'react';

function DeploymentSkill({ name, percentage }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="flex flex-col items-start self-stretch my-auto tracking-wide leading-3 rounded-none text-neutral-800 w-[134px]">
        <div className="opacity-70">{name}</div>
      </div>
      <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
        {percentage}
      </div>
    </div>
  );
}

function DeploymentSection() {
  const skills = [
    { name: "Deployment Strategies", percentage: "30%" },
    { name: "Infrastructure Provisioning", percentage: "30%" },
    { name: "Application Deployment", percentage: "15%" },
    { name: "Automation and CI/CD", percentage: "10%" },
    { name: "Monitoring and Logging", percentage: "5%" },
    { name: "Scaling and Performance", percentage: "5%" }
  ];

  return (
    <section className="flex flex-col self-stretch my-auto min-w-[240px] w-[612px]">
      <div className="flex flex-col pb-20 w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
        <div className="flex  gap-2.5 items-center px-4 py-1.5 w-full text-base font-medium leading-none whitespace-nowrap bg-indigo-50 border border-solid border-neutral-300 text-indigo-950 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce8992c176268e2c6078b778512139e0057130cae50b567b3f0a5664c27bd261?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          <h3 className="flex grow shrink gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[412px]">
            <span className="self-stretch my-auto">Deployment</span>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77479a8a7294ed8871ce5ac07fc13987e99d7f0b98d82f9b93cd7327ade0ceb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </h3>
        </div>
        <div className="flex self-center mt-16 max-w-full w-[342px] max-md:mt-10">
          <div className="flex flex-col text-xs">
            <div className="flex flex-col w-full max-w-[219px]">
              {skills.slice(0, 3).map((skill, index) => (
                <DeploymentSkill key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
            <div className="flex flex-col mt-2 w-full max-w-[219px]">
              {skills.slice(3).map((skill, index) => (
                <DeploymentSkill key={index} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          <div className="shrink-0 w-px border border-solid bg-neutral-300 border-neutral-300 h-[187px]" />
          <div className="flex flex-col items-start self-start">
            <div className="flex shrink-0 self-stretch bg-red-500 h-[18px]" />
            <div className="flex shrink-0 self-stretch mt-4 bg-yellow-400 h-[18px]" />
            <div className="flex shrink-0 mt-4 bg-cyan-500 h-[18px] w-[66px]" />
            <div className="flex shrink-0 mt-3 w-10 bg-purple-500 h-[18px]" />
            <div className="flex shrink-0 mt-3.5 bg-green-500 h-[18px] w-[23px]" />
            <div className="flex shrink-0 mt-3.5 bg-sky-600 h-[18px] w-[23px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeploymentSection;

