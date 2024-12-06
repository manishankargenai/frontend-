import React from 'react';
import Header from './headerr';
import ResumeSection from './resummm';
// import MainContent from './maincon';
import Dashboard from "./sidebar"
// import Logo from "./logo";
//import { ViewSidebarSharp } from '@mui/icons-material';
export default  function Bot() {
  return (
     <div className="flex overflow-hidden flex-col items-center bg-indigo-50">
        <Header />
       <ResumeSection /> 
     <div className="flex  w-full self-start"> <Dashboard/> 
     </div>

         </div>
    // <h1> this is a</h1>
  );
}

