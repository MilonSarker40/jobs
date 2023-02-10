import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactFrom = () => {
  return (
    <>
      <div className='contact_from'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enater Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" size="lg" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enter Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" size="lg" rows={3} placeholder="Enter Message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    </>
  )
}

export default ContactFrom
