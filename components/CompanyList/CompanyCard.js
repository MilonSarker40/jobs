import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CompanyData from './CompanyData';
import classes from '../../styles/JobList.module.css';

const CompanyCard = () => {
  return (
    <>
      {CompanyData.map((items,index)=>(
        <div className='col-md-3' key={index}>
            <div className={`${classes.company_box}`}>
                <Image src={items.cover} width={100} height={100} alt='Company Logo' />
                <h6><Link href='#'>{items.name}</Link></h6>
                <span><i class="ri-map-pin-line"></i> {items.location}</span>
                <Link href='#'>{items.link}</Link>
            </div>
        </div>
      ))}
    </>
  )
}

export default CompanyCard
