"use client";
import React from 'react';
import Header from '../dash/head';
import SearchBar from '../dash/sear';
import ActionButtons from '../dash/act';
import ThresholdScore from '../dash/thres';
import JobDescription from '../dash/jobdesc';
import Resume from '../dash/resume';
import CommunicationSkills from '../dash/commun';
import Coding from '../dash/coding';
import BehaviouralSkills from '../dash/behave';
import CommonDashboard from '../dash/common';
import HRSystem from '../dash/hr';
import Image from 'next/image';
import ProfileActions from '../top/profile';

<Image src="/your-image-source.jpg" alt="description" width={500} height={500} />


function Dashboard1() {
  return (
    <main className="flex overflow-hidden flex-col bg-indigo-50 pb-[718px] max-md:pb-24">
      <Header/>
      <div className="flex flex-wrap gap-10 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
        <SearchBar />
        <ActionButtons />
        <ProfileActions/>
      </div>
     
      <div className="flex flex-col mt-2 ml-16 max-w-full h-[330px] justify-between">
        <div className="flex gap-1 items-center mt-1 w-full max-md:max-w-full">
          <ThresholdScore />
          <JobDescription />
          <Resume />
        </div>
        <div className="flex gap-1 items-center mt-1 w-full max-md:max-w-full">
          <CommunicationSkills />
          <Coding />
          <BehaviouralSkills />
        </div>
        <div className="flex gap-1 items-center mt-1 w-full max-md:max-w-full">
          <CommonDashboard />
          <HRSystem />
        </div>
      </div>
    </main>
  );
}

export default Dashboard1;