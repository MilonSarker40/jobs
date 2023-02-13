import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ActiveList from '../components/Dashboard/ActiveList';
import NewUsers from '../components/Dashboard/NewUsers';
import Sidebar from '../components/PostJob/Sidebar';

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
                <NewUsers />
            </div>
        </div>
      </section>
    </>
  )
}

export default dashboard
