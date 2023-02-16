import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from '../../styles/AccountCreate.module.css';

const InformationForm = () => {
  return (
    <>
      <div className={`${classes.information_form}`}>
        <h3>Basic Information</h3>
         <Form>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Your Email" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control size="lg" type="date" placeholder="Enter Date of Birth" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your Phone</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Your Phone" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Job Title" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Address" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Label>Gender</Form.Label>
                <Col>
                    <Form.Check type="radio" aria-label="radio 1" label="Male" /> 
                    <Form.Check type="radio" aria-label="radio 1" label="Famele" /> 
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Col>
            </Row>
         </Form>
      </div>
    </>
  )
}

export default InformationForm
