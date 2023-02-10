import React from 'react';
import Form from 'react-bootstrap/Form';

const Select = () => {
  return (
    <>
      <div className='select_field'>
        <Form.Select aria-label="Default select example" size="lg">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
      </div>
    </>
  )
}

export default Select;
