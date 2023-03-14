import React from 'react';
import Image from 'next/image';
import BannerImage from "../../public/images/banner-2.jpg";
import classes from '../../styles/Banner.module.css';
import SearchForm from '../HomeBanner/SearchForm';

const HomeBanner = () => {
  return (
    <>
      <section className={`${classes.hmBanner}`} id='main-block'>
        <Image src={BannerImage} height={900} alt="Banner Image" />
        <div className={`${classes.search_form}`}>
            <SearchForm />
        </div>
      </section>
    </>
  )
}

export default HomeBanner
