// // // import React, { useState, useEffect, useRef } from "react";
// // // import axios from "axios";
// // // import Sidebar from "./sidebar";

// // // const Action = () => {
// // //   const [roles, setRoles] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [uploadSuccess, setUploadSuccess] = useState(false);
// // //   const jdFileInputRef = useRef(null);

// // //   useEffect(() => {
// // //     const storedRoles = sessionStorage.getItem("rolesData");
// // //     if (storedRoles) {
// // //       setRoles(JSON.parse(storedRoles));
// // //     }
// // //   }, []);

// // //   const handleFileUpload = async (event) => {
// // //     const file = event.target.files[0];
// // //     if (!file) return;

// // //     const formData = new FormData();
// // //     formData.append("file", file);

// // //     setLoading(true);
// // //     setError(null);
// // //     setUploadSuccess(false);

// // //     try {
// // //       const response = await axios.post("http://127.0.0.1:8000/analyze-job-description/", formData, {
// // //         headers: { "Content-Type": "multipart/form-data" }
// // //       });

// // //       if (response.data && response.data.roles) {
// // //         setRoles(response.data.roles);
// // //         sessionStorage.setItem("rolesData", JSON.stringify(response.data.roles));
// // //         setUploadSuccess(true);
// // //       } else {
// // //         throw new Error("No roles found in the document");
// // //       }
// // //     } catch (err) {
// // //       setError("Upload failed. Please check if the FastAPI server is running on port 8000");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-2xl mx-auto p-4">
// // //       <h1 className="text-2xl font-bold mb-6">Job Description Role Selection</h1>
// // //       <div className="mb-6">
// // //         <button
// // //           onClick={() => jdFileInputRef.current.click()}
// // //           className="bg-blue-500 text-white rounded-lg px-4 py-2"
// // //           disabled={loading}
// // //         >
// // //           {loading ? "Analyzing..." : "Upload Job Description"}
// // //         </button>
// // //         <input
// // //           ref={jdFileInputRef}
// // //           type="file"
// // //           accept=".pdf,.docx,.txt"
// // //           className="hidden"
// // //           onChange={handleFileUpload}
// // //         />
// // //       </div>
// // //       {loading && <div>Analyzing document...</div>}
// // //       {error && <div className="text-red-500">{error}</div>}
// // //       {uploadSuccess && <div className="text-green-500">Successfully analyzed job description!</div>}
// // //       {roles.length > 0 && <Sidebar roles={roles} />}
// // //     </div>
// // //   );
// // // };

// // // export default Action;


// // import React, { useRef, useState } from 'react';
// // import axios from 'axios';
// // import RoleSelector from './RoleSelector';

// // function ActionButtons({onRolesUpdate, onSkillsUpdate}) {
// //   const jdFileInputRef = useRef(null);
// //   const resumeFileInputRef = useRef(null);
// //   const [responseMessage, setResponseMessage] = useState(null);
// //   const [isCardVisible, setIsCardVisible] = useState(false);
// //   const [roles, setRoles] = useState([]);
// //   const [skillsData, setSkills] = useState([])
// //   const actions = [
// //     {
// //       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //       text: "Upload JD",
// //       onClick: () => jdFileInputRef.current.click(),
// //     },
// //     {
// //       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //       text: "Upload Resume",
// //       onClick: () => resumeFileInputRef.current.click(),
// //     },
// //     {
// //       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //       text: "Link to HR DB",
// //       onClick: () => alert("Linking to HR Database..."),
// //     },
// //   ];

// //   const handleFileUpload = async (event) => {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const formData = new FormData();
// //     formData.append("file", file);

// //     try {
// //       const response = await axios.post(
// //         'http://localhost:8000/api/v1/job/analyze-job-description/',
// //         formData,
// //         {
// //           headers: {
// //             'Content-Type': 'multipart/form-data',
// //             'Accept': 'application/json'
// //           }
// //         }
// //       );

// //       if (response.data && response.data.roles) {
// //         const rolesData = response.data.roles; // Adjust based on backend response structure
// //         const skillsData = response.data.skills_data;
// //         onRolesUpdate(rolesData)
// //         onSkillsUpdate(skillsData)
// //         setRoles(response.data.roles);
// //         setSkills(skillsData)
// //         sessionStorage.setItem('rolesData', JSON.stringify(response.data.roles));
// //         setResponseMessage(`Extracted roles: ${response.data.roles.join(", ")}`);
// //       } else {
// //         setResponseMessage('No roles found in the document.');
// //       }
// //       setIsCardVisible(true);
// //     } catch (error) {
// //       console.error('Error uploading file:', error);
// //       setResponseMessage('Error uploading the file. Please try again.');
// //       setIsCardVisible(true);
// //     }
// //   };

// //   return (
// //     <div className="relative flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
// //       {actions.map((action, index) => (
// //         <button
// //           key={index}
// //           className="flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px]"
// //           onClick={action.onClick}
// //         >
// //           <img className="w-6 h-6 object-contain" src={action.icon} alt={action.text} />
// //           <span>{action.text}</span>
// //         </button>
// //       ))}

// //       <input
// //         ref={jdFileInputRef}
// //         type="file"
// //         accept=".pdf,.docx,.txt"
// //         style={{ display: 'none' }}
// //         onChange={handleFileUpload}
// //       />
// //       <input
// //         ref={resumeFileInputRef}
// //         type="file"
// //         accept=".pdf,.docx,.txt"
// //         style={{ display: 'none' }}
// //         onChange={handleFileUpload}
// //       />

// //       {/* {isCardVisible && (
// //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
// //           <div className="bg-white p-4 rounded shadow-lg max-w-md text-center">
// //             <p className="mb-4">{responseMessage}</p>

// //             {roles.length > 0 && <RoleSelector roles={roles} />}

// //             <button
// //               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
// //               onClick={() => setIsCardVisible(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // }

// // export default ActionButtons;


// import React, { useRef, useState } from 'react';
// // #import RoleSelector from './RoleSelector';

// function ActionButtons({onRolesUpdate, onSkillsUpdate}) {
//   const jdFileInputRef = useRef(null);
//   const resumeFileInputRef = useRef(null);
//   const [responseMessage, setResponseMessage] = useState(null);
//   const [isCardVisible, setIsCardVisible] = useState(false);
//   const [roles, setRoles] = useState([]);
//   const [skillsData, setSkills] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const actions = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7",
//       text: "Upload JD",
//       onClick: () => jdFileInputRef.current.click(),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7",
//       text: "Upload Resume",
//       onClick: () => resumeFileInputRef.current.click(),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1",
//       text: "Link to HR DB",
//       onClick: () => alert("Linking to HR Database..."),
//     },
//   ];

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     setIsLoading(true);

//     try {
//       const response = await fetch(
//         'http://localhost:8000/api/v1/job-analysis/analyze/',
//         {
//           method: 'POST',
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();

//       if (data && data.roles) {
//         const rolesData = data.roles;
//         const skillsData = data.skills_data;
        
//         onRolesUpdate(rolesData);
//         onSkillsUpdate(skillsData);
//         setRoles(rolesData);
//         setSkills(skillsData);
        
//         sessionStorage.setItem('rolesData', JSON.stringify(rolesData));
//         setResponseMessage(`Extracted roles: ${rolesData.join(", ")}`);
//       } else {
//         setResponseMessage('No roles found in the document.');
//       }
//       setIsCardVisible(true);
      
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setResponseMessage('Error uploading the file. Please try again.');
//       setIsCardVisible(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       {actions.map((action, index) => (
//         <button
//           key={index}
//           className={`flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px] ${
//             isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-200'
//           }`}
//           onClick={action.onClick}
//           disabled={isLoading}
//         >
//           <img className="w-6 h-6 object-contain" src={action.icon} alt={action.text} />
//           <span>{isLoading && action.text === "Upload JD" ? "Uploading..." : action.text}</span>
//         </button>
//       ))}

//       <input
//         ref={jdFileInputRef}
//         type="file"
//         accept=".pdf,.docx,.txt"
//         className="hidden"
//         onChange={handleFileUpload}
//       />
//       <input
//         ref={resumeFileInputRef}
//         type="file"
//         accept=".pdf,.docx,.txt"
//         className="hidden"
//         onChange={handleFileUpload}
//       />

//       {responseMessage && (
//         <div className={`mt-4 p-3 rounded ${
//           responseMessage.includes('Extracted') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//         }`}>
//           {responseMessage}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ActionButtons;

// import React, { useRef, useState } from 'react';

// function ActionButtons({onRolesUpdate, onSkillsUpdate}) {
//   const jdFileInputRef = useRef(null);
//   const resumeFileInputRef = useRef(null);
//   const [responseMessage, setResponseMessage] = useState(null);
//   const [isCardVisible, setIsCardVisible] = useState(false);
//   const [roles, setRoles] = useState([]);
//   const [skillsData, setSkills] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const actions = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7",
//       text: "Upload JD",
//       onClick: () => jdFileInputRef.current.click(),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7", 
//       text: "Upload Resume",
//       onClick: () => resumeFileInputRef.current.click(),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1",
//       text: "Link to HR DB",
//       onClick: () => alert("Linking to HR Database..."),
//     },
//   ];

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     setIsLoading(true);

//     try {
//       const response = await fetch(
//         'http://localhost:8000/api/v1/job/analyze-job-description',
//         {
//           method: 'POST',
//           body: formData,
//           headers: {
//             'Accept': 'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const responseData = await response.json();
//       const data = responseData.data;

//       if (data && data.roles) {
//         const rolesData = data.roles;
//         const skillsData = data.skills_data;
        
//         onRolesUpdate(rolesData);
//         onSkillsUpdate(skillsData);
//         setRoles(rolesData);
//         setSkills(skillsData);
        
//         sessionStorage.setItem('rolesData', JSON.stringify(rolesData));
//         setResponseMessage(`Extracted roles: ${rolesData.join(", ")}`);
//       } else {
//         setResponseMessage('No roles found in the document.');
//       }
//       setIsCardVisible(true);
      
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setResponseMessage('Error uploading the file. Please try again.');
//       setIsCardVisible(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
//       {actions.map((action, index) => (
//         <button
//           key={index}
//           className={`flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px] ${
//             isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-200'
//           }`}
//           onClick={action.onClick}
//           disabled={isLoading}
//         >
//           <img className="w-6 h-6 object-contain" src={action.icon} alt={action.text} />
//           <span>{isLoading && action.text === "Upload JD" ? "Uploading..." : action.text}</span>
//         </button>
//       ))}

//       <input
//         ref={jdFileInputRef}
//         type="file"
//         accept=".pdf,.docx,.txt"
//         className="hidden"
//         onChange={handleFileUpload}
//       />
//       <input
//         ref={resumeFileInputRef}
//         type="file"
//         accept=".pdf,.docx,.txt"
//         className="hidden"
//         onChange={handleFileUpload}
//       />

//       {responseMessage && (
//         <div className={`mt-4 p-3 rounded ${
//           responseMessage.includes('Extracted') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
//         }`}>
//           {responseMessage}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ActionButtons;


import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import RoleSelector from './RoleSelector';

function ActionButtons({onRolesUpdate, onSkillsUpdate}) {
  const jdFileInputRef = useRef(null);
  const resumeFileInputRef = useRef(null);
  const [responseMessage, setResponseMessage] = useState(null) 
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [roles, setRoles] = useState([]);
  const [skillsData, setSkills] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const actions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
      text: "Upload JD",
      onClick: () => jdFileInputRef.current.click(),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
      text: "Upload Resume",
      onClick: () => resumeFileInputRef.current.click(),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
      text: "Link to HR DB",
      onClick: () => alert("Linking to HR Database..."),
    },
  ];
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true);
  
    try {
      const response = await fetch(
        'http://localhost:8000/api/v1/job/analyze-job-description',
        {
          method: 'POST',
          body: formData,     
          headers: {       
            'Accept': 'application/json',
            // Note: Don't set Content-Type when using FormData
            // It will be automatically set with the correct boundary
          }
        }
      );
  

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data && data.data && data.data.roles) {
        const rolesData = data.data.roles;
        const skillsData = data.data.skills_data;
        
        onRolesUpdate(rolesData);
        onSkillsUpdate(skillsData);
        setRoles(rolesData);
        setSkills(skillsData);
        
        sessionStorage.setItem('rolesData', JSON.stringify(rolesData));
        setResponseMessage(`Extracted roles: ${rolesData.join(", ")}`);
      } else {
        setResponseMessage('No roles found in the document.');
      }
      setIsCardVisible(true);
      
    } catch (error) {
      console.error('Error uploading file:', error);
      setResponseMessage('Error uploading the file. Please try again.');
      setIsCardVisible(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px]"
          onClick={action.onClick}
        >
          <img className="w-6 h-6 object-contain" src={action.icon} alt={action.text} />
          <span>{action.text}</span>
        </button>
      ))}

      <input
        ref={jdFileInputRef}
        type="file"
        accept=".pdf,.docx,.txt"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <input
        ref={resumeFileInputRef}
        type="file"
        accept=".pdf,.docx,.txt"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* {isCardVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-md text-center">
            <p className="mb-4">{responseMessage}</p>

            {roles.length > 0 && <RoleSelector roles={roles} />}

            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => setIsCardVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default ActionButtons;
// export default RoleSelector;