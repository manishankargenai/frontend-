import React from 'react';
//import ThresholdScore from "./top/ThresholdScoreProps";
//import Dashboard  from "./dash/dashboard";
import ThresholdScore1 from './ThresholdScoreProps';
//import Header from "../bot/headerr"



export default  function home() 
 {
  return (
    <div className="flex overflow-hidden flex-col pb-16 bg-indigo-50">
      <ThresholdScore1 />
    </div>
  );
};