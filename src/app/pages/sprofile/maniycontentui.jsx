import React from 'react';
import ProfileSection1 from './prosec';
import PostSection23 from './postsec';
import ProfileSidebar23 from './proslide';
import Link from 'next/link';
//import Feed from './frrd';

function MainContent23() {
  return (
    <main className="flex flex-col justify-center p-0.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
      <div className="flex flex-col pt-10 pb-24 w-full bg-white shadow-sm max-md:max-w-full">
        <ProfileSection1 />
        <nav className="flex flex-wrap items-center mt-1.5 text-sm tracking-normal leading-3 capitalize text-slate-700 max-md:max-w-full">
          <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 min-w-[240px] w-[331px]">Tab</a>
          <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 min-w-[240px] w-[389px]">Tab</a>
          <div className="flex flex-wrap items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <a href="#" className="gap-3 self-stretch px-3 py-4 my-auto font-bold whitespace-nowrap border-b-2 border-solid border-b-indigo-700 w-[102px]">Profile</a>
          <Link href="/followes" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[97px]"> Followers</Link>
            <Link href="followes" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[97px]">Friends</Link>
            <Link href="/portfolio" className="gap-3 self-stretch px-3 py-4 my-auto whitespace-nowrap border-b border-solid border-b-neutral-300 w-[108px]">Portfolio</Link>
            <Link href="/ranks" className="gap-3 self-stretch px-3 py-4 my-auto border-b border-solid border-b-neutral-300 w-[188px]">Social Ranking</Link>
          </div>
        </nav>
        <div className="z-10 mt-1 mr-16 ml-6 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col">
            <aside className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
              <ProfileSidebar23 />
            </aside>
            <PostSection23 />
       
          </div>
        </div>
      </div>
    </main>

  );
}
export default MainContent23;