import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const ContactForm = () => {
  return (
    <>
      <div className={`${classes.contact_form_wrp}`}>
        <h5>Contact Details</h5>
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Email" />
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Phone (optional)" />
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group as={Col} className="file-upload">
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

export default ContactForm
