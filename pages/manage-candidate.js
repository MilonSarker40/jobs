import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ManageCandidateTable from '../components/ManageCandidate/ManageCandidateTable';
import LatestNews from '../components/NetellerNews/NetellerNews';
import Sidebar from '../components/PostJob/Sidebar';

const ManageCandidate = () => {
  return (
    <>
     <BreadCrumb title='Manage Candidate' subtitle='Home' subtitle1='Manage Candidate'/>
     <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <ManageCandidateTable />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default ManageCandidate
