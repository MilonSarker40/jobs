import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CandidateSidebar from '../components/CandidateDashboard/CandidateSidebar';
import TransactionCard from '../components/CandidateDashboard/TransactionCard';
import LatestNews from '../components/NetellerNews/NetellerNews';

const Transaction = () => {
  return (
    <>
    <BreadCrumb title='Transaction' subtitle='Home' subtitle1='Transaction' />
    <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
           <CandidateSidebar /> 
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <h5>Transaction</h5>
                <TransactionCard />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default Transaction
