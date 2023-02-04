import React from 'react';

const Headding = ({title,subtitle}) => {
  return (
    <>
      <div className='headding'>
         <h1>{title}</h1>
         <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Headding
