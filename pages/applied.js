import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import BookmarkCard from '../components/CandidateDashboard/BookmarkCard';
import LatestNews from '../components/NetellerNews/NetellerNews';
import Sidebar from '../components/PostJob/Sidebar';

const bookmark = () => {
  return (
    <>
    <BreadCrumb title='Bookmark' subtitle='Home' subtitle1='Bookmark' />
    <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
                <h5>Applied</h5>
                <BookmarkCard />
            </div>
        </div>
      </section>
      <LatestNews />
    </>
  )
}

export default bookmark
