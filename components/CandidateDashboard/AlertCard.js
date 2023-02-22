import React from 'react';
import Alert from 'react-bootstrap/Alert';
import AlertItemData from './BookmarkData';

const AlertCard = () => {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  )
}

export default AlertCard
