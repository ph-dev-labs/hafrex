import React from 'react'
import './JobDetailMain.css'
function JobDetailMain() {
  return (
    <div className='main-contents'>
      <img className='main-arrow-back' src={process.env.PUBLIC_URL+"/images/arrowBack.svg"}  alt="arrow-back"/>
      <div className='main-inner-content'>
        <img className='main-logo' src={process.env.PUBLIC_URL+"/images/profileIcon.svg"} alt="logo" />
        <div className='main-inner-content-desc'>
            <h1 className='main-title'>Job Title <span className='main-title-num'>(10 out of  50 application received)</span></h1>
            <ul className='main-list'>
                <li>Workplace type</li>
                <li>Country, City</li>
                <li>Workplace(Hybrid, Remote, On-site)</li>
                <li>Job type (fulltime, part-time, etc..)</li>
                <li>Posted on</li>
                <li className='main-date'>12/5/2023  <span>2:19 PM</span></li>

            </ul>
            <div className='main-content-details'>
                <h1 className='main-details'>Details</h1>
                <div className='main-description'>
                    <h3 className='main-gap'>Description</h3>
                    <p>An app that makes travel planning easy for real. Get AI suggestions for your next trip, and build out full-fledged itinerary with features like navigation, hotel hunting, flight bookings, etc. The goal is to make the best travel planning app out there.</p>
                </div>
            
                <div className='main-qualification'>
                    <h3 className='main-gap'>Qualifications</h3>
                    <p>Master of Computer Applications - MCA</p>
                    <span className='main-dates'>Nov 2021 - Jun 2023</span>
                    <p>Bsc Statistics, Computer Technology/Computer Systems Technology</p>
                    <span className='main-dates'>017</span>
                </div>
            
                <div className='main-skill'>
                    <h3 className='m-text'>Skills, Experience</h3>
                    <p className='m-text'>Figma</p>
                    <span className='main-dates'>2 Years</span>
                    <p>Adobe XD</p>
                    <span className='main-dates'>2 Years</span>
                </div>

                <h1 className='main-title'>Skills, Experience</h1>
                <ul className='main-list-skills'>
                    <li>No. of vacancies</li>
                    <li>No. of  Application required</li>
                    <li>Annual CTC range</li>
                    <li>Max budget - Min CTC</li>
                    <li>Fulfillment Payout (Percentage, Fixed Payout)</li>
                </ul>
            </div>
            <button className='btn'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default JobDetailMain
