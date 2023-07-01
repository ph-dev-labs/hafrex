import React from 'react'
import Nav from '../../components/Navbar/Nav'
import SideNav from '../../components/Sidebar/SideNav'
import './job.css'
import AllJobs from '../../components/details/AllJobs'
import Aside from '../../components/Sidebar/Aside'
import MobileFooter from '../../components/footer/MobileFooter'

function Job() {
  return (
    <div className='job-detail'>
        <Nav />
        <div className='job-detail-main'>
            <div className='job-detail-main-wrapper'>
                <SideNav />
                <AllJobs />
                <Aside />
            </div>
        </div>
        <MobileFooter />
    </div>
  )
}

export default Job
