"use client";
import React from 'react';
import Header from '../components/head';
import SearchBar from '../mainDashboard/sear';
import ActionButtons from '../components/act';
import ThresholdScore from '../mainDashboard/thres';
import JobDescription from '../mainDashboard/jobdesc';
import Resume from '../mainDashboard/resume';
import CommunicationSkills from '../mainDashboard/commun';
import Coding from '../mainDashboard/coding';
import BehaviouralSkills from '../mainDashboard/behave';
import CommonDashboard from '../mainDashboard/common';
import HRSystem from '../mainDashboard/hr';
import Image from 'next/image';
import ProfileActions from '../pages/threshold/profile';

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