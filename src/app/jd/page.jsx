import React from 'react';
import Header from '../bot/headerr';
import ResumeSection from './jdsec';
// import MainContent from './maincon';
import Sidebar from "../top/sidebar"
import Logo from "../bot/logo";
//import { ViewSidebarSharp } from '@mui/icons-material';
export default  function Bot() {
  return (
     <div className="flex overflow-hidden flex-col items-center pb-24 bg-indigo-50">
        <Header />
       <ResumeSection /> 
     <div className="flex  w-80 self-start"> <Sidebar/> 
     <Logo/></div>

         </div>
    // <h1> this is a</h1>
  );
}