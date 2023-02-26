import React from 'react';
import AboutUs from '../components/AboutUs/AboutUs';
import Service from '../components/AboutUs/Service';
import BreadCrumb from '../components/BreadCrumb/BreadCrumb';
import HeaderProfile from '../components/Header/HeaderProfile';
import NetellerNews from '../components/NetellerNews/NetellerNews';

const About = () => {
  return (
    <>
      <BreadCrumb title='About Us' subtitle='Home' subtitle1='About Us' />
      <AboutUs />
      <Service />
      <NetellerNews />
      <HeaderProfile />
    </>
  )
}

export default About
