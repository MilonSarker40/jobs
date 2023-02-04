import Link from 'next/link';
import React from 'react';


const BreadCrumb = ({title, subtitle}) => {
  return (
    <>
     <div className='breadcmp-wrp'>
        <div className='breadcmp'>
              <h1>{title}</h1>
              <Link href='#'><i class="ri-arrow-left-fill"></i>{subtitle}</Link>
          </div>
     </div>
    </>
  )
}

export default BreadCrumb
