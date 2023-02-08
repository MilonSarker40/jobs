import Link from 'next/link';
import React from 'react';
import Headding from '../Headding/Headding';
import classes from '../../styles/AboutUs.module.css';

const Service = () => {
  return (
    <>
      <section className={`${classes.service_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Headding title='Our Service' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className={`${classes.service_dsc_box}`}>
                        <span><i class="ri-briefcase-line"></i></span>
                        <h4>Advertise A Job</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        <Link href='#'>Read</Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={`${classes.service_dsc_box}`}>
                        <span><i class="ri-search-line"></i></span>
                        <h4>CV Search</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        <Link href='#'>Read</Link>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={`${classes.service_dsc_box}`}>
                        <span><i class="ri-user-line"></i></span>
                        <h4>Recruiter Profiles</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        <Link href='#'>Read</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Service
