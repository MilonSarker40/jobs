import React from 'react';
import CounterCard from './CounterCard';
import classes from '../../styles/Home.module.css';

const Counter = () => {
  return (
    <>
      <section className={`${classes.counter_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <CounterCard />
            </div>
        </div>
      </section>
    </>
  )
}

export default Counter
