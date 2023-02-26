import React,{useState} from 'react';
import {Row, Col } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
import Logo from '../../public/images/Logo.png';
import ProfileImg from '../../public/images/avatar-1.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import classes from '../../styles/Candidate.module.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const HeaderProfile = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className={`${classes.header_profile_sec_wrp}`}>
        <div className='container'>
           <Row>
             <div className={`${classes.header_profile_innr}`}>
                <div className='logo'>
                    <Link href='/'>
                        <Image src={Logo} width='150px' height='50px' alt='' /> 
                    </Link>
                 </div>
                 <div className={`${classes.header_profile}`}>
                    <div className={`${classes.avator}`}>
                      <div className={`${classes.profile_menu}`} onClick={()=> setDropdownOpen(!dropdownOpen)}>
                        <Image src={ProfileImg} width='70px' height='70px' alt='' />
                        <span>Hi, John</span>
                      </div>
                      {dropdownOpen && (
                        <ul className='clearfix reset-list'>
                          <li><a href='#'>Dashboard</a></li>
                          <li><a href='#'>Messages</a></li>
                          <li><a href='#'>Bookmark</a></li>
                          <li><a href='#'>Edit profile</a></li>
                          <li><a href='#'>Logout</a></li>
                        </ul>
                      )}
                        {/* <Dropdown title="Dropdown" isOpen={dropdownOpen} toggle={toggle} {...props}>
                            <DropdownToggle  caret size="lg">
                                <Image src={ProfileImg} width='70px' height='70px' alt='' />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href='/login'><i class="ri-login-circle-line"></i>Login</DropdownItem>
                                <DropdownItem href='/logout'><i class="ri-account-circle-fill"></i>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> */}
                    </div>
                 </div>
             </div>
           </Row>
        </div>
      </div>
    </>
  )
}

export default HeaderProfile

