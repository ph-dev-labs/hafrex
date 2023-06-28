import React from 'react'
import Profile from '../Profile/Profile'
import "./Sidebar.css"
const Sidebar = (props) => {
    const {empty} = props
  return (
    <div className='sidebar d-flex flex-column justify-content-evenly align-items-center'>
        <div className={empty ?'empty' : "okay"}>
            <Profile />
            <div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar