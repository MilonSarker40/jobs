import React,{useState} from 'react';
import Headding from '../Headding/Headding';
import classes from '../../styles/Home.module.css';
import FeaturedCard from '../Featured/FeaturedCard';

const Featured = () => {
  return (
    <>
      <section className={`${classes.featured_sec_wrp}`}>
         <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Headding title='Popular Categories' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </div>
            </div>
            <FeaturedCard />
         </div>
      </section>
    </>
  )
}

export default Featured
