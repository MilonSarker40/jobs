import React from 'react';
import EducationForm from '../components/AccountCreate/EducationForm';
import InformationForm from '../components/AccountCreate/InformationForm';
import Profile from '../components/AccountCreate/Profile';
import SkillForm from '../components/AccountCreate/SkilForm';
import SocialLinks from '../components/AccountCreate/SocialLinks';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import NetellerNews from '../components/NetellerNews/NetellerNews';
import classes from '../styles/AccountCreate.module.css';

const AccountCreate = () => {
  return (
    <>
      <BreadCrumb title='Account Create' subtitle='Home' subtitle1='Account Create' />
      <section className={`${classes.account_create_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Profile />
                    <InformationForm />
                    <EducationForm />
                    <SkillForm />
                    <SocialLinks />
                </div>
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default AccountCreate
