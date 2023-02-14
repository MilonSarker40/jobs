import React from 'react';
import Link from 'next/link';
import classes from '../../styles/PostJob.module.css';
import { AccountData } from './ActiveListData';

const AccountName = () => {
  return (
    <>
    <div className={`${classes.account_wrp}`}>
        <ul className='clearfix reset-list'>
            {AccountData.map((items,index)=>(
                <li key={index}>
                <div className={`${classes.user_post_innr}`}>
                    <div className={`${classes.user_post_dsc}`} style={{paddingLeft:'60px'}}>
                        <p>{items.icon}</p>
                        <h6>{items.name}</h6>
                        <span>{items.price}</span>
                    </div>
                    <div className={`${classes.user_post_dsc_btn}`}>
                    <Link href='#'>{items.delete}</Link>
                    </div>
                </div>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default AccountName
