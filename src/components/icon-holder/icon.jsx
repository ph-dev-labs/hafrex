import React from 'react'
import "./icon.css"
const Icon = (props) => {
    const {title, icon} = props
  return (
    <div className='d-flex flex-column justify-content-between align-items-center'>
        <div>
            <img src={icon} alt='icon' className='icon'/>
        </div>
        <p className='icon-text'>{title}</p>
    </div>
  )
}

export default Icon