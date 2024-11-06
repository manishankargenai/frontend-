
import React from 'react';
import Header from './headur';
import ResumeSection from './resumeeee';
import MainContent from './mainecon';
export default  function Bot() {
  return (
     <div className="flex overflow-hidden flex-col items-center pb-24 bg-indigo-50">
        <Header />
       <ResumeSection /> 
     <MainContent /> 
         </div>
    // <h1> this is a</h1>
  );
}

