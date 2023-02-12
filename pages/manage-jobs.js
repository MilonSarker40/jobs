import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ManageJobsTable from '../components/ManageJobs/ManageJobsTable';
import LatestNews from '../components/NetellerNews/NetellerNews';
import Sidebar from '../components/PostJob/Sidebar';

const ManageCandidate = () => {
  return (
    <>
     <BreadCrumb title='Manage Jobs' subtitle='Home' subtitle1='Manage Jobs'/>
     <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <ManageJobsTable />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default ManageCandidate
