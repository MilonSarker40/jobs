import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AddImage from '../components/JobsDetails/AddImage';
import ApplyButton from '../components/JobsDetails/ApplyButton';
import JobBox from '../components/JobsDetails/JobBox';
import JobOverview from '../components/JobsDetails/JobOverview';
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
                <div className='col-md-4'>
                  <div className={`${classes.jobs_dlt_rgt}`}>
                    <ApplyButton />
                    <JobOverview />
                    <AddImage />
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default JobsDetalis
