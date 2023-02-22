import React from 'react';
import {Row, Col } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const HeaderProfile = () => {
  return (
    <>
      <div className='header_profile_sec_wrp'>
        <div className='container'>
           <Row>
             <div className='header_profile_innr'>
                <div className='logo'>
                    <Link href='/'>
                        <Image src={Logo} width='150px' height='50px' alt='' /> 
                    </Link>
                 </div>
                 <div className='header_profile'>
                   <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                 </div>
             </div>
           </Row>
        </div>
      </div>
    </>
  )
}

export default HeaderProfile

