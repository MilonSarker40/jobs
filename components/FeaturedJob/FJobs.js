import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FeaturedJobs} from './JobsData.js';
import classes from '../../styles/Home.module.css';
import Button from 'react-bootstrap/Button';

const FJobs = () => {
  return (
    <>
      <div className={`${classes.recent_job}`}>
        <ul className='clearfix reset-list'>
            {FeaturedJobs.map((items,value)=>(
               <li key={value}>
                 <div className={`${classes.recent_job_item}`}>
                     <Image src={items.cover1} width={60} height={60} alt="" />
                     <div className={`${classes.recent_job_dsc}`}>
                        <h5>{items.title1}</h5>
                        <Link href="#"><i class="ri-briefcase-line"></i> {items.name1}</Link>
                        <strong>{items.sallery1}</strong>
                        <span><i class="ri-calendar-check-line"></i> {items.date}</span>
                        <p><i class="ri-map-pin-line"></i> {items.subtitle1}</p>
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

export default FJobs
