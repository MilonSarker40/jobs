import React from 'react';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import CompanyCard from '../components/CompanyList/CompanyCard';
import classes from '../styles/JobList.module.css';
import NetellerNews from '../components/NetellerNews/NetellerNews';
import Select from '../components/Select/Select';

const CompanyList = () => {
  return (
    <>
      <BreadCrumb title='Company List' subtitle='Home' subtitle1='Company List' />
      <section className={`${classes.company_list_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <Select />
                <CompanyCard />
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default CompanyList