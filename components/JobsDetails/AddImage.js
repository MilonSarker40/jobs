import React from 'react';
import Image from 'next/image';
import AddImages from '../../public/images/ht-job-dstl-add-img-1.jpg';
import classes from '../../styles/JobsDetalis.module.css';

const AddImage = () => {
  return (
    <>
      <div className={`${classes.add_image}`}>
        <Image src={AddImages}  width={300} height='100' alt=''/>
      </div>
    </>
  )
}

export default AddImage
