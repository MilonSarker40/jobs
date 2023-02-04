import Link from 'next/link';
import React from 'react';
import {Col, Row} from 'reactstrap';
import Image from 'next/image';
import FtrLogo from '../../public/images/Logo.png';
import classes from '../../styles/Footer.module.css';
import {CtData} from './FtrData';
import {LkData} from './FtrData';



const Footer = () => {
  return (
    <>
      <footer className={`${classes.footer_sec_wrp}`}>
        <div className='container'>
            <Row>
              <Col lg='12'>
                <div className='ftr_col_main clearfix'>
                   <div className={`${classes.ftr_col_1}`}>
                      <div className={`${classes.ftr_logo}`}>
                        <Link href='/'>
                              <Image src={FtrLogo} width='150px' height='50px' alt='' /> 
                          </Link>
                      </div>
                      <div className={`${classes.ftr_socail_icon}`}>
                            <ul className='clearfix reset-list'>
                              <li><Link href='#'><i class="ri-facebook-fill"></i></Link></li>
                              <li><Link href='#'><i class="ri-twitter-fill"></i></Link></li>
                              <li><Link href='#'><i class="ri-linkedin-fill"></i></Link></li>
                              <li><Link href='#'><i class="ri-youtube-fill"></i></Link></li>
                            </ul>
                        </div>
                    </div> 
                    <div className={`${classes.ftr_col_2}`}>
                        <h4>Category</h4>
                        <ul className='clearfix reset-list'>
                          {CtData.map((value, index)=>(
                            <li key={index}><Link href='#'><i class="ri-arrow-left-s-line"></i> {value.name}</Link></li>
                          ))}
                        </ul>
                    </div>
                    <div className={`${classes.ftr_col_3}`}>
                      <h4>Quick Links</h4>
                      <ul className='clearfix reset-list'>
                          {LkData.map((value, index)=>(
                            <li key={index}><Link href='#'><i class="ri-arrow-left-s-line"></i> {value.name}</Link></li>
                          ))}
                        </ul>
                    </div>
                    <div className={`${classes.ftr_col_4}`}>
                        <h4>Contact Us</h4>
                        <ul className='clearfix reset-list'>
                          <li><Link href='#'><i class="ri-map-pin-line"></i> Location 210-27 Quadra, Market Street</Link></li>
                          <li><Link href='#'><i class="ri-mail-open-line"></i> info@themevessel.com</Link></li>
                          <li><Link href='#'><i class="ri-ie-line"></i> info@themevessel.com</Link></li>
                          <li><Link href='#'><i class="ri-phone-line"></i> +0477 85X6 552</Link></li>
                        </ul>
                    </div>
                </div>
              </Col>
            </Row>
        </div>
        <div className={`${classes.frt_btm}`}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                  <div className={`${classes.footer_innr}`}>
                      <p className='text-right'>© 2023 Like Jobs. All Rights Reserved</p>
                   </div> 
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
