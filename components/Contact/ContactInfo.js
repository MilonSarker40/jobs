import Link from 'next/link';
import React from 'react';
import classes from '../../styles/Contact.module.css';



const ContactInfo = () => {
  return (
    <>
      <div className={`${classes.contact_info}`}>
        <h4>Contact Details</h4>
        <ul className='clearfix reset-list'>
            <li>
                <Link href='#'><i class="ri-map-pin-line"></i>20/F Green Road, Dhaka</Link>
            </li>
            <li>
                <Link href='#'><i class="ri-phone-fill"></i>+55 417 634 7071</Link>
            </li>
            <li>
                <Link href='#'><i class="ri-mail-open-line"></i>info@themevessel.com</Link>
            </li>
            <li>
                <Link href='#'><i class="ri-global-line"></i>info@themevessel.com</Link>
            </li>
        </ul>
        <div className={`${classes.ftr_socail_icon}`}>
            <ul className='clearfix reset-list'>
                <li><Link href='#'><i class="ri-facebook-fill"></i></Link></li>
                <li><Link href='#'><i class="ri-twitter-fill"></i></Link></li>
                <li><Link href='#'><i class="ri-linkedin-fill"></i></Link></li>
                <li><Link href='#'><i class="ri-youtube-fill"></i></Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
