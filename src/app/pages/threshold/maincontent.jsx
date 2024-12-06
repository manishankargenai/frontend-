// "use client";
// import React from "react";
// import ScoreSection from "./scoreSec";
// import ImplementationSection from "./implement";
// import DatabaseSection from "./database";
// import DeploymentSection from "./deployement";
// import CloudSkillsSection from "./cloudskill"; // Moved here

// export default function MainContent({ skillsData }) {
//   return (
//     <main className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
//       <div className="flex flex-col pb-20px w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
//         <ScoreSection />
//         <div className="mt-4 mr-4 mb-0 ml-1 max-md:mr-2.5 max-md:mb-2.5 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col-ml-1">
//             <CloudSkillsSection skills_data={skillsData} />
//             <DatabaseSection />
//           </div>
//           <div className="flex gap-0 items-center w-full max-md:max-w-full">
//             <ImplementationSection />
//             <DeploymentSection />
//           </div>
//           <div className="flex gap-3 items-start self-end mt-6 text-base font-semibold whitespace-nowrap">
//             <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 bg-white rounded-md border border-solid shadow-sm border-neutral-300 text-slate-700 w-[111px]">
//               Cancel
//             </button>
//             <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 text-white bg-indigo-500 rounded-md border border-indigo-500 border-solid shadow-sm w-[111px]">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
