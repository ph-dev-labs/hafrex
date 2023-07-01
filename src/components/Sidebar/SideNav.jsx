import React from 'react'
import SideNavData from './SideNavData.json';
import { Link } from 'react-router-dom';
function SideNav() {
  const allSideNavData = SideNavData;
  return (
    <div className='sidenav'>
       <div className='sidenav-name'>
          <img src={process.env.PUBLIC_URL+"/images/akLogo.svg"} alt="ak" />
          <h1 className='sidenav-name-title'>Dr. Arvind K</h1>
       </div>
       <div className='sidenav-menu-container'>
          {
            allSideNavData.map((item)=>(

              <div className={`sidenav-menu ${item.subNav ? "sub-down-space":"down-space"}`} key={item.id}>
                <div className='sidenav-item'>
                  <img src={process.env.PUBLIC_URL+item.icon} alt="item.title"/>
                  <h1 className='sidenav-item-title'>{item.title}</h1>
                </div>
                
                {
                  item.subNav && item.subNav.map((subItem,index)=>(
                    <div className='sidenav-subItem' key={index}>
                        <p className='sidenav-subItem-text'>{subItem.subTitle}</p>
                    </div>
                  ))

                }

              </div>
            ))
          }
       </div>
    </div>
  )
}

export default SideNav
