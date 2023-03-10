import React from 'react';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import Accounts from './Accounts';
import ActiveList from './ActiveList';
import NewUsers from './NewUsers';
import Sidebar from '../PostJob/Sidebar';
import NetellerNews from '../NetellerNews/NetellerNews';
import LatestProject from './LatestProject';

const dashboard = () => {
  return (
    <>
      <BreadCrumb title='Dashboard' subtitle='Home' subtitle1='Dashboard'/>
      <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <h5>Hello , Emma Connor</h5>
                <ActiveList />  
                <div className='clearfix'>
                  <NewUsers />
                  <Accounts />
                </div>
                <LatestProject />
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default dashboard
