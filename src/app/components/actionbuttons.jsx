// // import React from 'react';

// // function ActionButtons() {
// //   const actions = [
// //     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload JD" },
// //     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Upload Resume" },
// //     { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9", text: "Link to HR DB" },
    
// //   ];

// //   return (
// //     <div className="flex flex-wrap gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
// //       {actions.map((action, index) => (
// //         <button key={index} className="flex gap-2.5 items-center p-2 bg-indigo-100 rounded-md border border-indigo-500 border-solid shadow-sm min-h-[36px]">
// //           <img loading="lazy" src={action.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
// //           <span className="self-stretch my-auto">{action.text}</span>
// //         </button>
// //       ))}
// //     </div>
// //   );
// // }

// // export default ActionButtons;
// // import React from "react";

// // const actions = [
// //   {
// //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //     text: "Upload JD",
// //   },
// //   {
// //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //     text: "Upload Resume",
// //   },
// //   {
// //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
// //     text: "Link to HR DB",
// //   },
// // ];

// // export default function ActionButtons() {
// //   return (
// //     <div style={{ display: "flex", gap: "16px" }}>
// //       {actions.map((action, index) => (
// //         <button
// //           key={index}
// //           style={{
// //             display: "flex",
// //             alignItems: "center",
// //             padding: "10px",
// //             borderRadius: "8px",
// //             border: "1px solid #ccc",
// //             backgroundColor: "#f9f9f9",
// //             cursor: "pointer",
// //           }}
// //           onClick={() => handleClick(action.text)}
// //         >
// //           <img
// //             src={action.icon}
// //             alt={action.text}
// //             style={{ width: "24px", height: "24px", marginRight: "10px" }}
// //           />
// //           {action.text}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // }

// // function handleClick(action) {
// //   if (action === "Upload JD") {
// //     // Logic to handle JD upload
// //     alert("Uploading JD...");
// //   } else if (action === "Upload Resume") {
// //     // Logic to handle resume upload
// //     alert("Uploading Resume...");
// //   } else if (action === "Link to HR DB") {
// //     // Logic to handle HR DB linking
// //     alert("Linking to HR DB...");
// //   }
// // }


// import React, { useRef } from "react";

// const actions = [
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//     text: "Upload JD",
//   },
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//     text: "Upload Resume",
//   },
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
//     text: "Link to HR DB",
//   },
// ];

// export default function ActionButtons() {
//   const fileInputRef = useRef(null);

//   const handleClick = (action) => {
//     if (action === "Upload JD" || action === "Upload Resume") {
//       fileInputRef.current.click(); // Trigger the file input dialog
//     } else if (action === "Link to HR DB") {
//       alert("Linking to HR DB...");
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       alert(`Selected file: ${file.name}`);
//       // Add your file upload logic here
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "16px" }}>
//       {actions.map((action, index) => (
//         <button
//           key={index}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             backgroundColor: "#f9f9f9",
//             cursor: "pointer",
//           }}
//           onClick={() => handleClick(action.text)}
//         >
//           <img
//             src={action.icon}
//             alt={action.text}
//             style={{ width: "24px", height: "24px", marginRight: "10px" }}
//           />
//           {action.text}
//         </button>
//       ))}

//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: "none" }}
//         onChange={handleFileChange}
//       />
//     </div>
//   );
// }
"use client";
import React, { useRef } from "react";

const actions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    text: "Upload JD",
  },
{
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4666ce004fffd416e43ba9675099e1830b6f96844dafaead010941605bdf8fc7?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    text: "Upload Resume",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/397213d5067a9cfba80156c77bd63a9776da15fb0e415b311d10217c4eb253e1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    text: "Link to HR DB",
  },
];

export default function ActionButtons() {
  const fileInputRef = useRef(null);

  const handleClick = (action) => {
    if (action === "Upload JD" || action === "Upload Resume") {
      fileInputRef.current.click(); // Trigger the file input dialog
    } else if (action === "Link to HR DB") {
      alert("Linking to HR DB...");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`); // Fixed string interpolation with backticks
      // Add your file upload logic here
    }
  };
  

  return (
    <div style={{ display: "flex", gap: "7px" }}>
      {actions.map((action, index) => (
        (action.text==="Upload Resume" ?<button 
          key={index} 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            padding: "7px", 
            borderRadius: "8px", 
            border: "1px solid #ccc", 
            backgroundColor: "#f9f9f9", 
            cursor: "pointer", 
          }} 
          // onClick={() => handleClick(action.text)} 
        > 
          <input 
            type="file" 
            onChange={handleFileChange} 
            accept=".pdf,.docx" 
            style={{ display: "none" }} // Hide the input element
            id="Upload-Resume" // Unique id for accessibility
          /> 
          <label 
            htmlFor="Upload-Resume" // Link the button with the file input via label
            style={{ 
              display: "flex", 
              alignItems: "center", 
              cursor: "pointer" 
            }}
          >
            <img 
              src={action.icon} 
              alt={action.text} 
              style={{ width: "24px", height: "24px", marginRight: "10px" }} 
            /> 
            {action.text}
          </label>
        </button>:<button
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "7px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
          }}
          onClick={() => handleClick(action.text)}
          
        >
          <img
            src={action.icon}
            alt={action.text}
            style={{ width: "24px", height: "24px", marginRight: "10px" }}
          />
          {action.text}
        </button> )
        
      ))}
               

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}