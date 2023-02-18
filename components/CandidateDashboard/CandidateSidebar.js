import React from 'react';
import Link from 'next/link';
import classes from '../../styles/PostJob.module.css';

const CandidateSidebar = () => {
  return (
    <>
      <div className={`${classes.sidebar_menu}`}>
        <h5>Main</h5>
         <ul className='clearfix reset-list'>
            <li><Link href='/dashboard'><i class="ri-dashboard-fill"></i> Dashboard</Link></li>
            <li><Link href='/add-resume'><i class="ri-add-line"></i> Add Resume</Link></li>
            <li><Link href='/manage-candidate'><i class="ri-user-follow-line"></i> Manage Candidate</Link></li>
            <li><Link href='manage-jobs'><i class="ri-briefcase-line"></i>Manage Jobs</Link></li>
            <li><Link href='messages'><i class="ri-mail-line"></i>Messages</Link></li>
            <li><Link href='change-password'><i class="ri-lock-fill"></i>Change Password</Link></li>
            <li><Link href='edit-profile'><i class="ri-user-fill"></i>Edit Profile</Link></li>
            <li><Link href='logout'><i class="ri-login-circle-line"></i>Logout</Link></li>
         </ul>
      </div>
    </>
  )
}

export default CandidateSidebar
