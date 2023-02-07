import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CompanyCard from '../components/CompanyList/CompanyCard';
import classes from '../styles/JobList.module.css';

const CompanyList = () => {
  return (
    <>
      <BreadCrumb title='Company List' subtitle='Home' subtitle1='Company List' />
      <section className={`${classes.company_list_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <CompanyCard />
            </div>
        </div>
      </section>
    </>
  )
}

export default CompanyList