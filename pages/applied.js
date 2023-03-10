import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AppliedCard from '../components/CandidateDashboard/AppliedCard';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import LatestNews from '../components/NetellerNews/NetellerNews';

const bookmark = () => {
  return (
    <>
    <BreadCrumb title='Applied' subtitle='Home' subtitle1='Applied' />
    <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
           <CandidateSidebar /> 
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <h5>Applied</h5>
                <AppliedCard />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default bookmark
