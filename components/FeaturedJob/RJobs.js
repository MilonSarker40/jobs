import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RecentJobs} from './JobsData.js';
import classes from '../../styles/Home.module.css';
import Button from 'react-bootstrap/Button';

const RJobs = () => {
  return (
    <>
      <div className={`${classes.recent_job}`}>
        <ul className='clearfix reset-list'>
            {RecentJobs.map((item, value)=>(
               <li key={value}>
                 <div className={`${classes.recent_job_item}`}>
                     <Image src={item.cover} width={60} height={60} alt="" />
                     <div className={`${classes.recent_job_dsc}`}>
                        <h5>{item.title}</h5>
                        <Link href="#"><i class="ri-briefcase-line"></i> {item.name}</Link>
                        <strong>{item.sallery}</strong>
                        <span><i class="ri-calendar-check-line"></i> {item.date}</span>
                        <p><i class="ri-map-pin-line"></i> {item.subtitle}</p>
                      </div>
                      <div className='recent_job_btn'>
                        <Button variant="primary">Apply</Button>
                      </div>
                    </div>
                </li>
              ))}
        </ul>
      </div>
    </>
  )
}

export default RJobs
