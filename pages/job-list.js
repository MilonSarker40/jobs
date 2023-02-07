import React from 'react';
import classes from '../styles/JobList.module.css';
import FJobs from '../components/FeaturedJob/FJobs';
import RJobs from '../components/FeaturedJob/RJobs';
import Pagination from '../components/Pagination/pagination';
import styles1 from '../styles/Home.module.css';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';


const JobList = () => {
  return (
    <>
      <BreadCrumb title='Job List' subtitle='Home' subtitle1='Job List' />
      <section className={`${classes.job_list_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <RJobs />
                    <FJobs />
                    <div className={`${styles1.hm_pagination}`}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default JobList