import React from 'react';
import Image from 'next/image';
import featured from '../Featured/FeaturedData';
import classes from '../../styles/Home.module.css';


const FeaturedCard = () => {
  return (
    <>
      <div className='row'>
          {featured.map((items, index)=>(
            <div className='col-md-3' key={index}>
                <div className={`${classes.fea_items}`}>
                    <Image src={items.cover} width={80} height={80} alt="" />
                    <h6>{items.name}</h6>
                    <span>{items.total}</span>
                </div>
            </div>
          ))}    
       </div>
    </>
  )
}

export default FeaturedCard
