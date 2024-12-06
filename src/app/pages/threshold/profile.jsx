// "use client";
// import React from "react";
// import Link from "next/link";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MinimizeSharpIcon from '@mui/icons-material/MinimizeSharp';

// export function ProfileAction({ icon, text }) {
//   return (
//     <div className="flex gap-2.5 items-center px-2 py-1.5 bg-white rounded-md shadow-sm min-h-[36px]">
//       <div className="flex gap-1 items-center self-stretch my-auto">
//         <img
//           loading="lazy"
//           src={icon}
//           alt=""
//           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//         />
//         <span className="self-stretch my-auto">{text}</span>
//       </div>
//     </div>
//   );
// }

// export function ProfileActions({ onShowThreshold }) {
//   const actions = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdfec4fec6f3522dc992c5f73d364d0616482cfa9778aaf8155e80eb61e06f7d?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//       text: "Social Profile",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4fc576eaf7e6a968324416fe74218a24a0786206140a7293577d26d5820b195?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//       text: "Preview",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02fbc5fb1331934131fac4876333a3e4e635d6eb8318d452574e8f72959dce98?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//       text: "Scoring",
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60fde94f8d065b71e32cf6fbb318d293178b9e8f753fa0b1de36717af3ef3528?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//       text: "View",
//     },
//   ];
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     event.stopPropagation();
//     setAnchorEl(event.currentTarget);
//     // onShowThreshold()
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       <div className="flex gap-1 items-start self-stretch my-auto min-w-[240px]">
//         {actions.map((action, index) => {
//           if (action.text === "Social Profile") {
//             return (
//               <Link key={index} href="/sprofile">
//                 <ProfileAction icon={action.icon} text={action.text} />
//               </Link>
//             );
//           } else if (action.text === "View") {
//             return (
//               <div key={index}>
//                 <Button
//                   id="basic-button"
//                   aria-controls={open ? "basic-menu" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? "true" : undefined}
//                   onClick={handleClick}
//                 >
//                   <ProfileAction icon={action.icon} text={action.text} />
//                 </Button>
//                 <Menu
//                   id="basic-menu"
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   MenuListProps={{
//                     "aria-labelledby": "basic-button",
//                   }}
//                 >
//                   <div }>
//                     <Link href="/behavior">
//                       {" "}
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a448a04235407c8626e9e123b5c204b12191e8ea2b6c31cad52bab1efe0fcc2?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                     <Link href="/coding">
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee540726dacc9d446f921570c8109f14d1ea1fd7f6f433518107c542efc09907?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                     <Link href="/comondash">
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a61a66160dddc43a1f7ad596123a64997eb97c30163086eba7ae30cc00a15ca?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                   </div>
//                   <div >
//                     <Link href="/clouds">
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9bbbba430a587c5734e37a25577b97b3b7d5ac00d88705ab561bbfc527014bf?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                     <Link href="/hr">
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/3912ac7e279521410c93188994024cf69fd3d483e36751a99c819c9a375ebb8a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                     <Link href="/bot">
//                       <MenuItem onClick={handleClose}>
//                         {" "}
//                         <img
//                           loading="lazy"
//                           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dbe3da57652e7615453a120da9f5e1a1ea660bed464f515eaa3c866789c67d4?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                           alt=""
//                           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                         />
//                       </MenuItem>
//                     </Link>
//                   </div>
//                   <MenuItem onClick={onShowThreshold}>
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//                       alt=""
//                       className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                     />
//                   </MenuItem>
//                 </Menu>
//                 </div>
//                 </div>
//               </div>
//             );
//           }
          
//           return (
//             <ProfileAction key={index} icon={action.icon} text={action.text} />
//           );
//         })}
     

   
//   );
// }

// export default ProfileActions;


{/* 
{/* {/* // ProfileActions.js
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// export function ProfileAction({ icon, text }) { */} 
//   return (
//     <div className="flex gap-2.5 items-center px-2 py-1.5 bg-white rounded-md shadow-sm min-h-[36px]">
//       <img loading="lazy" src={icon} alt={text} className="w-6 h-6" />
//       <span>{text}</span>
//     </div>
//   );
// }

// function ProfileActions({ onShowThreshold }) {
//   const actions = [
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdfec4fec6f3522dc992c5f73d364d0616482cfa9778aaf8155e80eb61e06f7d", text: "Social Profile", link: "/sprofile" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4fc576eaf7e6a968324416fe74218a24a0786206140a7293577d26d5820b195", text: "Preview" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02fbc5fb1331934131fac4876333a3e4e635d6eb8318d452574e8f72959dce98", text: "Scoring" },
//     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60fde94f8d065b71e32cf6fbb318d293178b9e8f753fa0b1de36717af3ef3528", text: "View" },
//   ];

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       <div className="flex gap-1 items-start min-w-[240px]">
//         {actions.map((action, index) => {
//           if (action.text === "Social Profile") {
//             return (
//               <Link key={index} href={action.link}>
                
//                   <ProfileAction icon={action.icon} text={action.text} />
               
//               </Link>
//             );
//           } else if (action.text === "View") {
//             return (
//               <div key={index}>
//                 <Button
//                   aria-controls={open ? "basic-menu" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? "true" : undefined}
//                   onClick={handleClick}
//                 >
//                   <ProfileAction icon={action.icon} text={action.text} />
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   MenuListProps={{ "aria-labelledby": "basic-button" }}
//                 >
//                   <Link href="/behavior">
//                     <MenuItem onClick={handleClose}>
//                       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a448a04235407c8626e9e123b5c204b12191e8ea2b6c31cad52bab1efe0fcc2" alt="Behavior" className="w-6 h-6" />
//                     </MenuItem>
//                   </Link>
//                   {/* Other menu items */}
//                   <MenuItem
//                     onClick={() => {
//                       handleClose();
//                       onShowThreshold();  // Triggers onShowThreshold without propagation issues
//                     }}
//                   >
//                     <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898" alt="View Threshold" className="w-6 h-6" />
//                     <span>View Threshold</span>
//                   </MenuItem>
//                 </Menu>
//               </div>
//             );
//           } else {
//             return <ProfileAction key={index} icon={action.icon} text={action.text} />;
//           }
//         })}
//       </div>
//     </div>
//   );
// }

// export default ProfileActions; */}



"use Client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function ProfileAction({ icon, text }) {
  return (
    <div className="flex gap-2.5 items-center px-2 py-1.5 bg-white rounded-md shadow-sm min-h-[36px]">
      <img loading="lazy" src={icon} alt={text} className="w-6 h-6" />
      <span>{text}</span>
    </div>
  );
}

function ProfileActions({ onShowThreshold }) {
  const actions = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdfec4fec6f3522dc992c5f73d364d0616482cfa9778aaf8155e80eb61e06f7d", text: "Social Profile", link: "/sprofile" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4fc576eaf7e6a968324416fe74218a24a0786206140a7293577d26d5820b195", text: "Preview" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/02fbc5fb1331934131fac4876333a3e4e635d6eb8318d452574e8f72959dce98", text: "Scoring" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/60fde94f8d065b71e32cf6fbb318d293178b9e8f753fa0b1de36717af3ef3528", text: "View" },
  ];

  const viewItems = [
    { link: "/job-description", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898", label: "Job Description" },
    { link: "/behavior", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a448a04235407c8626e9e123b5c204b12191e8ea2b6c31cad52bab1efe0fcc2", label: "Behavioral" },
    { link: "/coding", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee540726dacc9d446f921570c8109f14d1ea1fd7f6f433518107c542efc09907", label: "Coding" },
    { link: "/resume", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/60fde94f8d065b71e32cf6fbb318d293178b9e8f753fa0b1de36717af3ef3528", label: "Resume" },
    { link: "/communication-skills", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6dbe3da57652e7615453a120da9f5e1a1ea660bed464f515eaa3c866789c67d4", label: "Communication Skills" },
    { link: "/common-dashboard", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a61a66160dddc43a1f7ad596123a64997eb97c30163086eba7ae30cc00a15ca", label: "Common Dashboard" },
    { link: "/hr-system", imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3912ac7e279521410c93188994024cf69fd3d483e36751a99c819c9a375ebb8a", label: "HR System" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
      <div className="flex gap-1 items-start min-w-[240px]">
        {actions.map((action, index) => {
          if (action.text === "Social Profile") {
            return (
              <Link key={index} href={action.link}>
           
                  <ProfileAction icon={action.icon} text={action.text} />
                
              </Link>
            );
          } else if (action.text === "View") {
            return (
              <div key={index}>
                <Button
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <ProfileAction icon={action.icon} text={action.text} />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{ "aria-labelledby": "basic-button" }}
                >
                  {viewItems.map((item, i) => (
                    <Link key={i} href={item.link}>
                      <MenuItem onClick={handleClose}>
                        <img loading="lazy" src={item.imgSrc} alt={item.label} className="w-6 h-6 mr-2" />
                        <span>{item.label}</span>
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      onShowThreshold();
                    }}
                  >
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898" alt="View Threshold" className="w-6 h-6 mr-2" />
                    <span>View Threshold</span>
                  </MenuItem>
                </Menu>
              </div>
            );
          } else {
            return <ProfileAction key={index} icon={action.icon} text={action.text} />;
          }
        })}
      </div>
    </div>
  );
}

export default ProfileActions;



// "use client";
// import React from "react";
// import Link from "next/link";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// export function ProfileAction({ icon, text ,highlighted}) {
//   return (
//     // <div className="flex gap-2.5 items-center px-2 py-1.5 bg-white rounded-md shadow-sm min-h-[36px]">
//     <div
//     className={`flex gap-2.5 items-center px-2 py-1.5 bg-white rounded-md shadow-sm min-h-[36px] ${
//       highlighted ? "bg-gray-200" : ""
//     }`}
//   >
//      <div className="flex gap-1 items-center self-stretch my-auto">
//         <img
//           loading="lazy"
//           src={icon}
//           alt=""
//           className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//         />
//         <span className="self-stretch my-auto">{text}</span>
//       </div>
//     </div>
//   );
// }

// export function ProfileActions({onShowThreshold,onShowJobDescription ,onShowResume,onShowCommunicationSkills,onShowBehaviouralSkills,onShowCoding,onShowCommondashBoard,onShowHrSystem,ViewItems}) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//  console.log("here",ViewItems)
//   const handleClick = (event) => {
//     event.stopPropagation();
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleThresholdClick = () => {
//     onShowThreshold();
//     handleClose();
//   };

//   // ... rest of your actions array and component logic

//   return (
//     <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       {/* ... other action buttons */}
//       <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       <Link href="/sprofile">
//         <ProfileAction 
//           icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bdfec4fec6f3522dc992c5f73d364d0616482cfa9778aaf8155e80eb61e06f7d"
//           text="Social Profile" 
//         />
//       </Link>
//       <ProfileAction 
//         icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d4fc576eaf7e6a968324416fe74218a24a0786206140a7293577d26d5820b195"
//         text="Preview" 
//       />
//       <ProfileAction 
//         icon="https://cdn.builder.io/api/v1/image/assets/TEMP/02fbc5fb1331934131fac4876333a3e4e635d6eb8318d452574e8f72959dce98"
//         text="Scoring" 
//       />
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       >
//         <ProfileAction 
//           icon="https://cdn.builder.io/api/v1/image/assets/TEMP/60fde94f8d065b71e32cf6fbb318d293178b9e8f753fa0b1de36717af3ef3528"
//           text="View" 
//         />
//       </Button>
//       </div>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         {/* ... other menu items */}
        
//         <MenuItem onClick={handleThresholdClick}>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/83324992080c63cca989cc1eed68008e6f463cffa8f2e60da1dc24175c8b2898"
//             alt=""
//             className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//           />
//           <span style={{fontWeight:ViewItems.includes("threshold")?"600":""}}>Threshold Score</span>
//         </MenuItem>

//         <MenuItem onClick={() => {
//   onShowJobDescription();
//   handleClose();
// }}>
  
//   <img
//     loading="lazy"
//     src="https://cdn.builder.io/api/v1/image/assets/TEMP/370b9cdf0dbe6d1e7ad2ab4adb53385a17f049446cc95d383dc45e0150231711"
//     alt=""
//     className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//   />
// <span style={{fontWeight:ViewItems.includes("job-description")?"600":""}}>Job Description</span>
// </MenuItem>

// <MenuItem onClick={() => {
//   onShowResume();
//   handleClose();
// }}>
  
  
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f366fef88f602d28e40b6672148f3daaf5c8392fd855d11589060b3350b621?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />

//             <span style={{fontWeight:ViewItems.includes("resume")?"600":""}}>Resume</span>

// </MenuItem>

// <MenuItem onClick={() => {
//   onShowCommunicationSkills();
//   handleClose();
// }}>
  
  
//   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9bbbba430a587c5734e37a25577b97b3b7d5ac00d88705ab561bbfc527014bf?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//   <span style={{fontWeight:ViewItems.includes("communication-skills")?"600":""}}>CommunicationSkills</span>
// </MenuItem>
// <MenuItem onClick={() => {
//   onShowBehaviouralSkills();
//   handleClose();
// }}>
  
  
//   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a448a04235407c8626e9e123b5c204b12191e8ea2b6c31cad52bab1efe0fcc2?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
//   <span style={{fontWeight:ViewItems.includes("Behavioural-skills")?"600":""}}>BehaviouralSkills</span>
// </MenuItem>


// <MenuItem onClick={() => {
//   onShowCoding();
//   handleClose();
// }}>
  
  
//   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee540726dacc9d446f921570c8109f14d1ea1fd7f6f433518107c542efc09907?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />

//   <span style={{fontWeight:ViewItems.includes("coding")?"600":""}}>coding</span>
// </MenuItem>

// <MenuItem onClick={() => {
//   onShowHrSystem();
//   handleClose();
// }}>
  
  
//   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3912ac7e279521410c93188994024cf69fd3d483e36751a99c819c9a375ebb8a?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />

//   <span style={{fontWeight:ViewItems.includes("HrSystem")?"600":""}}>HRSystem</span>
// </MenuItem>




// <MenuItem onClick={() => {
//   onShowCommondashBoard();
//   handleClose();
// }}>
  
//   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a61a66160dddc43a1f7ad596123a64997eb97c30163086eba7ae30cc00a15ca?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />


//   <span style={{fontWeight:ViewItems.includes("commondashboard")?"600":""}}>Commuon dashboard</span>
// </MenuItem>
//       </Menu>
      
//     </div>
//   );
// }

// export default ProfileActions;
