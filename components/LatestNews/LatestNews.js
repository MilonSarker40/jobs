import React from 'react';
import Headding from '../Headding/Headding';
import LatestNewsCard from '../LatestNews/LatestNewsCard';
import classes from '../../styles/Home.module.css';

const LatestNews = () => {
  return (
    <>
      <section className={`${classes.latest_news_sec_wrp}`}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Headding title='Get Latest News' subtitle='At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui Blanditiis.' />
                </div>
                <div className='col-md-12'>
                    <LatestNewsCard />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default LatestNews
