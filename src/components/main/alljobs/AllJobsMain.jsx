import React from 'react'
import './AllJobsMain.css'
function AllJobsMain() {
  return (
    <div className='all-jobs-main'>
      <div className='alljobs-main--search'>
        <h1 className='alljobs-main-title'>All Jobs</h1>
        <div className='alljobs-search-container'>
            <label>Search</label>
            <div className='alljobs-search-bar'>
                <input type='text' className='alljobs-search-input'/>
                <img src={process.env.PUBLIC_URL+"/images/"} />
            </div>
        </div>
      </div>
      <h1>All Jobs</h1>

    </div>
  )
}

export default AllJobsMain
