import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes,Route } from 'react-router-dom';
import Main from "./Pages/Main/Main";
import Job from "./Pages/ALL-Jobs/Job";
import JobDetails from "./Pages/Job-Details/JobDetails";
import Home from "./Pages/Home/Home"
function App() {
  return (
    
      // <Routes>
      //   <Route path='/' element={<JobDetails />} />
      //   <Route path='/alljobs' element={<AllJobs />} />   
      // </Routes>
    
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
