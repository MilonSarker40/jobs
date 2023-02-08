import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import ContactFrom from '../components/Contact/ContactFrom';
import ContactInfo from '../components/Contact/ContactInfo';
import Headding from '../components/Headding/Headding';
import classes from '../styles/Contact.module.css';

const contact = () => {
  return (
    <>
      <BreadCrumb title='Contact' subtitle='Home' subtitle1='Contact' />
      <section className={`${classes.contact_form_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Headding title='Contact Us' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <ContactFrom />
                </div>
                <div className='col-md-4'>
                    <ContactInfo />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default contact
