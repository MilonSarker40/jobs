import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ChangePasswordForm from '../components/PostJob/ChangePasswordForm';
import Sidebar from '../components/PostJob/Sidebar';
import LatestNews from '../components/NetellerNews/NetellerNews';

const ChangePassword = () => {
  return (
    <>
      <BreadCrumb title='Change Password' subtitle='Home' subtitle1='Change Password'/>
      <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
               <ChangePasswordForm />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default ChangePassword
