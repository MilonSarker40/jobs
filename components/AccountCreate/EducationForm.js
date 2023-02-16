import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from '../../styles/AccountCreate.module.css';

const EducationForm = () => {
  return (
    <>
      <div className={`${classes.education_form}`}>
         <Form>
            <Row>
                <Col>
                   <h3>Education</h3>
                </Col>
                <Col className={`${classes.edit_btn}`} style={{textAlign:'right'}}>
                   <Button variant="primary">Add Education</Button>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Title" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter Your Degree" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Institute</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Your Institute" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Year</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Your Year" />
                    </Form.Group>
                </Col>
            </Row>
         </Form>
      </div>
    </>
  )
}

export default EducationForm
