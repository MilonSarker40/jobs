import Link from 'next/link';
import React from 'react';


const BreadCrumb = ({title, subtitle,subtitle1}) => {
  return (
    <>
     <div className='breadcmp-wrp'>
       <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='breadcmp'>
              <h2>{title}</h2>
              <ul className='clearfix reset-list'>
                <li><Link href='#'>{subtitle}</Link></li>
                <li><Link href='#'><i class="ri-arrow-left-s-line"></i>{subtitle1}</Link></li>
              </ul>
            </div>
          </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default BreadCrumb
