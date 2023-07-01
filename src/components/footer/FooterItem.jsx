import React from 'react'
import './MobileFooter.css'
function FooterItem({icon,title}) {
  return (
    <div className='footer-item'>
        <img src={process.env.PUBLIC_URL+icon} alt="home"/>
        <p className='foot-home-text'>{title}</p>
    </div>
  )
}

export default FooterItem
