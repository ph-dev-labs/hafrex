import React from 'react'
import '../Job-Details/JobDetails.css';
import SideNav from '../../components/Sidebar/SideNav';
import Aside from '../../components/Sidebar/Aside';
import AllJobsMain from '../../components/main/alljobs/AllJobsMain';
import Nav from '../../components/Navbar/Nav';


function AllJob() {
  return (
    <div className='job-detail'>
        <Nav />
       
        <div className='job-detail-main'>
            <div className='job-detail-main-wrapper'>
                <SideNav />
                <AllJobsMain />
                <Aside />
            </div>
        </div>
    </div>
  )
}

export default AllJob;
