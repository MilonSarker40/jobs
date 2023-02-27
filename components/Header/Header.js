import React,{useState} from 'react';
import {Row, Col } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import classes from './Header.module.css';
import Button from 'react-bootstrap/Button';
import NavMenu from '../Header/NavMenu';

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <header className={`${classes.header}`}>
        <div className='container'>
            <Row>
              <div className={`${classes.header__innr}`}>
                <div className={`${classes.logo}`}>
                    <Link href='/'>
                        <Image src={Logo} width='150px' height='50px' alt='' /> 
                    </Link>
                 </div>
                 <div className='hdrMenu'>
                    <NavMenu />
                 </div>
                 <div className={`${classes.login}`}>
                  <Link href='/login' variant="primary" gap={3}><i class="ri-account-circle-fill"></i>Login</Link>
                  <Link href='/singup' variant="primary" gap={3}><i class="ri-login-circle-line"></i> Register</Link>
                 </div>
               </div>
            </Row>
        </div>
      </header>
    </>
  )
}

export default Header
