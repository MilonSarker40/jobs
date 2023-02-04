import React from 'react';
import { CounterData } from './CounterData';
import classes from '../../styles/Home.module.css';

const CounterCard = () => {
  return (
    <>
      {CounterData.map((value,index)=>(
        <div className='col-md-3' key={index}>
            <div className={`${classes.counter_box}`}>
                <span>{value.icon}</span>
                <strong>{value.number}</strong>
                <p>{value.title}</p>
            </div>
        </div>
      ))}
    </>
  )
}

export default CounterCard
