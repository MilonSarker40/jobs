import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import JobBox from '../components/JobsDetails/JobBox';
import JobsDsce from '../components/JobsDetails/JobsDsce';
import classes from '../styles/JobsDetalis.module.css';

const JobsDetalis = () => {
  return (
    <>
      <BreadCrumb title='Jobs Details' subtitle='Home' subtitle1='Jobs Details' />
      <section className={`${classes.jobs_details_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className={`${classes.jobs_dlt_lft}`}>
                        <JobBox />
                        <JobsDsce />
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
      </section>
    </>
  )
}

export default JobsDetalis
