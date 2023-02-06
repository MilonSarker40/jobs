import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import classes from '../styles/LoginForm.module.css';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import SingupForm from '../components/SingupForm/SingupForm';

const login = () => {
  return (
    <>
      <BreadCrumb title='Singup' subtitle='Home' subtitle1='Singup' />
      <section className={`${classes.login_form_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className={`${classes.login_form_wrp}`}>
                        <SingupForm />
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default login
