import React from 'react';
import Image from 'next/image';
import classes from '../../styles/PostJob.module.css';
import { UserPostData } from './ActiveListData';

const UserPost = () => {
  return (
    <>
      <div className={`${classes.user_post_wrp}`}>
        <ul className='clearfix reset-list'>
            {UserPostData.map((item,index)=>(
                <li key={index}>
                  <div className='user_post_innr'>
                    <div className='user_post_dsc'>
                        <Image src={item.cover} width='80' height='80' alt='Images' />
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
