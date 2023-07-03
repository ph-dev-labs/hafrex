import React from 'react'
import './MobileFooter.css'
import { Link } from 'react-router-dom'
import FooterItem from './FooterItem'
function MobileFooter() {
  return (
    <div className='footer'>
        <img className='add-icon' src={process.env.PUBLIC_URL+"/images/footerAdd.svg"} alt='add'/>
        <div className='footer-mobile'>
        <div className='footer-wrapper'>
            <div className='footer-home'>
                <Link to="/">
                <FooterItem 
                icon="/images/footerHome.svg"
                title="Home"
                />
                </Link>
            </div>
            <div className='footer-jobs'>
                <Link to="/alljobs">
                <FooterItem 
                icon="/images/footerJobs.svg"
                title="Jobs"
                />
                </Link>
            </div>

            <div className='footer-candidate'>
                <Link to="/refer"><p className='foot-home-text'>Add a Candidate</p></Link>
            </div>
           
            <FooterItem 
            icon="/images/footerReferral.svg"
            title="Referrals"
            />
            
            <div className='footer-profile'>

                <FooterItem 
                    icon="/images/footerProfile.svg"
                    title="Profile"
                />
            </div>
        </div>  
        </div>
        
    </div>
  )
}

export default MobileFooter
