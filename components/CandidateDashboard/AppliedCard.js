import React from 'react';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { AppliedItemData } from './BookmarkData';
import classes from '../../styles/Candidate.module.css';


const AppliedCard = () => {
  return (
    <>
    <div className={`${classes.applied_wrp}`}>
        <ul className='clearfix reset-list'>
            {AppliedItemData.map((item,index)=>(
                <li key={index}>
                    <div className={`${classes.applied_item}`}>
                       <div className={`${classes.applied_item_dsc}`}>
                          <Image src={item.cover} width='60' height='60' alt='Logo Images' />
                          <h6>{item.title}</h6>
                          <ul className='clearfix reset-list'>
                            <li><i class="ri-briefcase-line"></i>Hotel</li>
                            <li><i class="ri-map-pin-line"></i>New York City</li>
                            <li><i class="ri-time-line"></i>Full Time</li>
                          </ul>
                          <span>{item.date}</span>
                       </div>
                       <div className={`${classes.applied_item_btn}`}>
                           <Button variant="primary"><i class="ri-check-line"></i></Button>
                           <Button variant="primary"><i class="ri-close-line"></i></Button>
                       </div>
                    </div>
                </li>
            ))}
        </ul>
     </div>  
    </>
  )
}

export default AppliedCard
