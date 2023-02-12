import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import MessagesCard from '../components/Messages/MessagesCard';
import Sidebar from '../components/PostJob/Sidebar';
import NetellerNews from '../components/NetellerNews/NetellerNews';

const messages = () => {
  return (
    <>
      <BreadCrumb title='Messages' subtitle='Home' subtitle1='Messages' />
      <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <MessagesCard />
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default messages
