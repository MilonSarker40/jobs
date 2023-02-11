import React from 'react';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';
import EditProfileImg from '../../public/images/logo-4.png';

const EditProfileFrom = () => {
  return (
    <>
      <div className={`${classes.post_job_form}`}>
          <h5>Basic Info</h5>
          <div className='row'>
            <div className='col-md-3'>
              <div className={`${classes.edit_profile_photo}`}>
                <Image src={EditProfileImg} width='150' height='150' alt="company-logo" class="img-fluid" />
                <div class={`${classes.change_photo_btn}`}>
                    <div class={`${classes.photoUpload}`}>
                        <span><i class="ri-download-2-line"></i></span>
                        <input type="file" class="upload" />
                    </div>
                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <Form>
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formGridJobTitle">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" size="lg" placeholder="Enter Company Name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" size="lg" placeholder="Enter Username" />
                    </Form.Group>
                </Row>
                
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone" size="lg" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email" size="lg" />
                    </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" size="lg" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridJobTitle">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter Category" size="lg" />
                    </Form.Group>
                </Row>
                <Row className='mb-4'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About Us</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Job Description' size="lg" />
                    </Form.Group>
                </Row>
            </Form>
            </div>
          </div>
      </div>
    </>
  )
}

export default EditProfileFrom
