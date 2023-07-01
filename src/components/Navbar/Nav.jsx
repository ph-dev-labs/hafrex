import React from 'react'
import './Navbar.css'
function Nav() {
  return (
    <div className='nav'>
      <div className='nav-wrapper'>
        <div className='nav-left'>
            <img className='nav-logo' src={process.env.PUBLIC_URL+"/images/LogoIcon.svg"} alt="logo"/>
            <h1 className='logo-title'>Securing Digital World!</h1>
        </div>
        <div className='nav-right'>
            <div className='nav-all-jobs nav-item'>
                <img className='nav-icon' src={process.env.PUBLIC_URL+"/images/JobIcon.svg"} alt="Alljob" />
                <p>All Jobs</p>
            </div>
            <div className='nav-candidate nav-item'>
                <img className='nav-icon' src={process.env.PUBLIC_URL+"/images/candidateIcon.svg"} alt="candidate" />
                <p>Add a Candidate</p>
            </div>
            <div className='nav-profile nav-item'>
                <img className='nav-icon' src={process.env.PUBLIC_URL+"/images/profileIcon.svg"} alt="profile" />
                <div className='nav-profile-arrow'>
                    <p>My Profile</p>
                    <img src={process.env.PUBLIC_URL+"/images/profileArrow.svg"} alt='arrow' />
                </div>
            </div>
        </div>
      </div>
        <div className='mobile-nav'>
          <img src={process.env.PUBLIC_URL+"/images/mobileNavIcon.svg"} alt="mobileIcon"/>
        </div>
    </div>
  )
}

export default Nav
