
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
import SidebarComponent from "./sidebar"

export default function ThresholdScore1() {
  return (
    <div className="flex overflow-hidden flex-col pb-16 bg-indigo-50">
      <Header />
      <main className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
          <SearchBar />
          <ActionButtons />
          <ProfileActions />
        </div>

        <section className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
          <div className="flex flex-col pb-32 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
            <ScoreSection />
            <div className="flex gap-5 max-md:flex-col">
        <SidebarComponent />
        
            <div className="mt-4 mr-4 mb-0 ml-4 max-md:mr-2.5 max-md:mb-2.5 max-md:max-w-full">
              <div className="flex gap-1 max-md:flex-col">
                <CloudSkillsSection />
                <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md:mt-3 max-md:max-w-full">
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="flex flex-wrap gap-0 items-start w-full max-md:max-w-full">
                        <DatabaseSection /> 
                      </div>
                      <div className="flex flex-wrap gap-0 items-start w-full max-md:max-w-full">
                        <ImplementationSection />
                      </div>
                      <div className="flex flex-wrap gap-0 items-center w-full max-md:max-w-full">
                        <DeploymentSection />
                      </div>
                    </div>
                  </div>
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





