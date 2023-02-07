import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/JobsDetalis.module.css';

const ApplyButton = () => {
  return (
    <>
      <div className={`${classes.apply_button}`}>
        <Button variant="secondary" size="lg">Save Job</Button>
        <Button variant="primary" size="lg">Apply Now</Button>
      </div>
    </>
  )
}

export default ApplyButton
