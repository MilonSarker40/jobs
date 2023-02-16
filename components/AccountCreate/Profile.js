import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/AccountCreate.module.css';

const Profile = () => {
  return (
    <>
      <div className='profile_wrp clearfix'>
        <div className={`${classes.profile_pic}`}>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" size="lg" />
            </Form.Group>
        </div>
        <div className={`${classes.profile_name}`}>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Profession</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Your Profession" />
            </Form.Group>
            <Button variant="primary">Done</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Profile
