import React from 'react';
import { ActiveData } from './ActiveListData';
import classes from '../../styles/PostJob.module.css';

const ActiveList = () => {
  return (
    <>
      <div className={`${classes.ds_active_list_wrp}`}>
        <ul className='clearfix reset-list'>
            {ActiveData.map((item,index)=>(
                <li key={index}>
                  <div className={`${classes.active_list_grid}`}>
                      <strong>{item.number}</strong>
                      <span>{item.title}</span>  
                   </div>
                 </li>
             ))}
         </ul>
      </div>
    </>
  )
}

export default ActiveList
