import React from 'react';

export default function SamplePrompts() {
  const prompts = [
    {
      title: "Cloud Services Understanding",
      color: "text-indigo-500",
      description: "Knowledge of different cloud service models (IaaS, PaaS, SaaS) and providers (AWS, Azure, Google Cloud)."
    },
    {
      title: "Infrastructure Management",
      color: "text-sky-600",
      description: "Skills in managing virtual machines, storage, and networking in the cloud. Skills in managing virtual machines, storage,"
    },
    {
      title: "Deployment and Automation",
      color: "text-green-400",
      description: "Experience with deploying applications and using automation tools (e.g., Terraform, CloudFormation)."
    }
  ];

  return (
    <div className="flex flex-col mt-3 w-full">
      <nav className="flex flex-col w-full text-sm tracking-normal leading-3 capitalize text-slate-700">
        <div className="w-full border border-solid bg-neutral-300 border-neutral-300 min-h-[1px]" />
        <div className="flex justify-between items-center w-full">
          <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto font-bold border-b-2 border-solid border-b-indigo-700 w-[152px]">
            Sample Prompts
          </a>
          <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto border-b border-solid border-b-slate-500 w-[150px]">
            Your history
          </a>
        </div>
      </nav>
      <div className="flex flex-col mt-5 w-full">
        {prompts.map((prompt, index) => (
          <div key={index} className="flex flex-col mt-2 w-full rounded-md">
            <h3 className={`text-sm font-semibold tracking-wide leading-none ${prompt.color}`}>
              {prompt.title}
            </h3>
            <div className="self-end mt-2 max-w-full min-h-0 bg-violet-300 border border-violet-300 border-solid w-[302px]" />
            <p className="flex flex-col mt-2 w-full text-xs tracking-wide leading-5 h-[55px] text-slate-700">
              <span className="w-full min-h-[66px]">{prompt.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

