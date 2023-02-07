import React from 'react';
import Image from 'next/image';
import classes from '../../styles/JobsDetalis.module.css';

const JobOverview = () => {
  return (
    <>
      <div className={`${classes.job_overview}`}>
          <h5>Job Overview</h5>
          <ul className='clearfix reset-list'>
            <li>
                <i class="ri-money-cny-circle-fill"></i>
               <strong>Salary</strong>
               <span>20000-30000</span>
            </li>
            <li>
                <i class="ri-map-pin-line"></i>
               <strong>Location</strong>
               <span>New York City</span>
            </li>
            <li>
               <i class="ri-women-line"></i>
               <strong>Gender</strong>
               <span>Any</span>
            </li>
            <li>
               <i class="ri-briefcase-line"></i>
               <strong>Job Type</strong>
               <span>Full Time</span>
            </li>
            <li>
                <i class="ri-honour-line"></i>
               <strong>Qualification</strong>
               <span>BSC</span>
            </li>
            <li>
                <i class="ri-file-copy-2-line"></i>
               <strong>Experience</strong>
               <span>2 to 3 year</span>
            </li>
          </ul>
      </div>
    </>
  )
}

export default JobOverview
