// import * as React from "react";

// export function TabItem({ label, active }) {
//   return (
//     <button
//       className={`gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap ${
//         active
//           ? "font-bold border-b-2 border-solid border-b-indigo-700"
//           : "border-b border-solid border-b-neutral-300"
//       } min-w-[240px]`}
//     >
//       {label}
//     </button>
//   );
// }
import React from 'react';
import UserCard from './followerscard';

const users = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/6482186c0fc2c4192acc37239a4cbb2735eebb1db801c1026982f5ebf2c1fb15?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    name: "Darlene Robertson",
    location: "Coppell, Virginia"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/00d04a31f4740ee537401472e23c1080338c6ba71f539879c4280870ac428405?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    name: "Annette Black",
    location: "Kent, Utah"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ed297f736497c156db5243d0862f5b3f5c70f850b951592f1727f476b448684?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    name: "Wade Warren",
    location: "Stockton, New Hampshire"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c34bcd9e0785ab93d9e91daf977d855f04a871248220512fa9d3594079dd65de?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9",
    name: "Brooklyn Simmons",
    location: "Syracuse, Connecticut"
  }
];

 export default function UserGrid() {
  return (
    <main className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
      {users.map((user, index) => (
        <UserCard
          key={index}
          imageUrl={user.imageUrl}
          name={user.name}
          location={user.location}
        />
      ))}
    </main>
  );
}

