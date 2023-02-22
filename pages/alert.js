import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import AlertCard from '../components/CandidateDashboard/AlertCard';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import LatestNews from '../components/NetellerNews/NetellerNews';


const Alert = () => {
  return (
    <>
    <BreadCrumb title='Applied' subtitle='Home' subtitle1='Applied' />
    <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <CandidateSidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <h5>Alert</h5>
                <AlertCard />
            </div>
        </div>
    </section>
    <LatestNews />
    </>
  )
}

export default Alert
