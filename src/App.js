import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes,Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import Job from "./Pages/ALL-Jobs/Job";
import JobDetails from "./Pages/Job-Details/JobDetails";
import AllJob from './Pages/all-job/AllJob'
import Home from "./Pages/Home/Home"
function App() {
  return (
    
      // <Routes>
      //   <Route path='/' element={<JobDetails />} />
      //   <Route path='/all-jobs' element={<AllJob/>} />   
      // </Routes>
    
    // <div className="App">
    //   <div className="d-flex flex-column">
    //     <Navbar />
    //     <div className="d-flex flex-row">
    //       <Sidebar />
    //       <Routes>
    //         <Route exact path="/" element={<Main />} />
    //         <Route path="/alljobs" element={<AllJobs />} />
    //         <Route path="/alljobs" element={<AllJobs />} />
    //       </Routes>
    //       <Sidebar empty />
    //     </div>
    //   </div>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/jobdetails' element={<JobDetails />} />
         <Route path='/alljobs' element={<Job />} />   
     </Routes>

     </div>

  
  );
}

export default App;
