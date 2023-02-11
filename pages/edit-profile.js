import React from 'react'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import ChangePasswordForm from '../components/PostJob/ChangePasswordForm'
import EditProfileFrom from '../components/PostJob/EditProfileFrom'
import Sidebar from '../components/PostJob/Sidebar';
import SocialsLinkForm from '../components/PostJob/SocialsLinkForm';
import classes from '../styles/PostJob.module.css';

const EditProfile = () => {
  return (
    <>
    <BreadCrumb title='Edit Profile' subtitle='Home' subtitle1='Edit Profile'/>
     <section className='job_post_sec_wrp clearfix'>
        <div className='job_post_lft'>
            <Sidebar />
        </div>
        <div className='job_post_rgt'>
            <div className='job_post_cntlr'>
               <EditProfileFrom />
            </div>
            <div className='job_post_cntlr clearfix' style={{marginTop:'20px'}}>
              <div className={`${classes.edit_profile_lft}`}>
                <ChangePasswordForm />
              </div>
              <div className={`${classes.edit_profile_rgt}`}>
                <SocialsLinkForm />
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default EditProfile
