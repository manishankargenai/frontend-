// import React from 'react';
// import Header3 from '../sprofile/Header';
// //import Navigation from './Navigation';
// import FollowerCard from './followerscard';
// import UserProfile from './Userprofile';
// import TabNavigation from './TabNavigation';

// const followers = [
//   {
//     id: 1,
//     name: "Darlene Robertson",
//     location: "Coppell, Virginia",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6482186c0fc2c4192acc37239a4cbb2735eebb1db801c1026982f5ebf2c1fb15?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//   },
//   {
//     id: 2,
//     name: "Annette Black",
//     location: "Kent, Utah",
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00d04a31f4740ee537401472e23c1080338c6ba71f539879c4280870ac428405?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
//   },
//   //  ... rest of follower data
// ];

// export default function SocialHead41 ()   {
//   return (
//     <main className="flex overflow-hidden flex-col pb-24 bg-indigo-50">
//       {/* <Header3 /> */}
//       {/* <Navigation /> */}
//       <section className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
//         <div className="flex flex-col w-full bg-white shadow-sm pb-[607px] max-md:pb-24 max-md:max-w-full">
//           {/* <UserProfile />
//           <TabNavigation /> */}
//           <div className="flex flex-col px-6 mt-6 mb-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
//             <h2 className="self-start text-2xl font-semibold text-center text-slate-700">
//               Followers
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
//               {followers.map((follower) => (
//                 <FollowerCard key={follower.id} {...follower} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }






import * as React from "react";
import UserCard  from "./followerscard";
import UserGrid  from "./TabItems";
import Header3 from "../sprofile/Header";
import Link from "next/link";
import NavigationTabs from "../portfolio/NavigationTabs";
import ProfileHead24 from "../portfolio/ProfileHeader";

const followers = [
  {
    id: 1,
    name: "Darlene Robertson",
    location: "Coppell, Virginia",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6482186c0fc2c4192acc37239a4cbb2735eebb1db801c1026982f5ebf2c1fb15?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
  },
  {
    id: 2,
    name: "Annette Black",
    location: "Kent, Utah",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/00d04a31f4740ee537401472e23c1080338c6ba71f539879c4280870ac428405?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9"
  },
  // ... rest of followers data
];

const tabs = [
  { id: 1, label: "Profile", active: false },
  { id: 2, label: "Followers", active: true },
  { id: 3, label: "Friends", active: false },
  { id: 4, label: "Portfolio", active: false },
  { id: 5, label: "Social Ranking", active: false }
];

export default function SocialProfile() {
  return (
    <div className="flex overflow-hidden flex-col items-center pb-24 bg-indigo-50">
      <Header3 />
      <main className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
      <article className="flex flex-col pb-96 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
        <header className="flex flex-wrap gap-10 justify-between items-center px-4 py-2 w-full border-b border-indigo-500 min-h-[40px] max-md:max-w-full">
          <div className="flex gap-2 items-center self-stretch my-auto text-base font-semibold text-indigo-600">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1797a7e592e007bed6feb4918bb8bac12a36d8b25a8647260684d873a78b0dfe?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <h1 className="self-stretch my-auto">Social Profile</h1>
          </div>
          <div className="flex  justify-end gap-1 items-center self-stretch my-auto min-w-[240px] w-[627px] max-md:max-w-full">
           <Link href="/sprofile"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4ea30ec29d76f4a801da11b95bfd74e0ee9e2ebf68a2f37ce1250f2cdf740ba?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="" className="object-contain self-stretch my-auto w-6 aspect-square" />
          
           </Link></div>
      </header>
      <ProfileHead24 />
      <NavigationTabs />
      {/* <section className="pt-12 pr-20 pl-6 bg-indigo-600 max-md:px-5 max-md:max-w-full">
        <div className="flex  gap-5 max-md:flex-col">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/52c0cfa37afd3d907d12442ec50ca0e8d90ffe93211435c69f68f448b07f7ae1?placeholderIfAbsent=true&apiKey=cc964368bac44d9ca0eed220fa7a4da9" alt="Floyd Miles profile" className="object-contain shrink-0 aspect-[0.99] w-[84px] max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-5 text-center text-white max-md:mt-10">
              <h2 className="text-xl font-semibold">Floyd Miles</h2>
              <p className="mt-2.5 text-xs font-light">UI Developr@cognizant</p>
            </div>
          </div>
        </div>
      </section> */}

      <nav className="flex flex-wrap items-center text-sm tracking-normal leading-3 capitalize text-slate-700 max-md:max-w-full">
        {tabs.map((tab) => (
          <UserGrid key={tab.id} {...tab} />
        ))}
      </nav>

      <section className="flex flex-col px-6 mt-6 mb-0 max-md:px-5 max-md:mb-2.5 max-md:max-w-full">
        <h3 className="self-start text-2xl font-semibold text-center text-slate-700">Followers</h3>
        <div className="flex flex-wrap gap-4 mt-9">
          {/* {followers.map((follower) => (
            <UserCard key={follower.id} {...follower} />
          ))} */}
        </div>
      </section>
      </article>
    </main>
    </div>

  );
}
