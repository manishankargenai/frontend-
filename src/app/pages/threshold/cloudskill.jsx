// const CloudSkillsSection = ({ newSkillsData, selectedRoles, receivedValue }) => {
//     const skillsArray = Array.isArray(newSkillsData)
//         ? newSkillsData
//         : Object.entries(newSkillsData || {}).map(([role, skills]) => ({
//             role,
//             skills
//         }));
//     const rolesArray = Array.isArray(selectedRoles) ? selectedRoles : [];
//     console.log(newSkillsData)
//     console.log(skillsArray)

//     const DynamicSkillsDashboard = () => (
//         <div className="w-full bg-white rounded-xl shadow-lg p-6">
//             <h2 className="text-xl font-bold text-indigo-800 mb-6">Skills Dashboard</h2>
//             <div>
//                 {skillsArray.map((item, index) => (
//                     <div key={index}>
//                         <h3>Role: {item.role}</h3>
//                         <div>
//                             {Object.entries(item.skills).map(([skill, details], skillIndex) => (
//                                 <div key={skillIndex}>
//                                     <p>Skill: {skill}</p>
//                                     <ul>
//                                         {Object.entries(details).map(([key, value], detailIndex) => (
//                                             <li key={detailIndex}>
//                                                 {key}: {value}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}

//             </div>
//             {rolesArray.length > 0 && (
//                 <div className="space-y-6">
//                     {/* Selected Roles Overview */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                         {rolesArray.map((role) => (
//                             <div key={role.id || Math.random()} className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-4">
//                                 <h3 className="text-lg font-semibold text-indigo-700">{role.name}</h3>
//                                 <div className="mt-2 text-sm text-gray-600">
//                                     <p>Required Score: {receivedValue || 0}%</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Skills Matrix */}
//                     <div className="mt-6">
//                         <h3 className="text-lg font-semibold text-gray-700 mb-4">Skills Requirements</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             {skillsArray.map((skill) => (
//                                 <div key={skill.id || Math.random()} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
//                                     <div>
//                                         <h4 className="font-medium text-gray-800">{skill.name}</h4>
//                                         <p className="text-sm text-gray-500">{skill.category}</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
//                                             <div
//                                                 className="bg-indigo-600 h-2.5 rounded-full"
//                                                 style={{ width: `${skill.proficiency || 0}%` }}
//                                             ></div>
//                                         </div>
//                                         <span className="text-sm font-medium text-gray-600">
//                                             {skill.proficiency || 0}%
//                                         </span>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Summary Stats */}
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
//                         <div className="bg-indigo-600 text-white rounded-lg p-4">
//                             <h4 className="text-sm font-medium">Total Skills</h4>
//                             <p className="text-2xl font-bold mt-1">{skillsArray.length}</p>
//                         </div>
//                         <div className="bg-purple-600 text-white rounded-lg p-4">
//                             <h4 className="text-sm font-medium">Selected Roles</h4>
//                             <p className="text-2xl font-bold mt-1">{rolesArray.length}</p>
//                         </div>
//                         <div className="bg-blue-600 text-white rounded-lg p-4">
//                             <h4 className="text-sm font-medium">Threshold</h4>
//                             <p className="text-2xl font-bold mt-1">{receivedValue || 0}%</p>
//                         </div>
//                         <div className="bg-cyan-600 text-white rounded-lg p-4">
//                             <h4 className="text-sm font-medium">Avg Proficiency</h4>
//                             <p className="text-2xl font-bold mt-1">
//                                 {skillsArray.length > 0
//                                     ? Math.round(
//                                         skillsArray.reduce((acc, curr) => acc + (curr.proficiency || 0), 0) /
//                                         skillsArray.length
//                                     )
//                                     : 0}%
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {rolesArray.length === 0 && (
//                 <div className="text-center py-10 text-gray-500">
//                     Please select roles to view the skills dashboard
//                 </div>
//             )}
//         </div>
//     );

//     return (
//         <div className="w-full">
//             <DynamicSkillsDashboard />
//         </div>
//     );
// };

// export default CloudSkillsSection;


// "use client";
// import React from 'react';



// export default function CloudSkillsSection()  
// {
//   return (
//     <section className="flex flex-col grow shrink h-[] min-w-[] w-[498px] max-md:max-w-full">
//       <div className="flex flex-col pb-5 max-w-full w-[483px]">
//         <div className="flex flex-col py- w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
//           <div className="flex flex-wrap gap- items-center px py-1.5 w-full text-base font-medium leading-none bg-indigo-50 border border-solid border-neutral-300 text-indigo-950 max-md:max-w-full">
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0706821bb8b23099a7b4977000ed70ae3373ae7537abfcb1f069a1dac2ab80?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
//             <div className="flex grow shrink gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[412px]">
//               <div className="self-stretch my-auto">Cloud skills</div>
//               <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/77479a8a7294ed8871ce5ac07fc13987e99d7f0b98d82f9b93cd7327ade0ceb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
//             </div>
//           </div>
//           <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ce7068accc364a2bd522a06e0e090141f44b004aaf717bdca57aff1019d7ae?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain self-center max-w-full aspect-square w-[206px]" alt="" />
//           <div className="flex overflow-hidden flex-col mr-5 ml-5 h-28 text-xs max-md:mr-2.5 max-md:max-w-full">
//             <div className="flex gap-2 items-start py-0.5 w-full max-md:max-w-full">
//               <div className="flex flex-col w-[219px]">
//                 <div className="flex gap-3 items-center w-full">
//                   <div className="flex gap-2.5 self-stretch my-auto tracking-wide leading-3 text-neutral-800 w-[151px]">
//                     <div className="flex shrink-0 self-start w-2 h-2 bg-indigo-600 rounded-full"></div>
//                     <div className="opacity-70">Cloud Services Understanding</div>
//                   </div>
//                   <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
//                     50%
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col w-[219px]">
//                 <div className="flex gap-3.5 items-start">
//                   <div className="flex gap-3 items-center w-[181px]">
//                     <div className="flex gap-2 self-stretch my-auto tracking-wide leading-3 text-neutral-800 w-[114px]">
//                       <div className="flex shrink-0 self-start w-1.5 h-2 bg-rose-500 rounded-full"></div>
//                       <div className="opacity-70">Security and Compliance</div>
//                     </div>
//                     <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
//                       50%
//                     </div>
//                   </div>
//                   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ada5daff4a6dd1f05f9e69796a3bd5ecd967c10bf318554c926376892a86df59?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" className="object-contain shrink-0 w-6 aspect-square" alt="" />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 max-w-full border border-solid bg-neutral-300 border-neutral-300 min-h-[1px] w-[445px]"></div>
//             Continuing from where we left off:

//             <div className="flex overflow-hidden gap-2 items-start py-px mt-6 w-full min-h-[100px] max-md:max-w-full">
//               <div className="flex flex-col w-[219px]">
//                 <div className="flex gap-3 items-center w-full">
//                   <div className="flex gap-2.5 self-stretch my-auto tracking-wide leading-3 text-neutral-800 w-[151px]">
//                     <div className="flex shrink-0 self-start w-2 h-2 bg-indigo-600 rounded-full"></div>
//                     <div className="opacity-70">Cloud Services Understanding</div>
//                   </div>
//                   <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
//                     50%
//                   </div>
//                 </div>
//                 <div className="flex gap-3 items-center mt-2 w-full tracking-wide leading-3 text-neutral-800">
//                   <div className="flex gap-2 self-stretch my-auto w-[151px]">
//                     <div className="flex shrink-0 self-start w-2 h-0 bg-sky-400 rounded-full"></div>
//                     <div className="opacity-70 basis-auto">Infrastructure Management</div>
//                   </div>
//                   <div className="flex shrink-0 gap-2 self-stretch py-2 my-auto h-0.5 bg-white rounded shadow-sm w-[55px]"></div>
//                 </div>
//               </div>
//               <div className="flex flex-col w-[219px]">
//                 <div className="flex gap-3 items-center w-full">
//                   <div className="flex gap-2.5 self-stretch my-auto tracking-wide leading-3 text-neutral-800 w-[151px]">
//                     <div className="flex shrink-0 self-start w-2 h-2 bg-rose-500 rounded-full"></div>
//                     <div className="opacity-70">Security and Compliance</div>
//                   </div>
//                   <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
//                     20%
//                   </div>
//                 </div>
//                 <div className="flex gap-3 items-center mt-2 w-full tracking-wide leading-3 text-neutral-800">
//                   <div className="flex gap-2 self-stretch my-auto w-[151px]">
//                     <div className="flex shrink-0 self-start w-2 h-0 bg-amber-200 rounded-full"></div>
//                     <div className="opacity-70 basis-auto">Monitoring and Troubleshooting</div>
//                   </div>
//                   <div className="flex shrink-0 gap-2 self-stretch py-2 my-auto h-0.5 bg-white rounded shadow-sm w-[55px]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React, { useState } from "react";

// export default function CloudSkillsSection({ data }) {
//   const [skills, setSkills] = useState(data || [
//     { name: "Cloud Services Understanding", value: 50, color: "bg-indigo-600" },
//     { name: "Security and Compliance", value: 20, color: "bg-rose-500" },
//     { name: "Infrastructure Management", value: 30, color: "bg-sky-400" },
//     { name: "Monitoring and Troubleshooting", value: 40, color: "bg-amber-200" },
//   ]);

//   return (
//     <section className="flex flex-col grow shrink h-[] min-w-[] w-[498px] max-md:max-w-full">
//       <div className="flex flex-col pb-5 max-w-full w-[483px]">
//         <div className="flex flex-col py- w-full bg-white border border-solid border-neutral-300 max-md:max-w-full">
//           <div className="flex flex-wrap gap- items-center px py-1.5 w-full text-base font-medium leading-none bg-indigo-50 border border-solid border-neutral-300 text-indigo-950 max-md:max-w-full">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0706821bb8b23099a7b4977000ed70ae3373ae7537abfcb1f069a1dac2ab80?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//               className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//               alt=""
//             />
//             <div className="flex grow shrink gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[412px]">
//               <div className="self-stretch my-auto">Cloud Skills</div>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/77479a8a7294ed8871ce5ac07fc13987e99d7f0b98d82f9b93cd7327ade0ceb3?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                 className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                 alt=""
//               />
//             </div>
//           </div>
//           {/* Dynamic Pie Chart */}
//           <div className="flex justify-center">
//             <svg width="206" height="206" viewBox="0 0 36 36" className="max-w-full">
//               {skills.map((skill, index) => {
//                 const offset = skills
//                   .slice(0, index)
//                   .reduce((acc, curr) => acc + curr.value, 0);
//                 return (
//                   <circle
//                     key={skill.name}
//                     r="15.9"
//                     cx="18"
//                     cy="18"
//                     fill="transparent"
//                     stroke={skill.color.replace("bg-", "")}
//                     strokeWidth="3.2"
//                     strokeDasharray={${skill.value} ${100 - skill.value}}
//                     strokeDashoffset={-offset}
//                   />
//                 );
//               })}
//             </svg>
//           </div>
//           {/* Skill List */}
//           <div className="flex overflow-hidden flex-col mr-5 ml-5 h-28 text-xs max-md:mr-2.5 max-md:max-w-full">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex gap-2 items-start py-0.5 w-full max-md:max-w-full">
//                 <div className="flex flex-col w-[219px]">
//                   <div className="flex gap-3 items-center w-full">
//                     <div
//                       className={flex gap-2.5 self-stretch my-auto tracking-wide leading-3 text-neutral-800 w-[151px]}
//                       style={{ opacity: skill.value / 100 }}
//                     >
//                       <div className={flex shrink-0 self-start w-2 h-2 ${skill.color} rounded-full}></div>
//                       <div className="opacity-70">{skill.name}</div>
//                     </div>
//                     <div className="overflow-hidden gap-2 self-stretch py-2 pl-2 my-auto tracking-wide leading-loose whitespace-nowrap bg-white rounded shadow-sm text-ellipsis text-slate-600 w-[55px]">
//                       {skill.value}%
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from 'react';

const CloudSkillsSection = ({ newSkillsData, selectedRoles, receivedValue }) => {
    const skillsArray = Array.isArray(newSkillsData)
        ? newSkillsData
        : Object.entries(newSkillsData || {}).map(([role, skills]) => ({
            role,
            skills
        }));
    
    const rolesArray = Array.isArray(selectedRoles) ? selectedRoles : [];

    const DynamicSkillsDashboard = () => (
        <div className="w-full bg-white shadow-lg p-6 border border-solid border-neutral-300 max-md:max-w-full">
            <h2 className=" flex   justify-between items-center px-4 py-1.5 text-base font-medium leading-none whitespace-nowrap bg-indigo-50 border border-solid border-neutral-300 text-indigo-950 text-xl font-bold text-indigo-800 mb-6">
                Skills Dashboard  
                <div className="bg-purple-600 w-40 text-white rounded-lg p-1">
                            <h4 className="text-sm font-medium">Selected Roles</h4>
                            <p className="text-2xl font-bold mt-1">{rolesArray.length}</p>
                        </div>
            </h2>
            
            <div>
  {/* Check if receivedValue is > 0 and rolesArray is not empty */}
  {receivedValue > 0 && rolesArray.length > 0 && skillsArray.map((item, index) => {
    // Check if the role exists in rolesArray
    return rolesArray.includes(item.role) && (
      <div key={index} className="mb-6">
        {/* Display the role name */}
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Role: {item.role}</h3>
        <div className="grid gap-4">
          {/* Iterate over the skills object and display each skill */}
          {Object.entries(item.skills).map(([skill, details], skillIndex) => {
             return skillIndex < receivedValue && (<div key={skillIndex} className="bg-gray-50 p-4 rounded-lg">
                {/* Display skill name and importance using flex */}
                <div className="flex justify-between items-center">
                  <p className="font-medium text-indigo-600 mb-2">{skill}</p>
                  <p className="text-gray-500 mb-2">{details["importance"]}%</p>
                </div>
              </div>
              )
  })}
        </div>
      </div>
    );
  })}
</div>


            {rolesArray.length > 0 ? (
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {rolesArray.map((role) => (
                            <div key={role.id || Math.random()} className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-4">
                                <h3 className="text-lg font-semibold text-indigo-700">{role.name}</h3>
                                <div className="mt-2 text-sm text-gray-600">
                                    <p>Required Score: {receivedValue || 0}%</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Skills Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skillsArray.map((skill) => (
                                <div key={skill.id || Math.random()} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                                    <div>
                                        <h4 className="font-medium text-gray-800">{skill.name}</h4>
                                        <p className="text-sm text-gray-500">{skill.category}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                            <div
                                                className="bg-indigo-600 h-2.5 rounded-full"
                                                style={{ width: `${skill.proficiency || 0}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm font-medium text-gray-600">
                                            {skill.proficiency || 0}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <div className="bg-indigo-600 text-white rounded-lg p-4">
                            <h4 className="text-sm font-medium">Total Skills</h4>
                            <p className="text-2xl font-bold mt-1">{skillsArray.length}</p>
                        </div>
                        <div className="bg-purple-600 text-white rounded-lg p-4">
                            <h4 className="text-sm font-medium">Selected Roles</h4>
                            <p className="text-2xl font-bold mt-1">{rolesArray.length}</p>
                        </div>
                        <div className="bg-blue-600 text-white rounded-lg p-4">
                            <h4 className="text-sm font-medium">Threshold</h4>
                            <p className="text-2xl font-bold mt-1">{receivedValue || 0}%</p>
                        </div>
                        <div className="bg-cyan-600 text-white rounded-lg p-4">
                            <h4 className="text-sm font-medium">Avg Proficiency</h4>
                            <p className="text-2xl font-bold mt-1">
                                {skillsArray.length > 0
                                    ? Math.round(
                                        skillsArray.reduce((acc, curr) => acc + (curr.proficiency || 0), 0) /
                                        skillsArray.length
                                    )
                                    : 0}%
                            </p>
                        </div>
                    </div> */}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500">
                    Please select roles to view the skills dashboard
                </div>
            )}
        </div>
    );

    return (
        <div className=" flex flex-col grow shrink justify-center min-w-[240px] w-[386px] max-md:max-w-full overflow-scroll">
            <DynamicSkillsDashboard />
        </div>
    );
};

export default CloudSkillsSection;
