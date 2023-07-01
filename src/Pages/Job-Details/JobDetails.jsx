import React from 'react'
import Nav from '../../components/Navbar/Nav'
import SideNav from '../../components/Sidebar/SideNav'
import './JobDetails.css'
import JobDetailMain from '../../components/main/JobDetailMain'
import Aside from '../../components/Sidebar/Aside'
import MobileFooter from '../../components/footer/MobileFooter'

function JobDetails() {
  return (
    <div className='job-detail'>
        <Nav />
        <div className='job-detail-main'>
            <div className='job-detail-main-wrapper'>
                <SideNav />
                <JobDetailMain />
                <Aside />
            </div>
        </div>
        <MobileFooter />
    </div>
  )
}

export default JobDetails
