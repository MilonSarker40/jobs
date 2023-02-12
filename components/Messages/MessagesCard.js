import React from 'react';
import { MessagesData } from './MessagesData';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/PostJob.module.css';



const MessagesCard = () => {
  return (
    <>
      <div className='commont_content'>
        <h5>Messages</h5>
         {MessagesData.map((items,index)=>(
            <div className={`${classes.commont_dsc}`} key={index}>
                <Image src={items.cover} width='80' height='80' alt='Images' />
                <h6>{items.title}</h6>
                <span><i class="ri-time-line"></i> {items.time}</span>
                <span><i class="ri-calendar-2-line"></i> {items.date}</span>
                <p>{items.dsce}<Link href='#'>Reply</Link></p>
            </div>
         ))}
      </div>
    </>
  )
}

export default MessagesCard
