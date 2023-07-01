import React from 'react'
import './MobileFooter.css'
import FooterItem from './FooterItem'
function MobileFooter() {
  return (
    <div className='footer'>
        <img className='add-icon' src={process.env.PUBLIC_URL+"/images/footerAdd.svg"} alt='add'/>
        <div className='footer-mobile'>
        <div className='footer-wrapper'>
            <div className='footer-home'>
                <FooterItem 
                icon="/images/footerHome.svg"
                title="Home"
                />
            </div>
            <div clxassName='footer-jobs'>

                <FooterItem 
                icon="/images/footerJobs.svg"
                title="Jobs"
                />
            </div>

            <div className='footer-candidate'>
                <p className='foot-home-text'>Add a Candidate</p>
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
