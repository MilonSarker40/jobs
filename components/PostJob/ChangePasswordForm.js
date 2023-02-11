import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const ChangePasswordForm = () => {
  return (
    <>
      <div className={`${classes.post_job_form}`}>
          <h5>Change Password</h5>
          <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="Enter Current Password" />
              </Form.Group>
            </Row>
            
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Enter New Password" />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                      <Form.Label>Confirm New Password</Form.Label>
                      <Form.Control type="text" placeholder="Confirm New Password" size="lg" />
                  </Form.Group>
            </Row>
            <Row className='mb-4'>
              <Form.Group className="mb-3 file-upload">
                  <Button variant="primary" type="submit">
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
