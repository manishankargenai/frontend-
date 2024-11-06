import React from 'react';
//import ThresholdScore from "./top/ThresholdScoreProps";
import Dashboard  from "./dash/dashboard";



export default  function home() 
 {
  return (
    <div className="flex overflow-hidden flex-col pb-16 bg-indigo-50">
      <Dashboard />
    </div>
  );
};
