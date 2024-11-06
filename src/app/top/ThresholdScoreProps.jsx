
"use client";
import  React from 'react';
import Header from './header';
import SearchBar from './searchBar';
import ActionButtons from './action';
import ProfileActions from './profile';
import ScoreSection from './score';
import ImplementationSection from './implement';
import DatabaseSection from './database';
import DeploymentSection from './deployement';
import Footer from './footer';
import CloudSkillsSection from "./cloudskill";
import Sidebar from "./sidebar";


export default function ThresholdScore1() {
  return (
    <div className="flex overflow-hidden flex-col pb-16 bg-indigo-50">
      <Header />
      <main className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10  items-start pl-8 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
          <SearchBar />
          <ActionButtons/>
         <ProfileActions />
        </div>

        <section className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
          <div className="flex flex-col pb-32 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
            <ScoreSection />
            <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        
            <div className="mt-4 -mr-40 mb-0 -ml-2  max-md:mr-2.5 max-md:mb-2.5 max-md:max-w-full">
              <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md: max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                     
                <CloudSkillsSection />
                </div>
                <div className="flex flex-wrap gap-0 items-center w-full max-md:max-w-full">
                        <DeploymentSection />
                      </div>
                      </div>
                      </div>
                     </div>  
                <div className=" mt-4 flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col gap-5 w-full max-md: max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                     
                <DatabaseSection />
                </div>
                <div className="flex flex-wrap gap-0. items-center w-full max-md:max-w-full">
                        <ImplementationSection />
                      </div>
                      </div>
                      </div>
            
           
            <Footer />
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}





