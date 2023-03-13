import Head from 'next/head';
import {Fragment } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Featured from '../Featured/Featured';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Counter from '../Counter/Counter';
import NetellerNews from '../NetellerNews/NetellerNews';

const HomePage = () => {
    return (
      <>
        <HomeBanner />
        <Featured />
        <FeaturedJob />
        <Counter />
        <NetellerNews />
      </>
    )
}

export default HomePage;