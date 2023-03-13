import React from 'react';
import {Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainHeader from '../Header/MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
       <MainHeader />
         <div>{props.children}</div>
       <Footer />
    </Fragment>
  )
}

export default Layout
