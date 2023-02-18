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
              <div className='col-md-6'>
                  <Select />
              </div>
              <div className='col-md-6'>
                <div className={`${classes.search_form}`}>
                  <span><i class="ri-search-line"></i></span>
                  <input type='search' placeholder='Search' />
                </div>
              </div>
            </div>
            <div className='row'>
                <CompanyCard />
            </div>
        </div>
      </section>
      <NetellerNews />
    </>
  )
}

export default CompanyList