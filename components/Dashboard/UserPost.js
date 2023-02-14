import React from 'react';
import Image from 'next/image';
import classes from '../../styles/PostJob.module.css';
import { UserPostData } from './ActiveListData';
import Link from 'next/link';


const UserPost = () => {
  return (
    <>
      <div className={`${classes.user_post_wrp}`}>
        <ul className='clearfix reset-list'>
            {UserPostData.map((item,index)=>(
                <li key={index}>
                  <div className={`${classes.user_post_innr}`}>
                    <div className={`${classes.user_post_dsc}`}>
                        <Image src={item.cover} width='100' height='100' alt='Images' />
                        <h5>{item.title}</h5>
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
