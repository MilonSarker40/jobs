import React from 'react';
import classes from '../../styles/Home.module.css';

const LatestNewsCard = () => {
  return (
    <>
      <div className={`${classes.news_input_group_cntlr}`}>
        <div className={`${classes.news_input_group}`}>
            <span><i class="ri-mail-line"></i></span>
            <input type='email' name='email' placeholder='Enter Your Email..' />
            <button type='submit'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

export default LatestNewsCard
