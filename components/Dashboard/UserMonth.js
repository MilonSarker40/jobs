import React from 'react';
import Image from 'next/image';
import classes from '../../styles/PostJob.module.css';
import { UserMonthData } from './ActiveListData';
import Link from 'next/link';


const UserPost = () => {
  return (
    <>
      <div className={`${classes.user_post_wrp}`}>
        <ul className='clearfix reset-list'>
            {UserMonthData.map((item,index)=>(
                <li key={index}>
                  <div className={`${classes.user_post_innr}`}>
                    <div className={`${classes.user_post_dsc}`}>
                        <Image src={item.cover} width='70' height='70' alt='Images' />
                        <h6>{item.title}</h6>
                        <span>{item.dsce}</span>
                    </div>
                    <div className={`${classes.user_post_dsc_btn}`}>
                      <Link href='#'>{item.button}</Link>
                    </div>
                  </div>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default UserPost
