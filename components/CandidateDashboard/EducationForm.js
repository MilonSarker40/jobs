import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const EducationForm = () => {
  return (
    <>
      <div className={`${classes.education_form_wrp}`}>
          <h5>Education</h5>
          <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Enter Your Degree" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="07.1.2023" />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridPassword" size="lg">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="07.1.2023" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Institute</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institute" size="lg" />
                </Form.Group>
            </Row>
            <Row className="mb-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Job Description' size="lg" />
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group className="mb-3 file-upload">
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form.Group>
            </Row>
         </Form>
      </div>
    </>
  )
}

export default EducationForm
