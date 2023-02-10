import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import PostJobFrom from '../components/PostJob/PostJobFrom';
import Sidebar from '../components/PostJob/Sidebar';
import NetellerNews from '../components/NetellerNews/NetellerNews';



const PostJob = () => {
  return (
    <>
      <BreadCrumb title='Post A Job' subtitle='Home' subtitle1='' />
      <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
               <PostJobFrom /> 
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default PostJob
