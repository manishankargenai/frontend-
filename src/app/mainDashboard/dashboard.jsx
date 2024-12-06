

// // Dashboard.js
// "use client";
// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import Header from './head';
// import SearchBar from './sear';
// import ActionButtons from './act';
// import ThresholdScore from './thres';
// import JobDescription from './jobdesc';
// import Resume from './resume';
// import CommunicationSkills from './commun';
// import Coding from './coding';
// import BehaviouralSkills from './behave';
// import CommonDashboard from './common';
// import HRSystem from './hr';
// import { useState } from 'react';
// import ProfileActions from '../top/profile';
// import "./styles.css"
// function Dashboard() {
//   const [showThreshold, setShowThreshold] = useState(true);
//   const [showJobDescription, setShowJobDescription] = useState(true);
//   const [showResume, setShowResume] = useState(true);
//   const [showCommunicationSkills, setShowCommunicationSkills] = useState(true);
//   const [showCoding, setShowCoding] = useState(true);
//   const [showBehaviouralSkills, setShowBehaviouralSkills] = useState(true);
//   const [showCommondashBoard, setShowCommondashBoard] = useState(true);
//   const [showHrSystem, setShowHrSystem] = useState(true);

//   // Create items array based on visibility states
//   const getItems = () => {
//     const baseItems = [
//       // { id: 'communication-skills', component: <CommunicationSkills /> },
//       // { id: 'coding', component: <Coding /> },
//       // { id: 'behavioural-skills', component: <BehaviouralSkills /> },
//       // { id: 'common-dashboard', component: <CommonDashboard /> },
//       // { id: 'hr-system', component: <HRSystem /> },
//     ];

//     let items = [...baseItems];

//     if (showThreshold) {
//       items.unshift({ 
//         id: 'threshold', 
//         component: <ThresholdScore onMinimize={() => setShowThreshold(false)} /> 
//       });
//     }

//     if (showJobDescription) {
//       items.unshift({ 
//         id: 'job-description', 
//         component: <JobDescription onMinimize={() => setShowJobDescription(false)} /> 
//       });
//     }
//     if (showResume) {
//       items.unshift({ 
//         id: 'resume', 
//         component: <Resume onMinimize={() => setShowResume(false)} /> 
//       });
//     }
//     if (showCommunicationSkills) {
//       items.unshift({ 
//         id: 'communication-skills', 
//         component: <CommunicationSkills onMinimize={() => setShowCommunicationSkills(false)} /> 
//       });
//     }
//     if (showCoding) {
//       items.unshift({ 
//         id: 'coding', 
//         component: <Coding onMinimize={() => setShowCoding(false)} /> 
//       });
//     }
//     if (showBehaviouralSkills) {
//       items.unshift({ 
//         id: 'Behavioural-skills', 
//         component: <BehaviouralSkills onMinimize={() => setShowBehaviouralSkills(false)} /> 
//       });
//     }
//     if (showCommondashBoard) {
//       items.unshift({ 
//         id: 'commondashboard', 
//         component: <CommonDashboard onMinimize={() => setShowCommondashBoard(false)} /> 
//       });
//     }
//     if (showHrSystem) {
//       items.unshift({ 
//         id: 'HrSytesm', 
//         component: <HRSystem onMinimize={() => setShowHrSystem(false)} /> 
//       });
//     }
//     return items;
//   };

//   const [draggedItems, setDraggedItems] = React.useState(getItems());

//   // Update draggedItems whenever visibility states change
//   React.useEffect(() => {
//     setDraggedItems(getItems());
//   }, [showThreshold, showJobDescription,showResume,showCommunicationSkills,showCoding,showBehaviouralSkills,showCommondashBoard,showHrSystem]);

//   const handleShowThreshold = () => {
//     setShowThreshold(true);
//   };

//   const handleShowJobDescription = () => {
//     setShowJobDescription(true);
//   };
//   const handleShowResume = () => {
//     setShowResume(true);
//   };
//   const handleShowCommunicationSkills = () => {
//     setShowCommunicationSkills(true);
//   };
//   const handleShowCoding = () => {
//     setShowCoding(true);
//   };
//   const handleShowBehaviouralSkills = () => {
//     setShowBehaviouralSkills(true);
//   };
//   const handleShowCommondashBoard = () => {
//     setShowCommondashBoard(true);
//   };
//   const handleShowHrSystem = () => {
//     setShowHrSystem(true);
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const reorderedItems = Array.from(draggedItems);
//     const [movedItem] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, movedItem);
//     setDraggedItems(reorderedItems);
//   };

//   return (
//     <main className="flex overflow-hidden flex-col bg-indigo-40 pb-[20px] max-md:pb-24">
//       <Header />
//       <div className="flex gap:3 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
//         <SearchBar />
//         <ActionButtons />
//         <ProfileActions 
//           onShowThreshold={handleShowThreshold}
//           onShowJobDescription={handleShowJobDescription}
//           onShowResume={handleShowResume}
//           onShowCommunicationSkills={handleShowCommunicationSkills}
//           onShowCoding={handleShowCoding}
//           onShowBehaviouralSkills={handleShowBehaviouralSkills}
//           onShowHrSystem={handleShowHrSystem}
//           onShowCommondashBoard={handleShowCommondashBoard}
//         />
//       </div>
//       <div >
//         <DragDropContext onDragEnd={onDragEnd}>
//           <Droppable droppableId="grid" direction="horizontal">
//             {(provided) => (
//               <div 
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className= " grid grid-cols-3 gap-1.5 mt-2 ml-8 max-w-full bg-grey  blurBackground  "
//               >
//                 {draggedItems.map((item, index) => (
//                   <Draggable key={item.id} draggableId={item.id} index={index}>
//                     {(provided) => (
//                       <div
                      
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="flex items-center justify-center min-h-[100px] border border-gray-300 rounded bg-white shadow-md blurBackground  "
//                       >
//                         {item.component}
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </div>
//     </main>
//   );
// }

// export default Dashboard;









"use client";
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Header from '../components/header';
import SearchBar from "../components/searchBar";
import ActionButtons from '../components/actionbuttons';
import ThresholdScore from './thres';
import JobDescription from './jobdesc';
import Resume from './resume';
import CommunicationSkills from './commun';
import Coding from './coding';
import BehaviouralSkills from './behave';
import CommonDashboard from './common';
import HRSystem from './hr';
import { useState } from 'react';
import ProfileActionV from './profileaa';

import "./styles.css"

function Dashboard() {
  const [showThreshold, setShowThreshold] = useState(true);
  const [showJobDescription, setShowJobDescription] = useState(true);
  const [showResume, setShowResume] = useState(true);
  const [showCommunicationSkills, setShowCommunicationSkills] = useState(true);
  const [showCoding, setShowCoding] = useState(true);
  const [showBehaviouralSkills, setShowBehaviouralSkills] = useState(true);
  const [showCommondashBoard, setShowCommondashBoard] = useState(true);
  const [showHrSystem, setShowHrSystem] = useState(true);
const [ViewItems,setViewItems]=useState([])
  // Modified getItems function to show Threshold first
  const getItems = () => {
    const items = [];

    // Add Threshold first
    if (showThreshold) {
      items.push({ 
        id: 'threshold', 
        
        component: <ThresholdScore onMinimize={() => {setShowThreshold(false);setViewItems(["threshold", ...ViewItems] )} } /> 
      });
    }

    // Add remaining items in desired order
    if (showJobDescription) {
      items.push({ 
        id: 'job-description', 
        component: <JobDescription onMinimize={() =>{ setShowJobDescription(false);setViewItems(["job-description", ...ViewItems] )} } /> 
      });
    }
    if (showResume) {
      items.push({ 
        id: 'resume', 
        component: <Resume onMinimize={() => {setShowResume(false);setViewItems(["resume", ...ViewItems] )}} /> 
      });
    }
    if (showCommunicationSkills) {
      items.push({ 
        id: 'communication-skills', 
        component: <CommunicationSkills onMinimize={() => {setShowCommunicationSkills(false);setViewItems(["communication-skills", ...ViewItems] )}} /> 
      });
    }
    if (showCoding) {
      items.push({ 
        id: 'coding', 
        component: <Coding onMinimize={() => {setShowCoding(false);setViewItems(["coding", ...ViewItems] )}} /> 
      });
    }
    if (showBehaviouralSkills) {
      items.push({ 
        id: 'Behavioural-skills', 
        component: <BehaviouralSkills onMinimize={() => {setShowBehaviouralSkills(false);setViewItems(["Behavioural-skills", ...ViewItems] )}} /> 
      });
    }
    if (showCommondashBoard) {
      items.push({ 
        id: 'commondashboard', 
        component: <CommonDashboard onMinimize={() => {setShowCommondashBoard(false);setViewItems(["commondashboard", ...ViewItems] )}} /> 
      });
    }
    if (showHrSystem) {
      items.push({ 
        id: 'HrSystem', 
        component: <HRSystem onMinimize={() => {setShowHrSystem(false);setViewItems(["HrSystem", ...ViewItems] )}} /> 
      });
    }

    return items;
  };

  const [draggedItems, setDraggedItems] = React.useState(getItems());

  // Update draggedItems whenever visibility states change
  React.useEffect(() => {
    setDraggedItems(getItems());
  }, [showThreshold, showJobDescription, showResume, showCommunicationSkills, 
      showCoding, showBehaviouralSkills, showCommondashBoard, showHrSystem]);

  const handleShowThreshold = () => {setShowThreshold(true);const filtered = ViewItems.filter((item)=> item !=="threshold")  ; setViewItems(filtered)};
  const handleShowJobDescription = () => {setShowJobDescription(true); const filtered = ViewItems.filter((item)=> item !=="job-description")  ; setViewItems(filtered)};
  const handleShowResume = () =>{ setShowResume(true);const filtered = ViewItems.filter((item)=> item !=="resume")  ; setViewItems(filtered)};
  const handleShowCommunicationSkills = () => {setShowCommunicationSkills(true);const filtered = ViewItems.filter((item)=> item !=="communication-skills")  ; setViewItems(filtered)};
  const handleShowCoding = () => {setShowCoding(true);const filtered = ViewItems.filter((item)=> item !=="coding")  ; setViewItems(filtered)};
  const handleShowBehaviouralSkills = () => {setShowBehaviouralSkills(true);const filtered = ViewItems.filter((item)=> item !=="Behavioural-skills")  ; setViewItems(filtered)};
  const handleShowCommondashBoard = () => {setShowCommondashBoard(true);const filtered = ViewItems.filter((item)=> item !=="commondashboard")  ; setViewItems(filtered)};
  const handleShowHrSystem = () => {setShowHrSystem(true);const filtered = ViewItems.filter((item)=> item !=="HrSystem")  ; setViewItems(filtered)};

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(draggedItems);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);
    setDraggedItems(reorderedItems);
  };
//  console.log(ViewItems)
  return (
    <main className="flex overflow-hidden flex-col bg-indigo-40 pb-[20px] max-md:pb-24">
      <Header />
      <div className="flex gap-3 justify-between items-start px-16 mt-2 w-full text-sm max-md:px-5 max-md:max-w-full">
        <SearchBar />
        <div className="flex gap-1.5 items-center font-medium capitalize min-w-[240px] text-slate-700">
 
        <ActionButtons />
        <ProfileActionV
          onShowThreshold={handleShowThreshold}
          onShowJobDescription={handleShowJobDescription}
          onShowResume={handleShowResume}
          onShowCommunicationSkills={handleShowCommunicationSkills}
          onShowCoding={handleShowCoding}
          onShowBehaviouralSkills={handleShowBehaviouralSkills}
          onShowHrSystem={handleShowHrSystem}
          onShowCommondashBoard={handleShowCommondashBoard}
          ViewItems ={ ViewItems}
        />
      </div>
      </div>
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="grid" direction="horizontal">
            {(provided) => (
              <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="grid grid-cols-3 gap-1.5 mt-2 ml-8 max-w-full bg-grey"
              >
                {draggedItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-center min-h-[100px] border border-gray-300 rounded bg-white shadow-md"
                      >
                        {item.component}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </main>
  );
}

export default Dashboard;


