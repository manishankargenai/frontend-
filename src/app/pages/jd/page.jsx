
import Dashboard from "./sidebar";
import Header from "./header";
import JobTop from "./jdtop";

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// // import Header from '../components/head';
// import SearchBar from "../../components/searchBar";
// import ActionButtons from '../../components/act';
// import DashboardView from "./DashboardView"
//import { ViewSidebarSharp } from '@mui/icons-material';
export default  function App() {
  return (
     <div className="flex overflow-hidden flex-col items-center pb-24 bg-indigo-50"> 
<Header/>
<JobTop/>
     <div className="flex  w-full self-start"> <Dashboard/> 
     </div>

         </div>
    // <h1> this is a</h1>
  );
}