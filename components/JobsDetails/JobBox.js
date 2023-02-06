import React from 'react';
import Image from 'next/image';
import classes from '../../styles/JobsDetalis.module.css';
import CompanyLogo from '../../public/images/h6.png';

const JobBox = () => {
  return (
    <>
      <div className={`${classes.job_box}`}>
        <Image src={CompanyLogo} width='80' height='80' alt='Company Logo' />
        <h5>Development Marketer</h5>
        <ul className='clearfix reset-list'>
          <li><i class="ri-briefcase-line"></i>UX Designer</li>
          <li><i class="ri-map-pin-line"></i> New York City</li>
          <li><i class="ri-time-line"></i> Full Time</li>
        </ul>
      </div>
    </>
  )
}

export default JobBox
