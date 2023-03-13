import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const ChangePasswordForm = () => {

  const [currentp,setCurrentp]=useState();
  const [newpassword,setnewpassword]=useState();
  const [cpassword,setCpassword] =useState();

  const currentpVal =(e)=>{
    setCurrentp(e.target.value);
  }
  const newpasswordVal =(e)=>{
    setnewpassword(e.target.value);
  }
  const cpasswordVal =(e)=>{
    setCpassword(e.target.value);
  }

  let data={
    'currentp':currentp,
    'newpassword':newpassword,
    'cpassword':cpassword,
  }

  const saveData = () => {
    console.log(data);
    fetch('http://localhost:3000/contact', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    clearData();
}

  return (
    <>
      <div className={`${classes.post_job_form}`}>
          <h5>Change Password</h5>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Enter Current Password" onChange={currentpVal} />
              </Form.Group>
            </Row>
            
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Enter New Password" onChange={newpasswordVal} />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control type="text" placeholder="Confirm New Password" size="lg" onChange={cpasswordVal} />
                  </Form.Group>
            </Row>
            <Row className='mb-4'>
              <Form.Group className="mb-3 file-upload">
                  <Button variant="primary" type="submit" onClick={saveData}>
                      Change Password
                  </Button>
              </Form.Group>
            </Row>
          </Form>
      </div>
    </>
  )
}

export default ChangePasswordForm
