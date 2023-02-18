import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AddResumeCard from '../components/CandidateDashboard/AddResumeCard';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import NetellerNews from '../components/NetellerNews/NetellerNews';

const AddResume = () => {
  return (
    <>
    <BreadCrumb title='Add Resume' subtitle='Home' subtitle1='Add Resume'/>
    <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <CandidateSidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
              <AddResumeCard />
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default AddResume