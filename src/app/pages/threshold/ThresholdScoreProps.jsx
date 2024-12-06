"use client";
import React, { useState, useEffect } from "react";
import Header from "./header";
import SearchBar from "./searchBar";
import ActionButtons from "./action";
import ProfileActions from "./profile";
import ScoreSection from "./score";
import ImplementationSection from "./implement";
import DatabaseSection from "./database";
import DeploymentSection from "./deployement";
import Sidebar from "./sidebar";
import CloudSkillsSection from "./cloudskill";
import Footer from "./footer";

export default function ThresholdScore1() {
    // State Management
    const [roles, setRoles] = useState([]);
    const [skillsData, setSkillsData] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [dashboardData, setDashboardData] = useState([]);
    const [thresholdScores, setThresholdScores] = useState({
        selection: 0,
        rejection: 0
    });
    const [sharedValue, setSharedValue] = useState(null)
    const [selectedRolesForThreshold, setSelectedRolesForThreshold] = useState([]);

    const handleSelectedRoles = (roles) => {
        setSelectedRolesForThreshold(roles);
    };


    const handleSendRangeValue = (value) => {
        setSharedValue(value)
    }
    

    // Handlers
    const handleRolesUpdate = (newRoles) => {
        setRoles(newRoles);
        console.log("Updated Roles:", newRoles);
    };

    const handleSkillsUpdate = (newSkills) => {
        setSkillsData(newSkills);
        console.log("Updated Skills Data:", newSkills);
    };

    const handleRoleSelection = (selectedRoles) => {
        setSelectedRoles(selectedRoles);
        console.log("Selected Roles:", selectedRoles);
    };

    const handleDashboardUpdate = (newDashboardData) => {
        setDashboardData(newDashboardData);
        console.log("Updated Dashboard Data:", newDashboardData);
    };

    const handleThresholdUpdate = (selection, rejection) => {
        setThresholdScores({
            selection,
            rejection
        });
    };

    // Main Layout
    return (
        <div className="flex flex-col pb-16 bg-indigo-50 overflow-hidden">
            <Header />
            
            <main className="flex flex-col w-full max-md:max-w-full">
                {/* Top Action Bar */}
                <div className="flex flex-wrap gap-10 items-start pl-8 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
                    <SearchBar />
                    <ActionButtons
                        onRolesUpdate={handleRolesUpdate}
                        onSkillsUpdate={handleSkillsUpdate}
                    />
                    <ProfileActions />
                </div>

                {/* Main Content Section */}
                <section className="flex flex-col justify-center self-center p-0.5 mt-1.5 w-full bg-white max-w-[1315px] max-md:max-w-full">
                    <div className="flex flex-col pb-32 w-full bg-white shadow-sm max-md:pb-24 max-md:max-w-full">
                        {/* Score Section */}
                        <ScoreSection
                            thresholdScores={thresholdScores}
                        />

                        {/* Main Content Layout */}
                        <div className="flex gap-5 max-md:flex-col">
                            {/* Sidebar */}
                            <Sidebar
                                roles={roles}
                                skills_data={skillsData}
                                onRoleSelect={handleRoleSelection}
                                onDashboardUpdate={handleDashboardUpdate}
                                sendRangeValue={handleSendRangeValue}
                                sendSelectedRoles={handleSelectedRoles}
                            />
                            {/* <div className="some">{sharedValue}</div> */}
                            {/* Main Content Area */}
                            <div className="flex flex-col w-[76%] mt-4 max-md:w-full">
                                <div className="flex gap-5 flex-wrap max-md:flex-col">
                                    {/* Cloud Skills Section */}
                                    <CloudSkillsSection
                                        newSkillsData={skillsData} // Passing newSkillsData
                                        selectedRoles={selectedRolesForThreshold} // Passing selectedRoles
                                        receivedValue={sharedValue}
                                        // receivedRole = {}
                                        // Handling threshold updates
                                    />

                                    {/* Database Section */}
                                    {/* <DatabaseSection /> */}
                                </div>

                                {/* Implementation and Deployment */}
                                {/* <div className="flex gap-5 flex-wrap mt-6 max-md:flex-col">
                                    <ImplementationSection />
                                    <DeploymentSection />
                                </div> */}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 items-start self-end mt-6 text-base font-semibold whitespace-nowrap">
                            <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 bg-white rounded-md border border-solid shadow-sm border-neutral-300 text-slate-700 w-[111px]">
                                Cancel
                            </button>
                            <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 text-white bg-indigo-500 rounded-md border border-indigo-500 border-solid shadow-sm w-[111px]">
                                Save
                            </button>
                        </div>
                    </div>
                </section>
            </main>

           
 

        </div>
    );
}
