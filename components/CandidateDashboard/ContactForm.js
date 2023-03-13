import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const ContactForm = () => {

    const [name,setName] =useState();
    const [email,setEmail] =useState();
    const [phone,setPhone] =useState();


    const nameVal=(e)=>{
        setName(e.target.value);
    }
    const emailVal=(e)=>{
        setEmail(e.target.value);
    }
    const phoneVal=(e)=>{
        setPhone(e.target.value);
    }

    let data={
      'name':name,
      'email':email,
      'phone':phone,
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
      <div className={`${classes.contact_form_wrp}`}>
        <h5>Contact Details</h5>
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Name" onChange={nameVal} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Email" onChange={emailVal} />
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Phone (optional)" onChange={phoneVal} />
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group as={Col} className="file-upload">
                    <Button variant="primary" type="submit" onClick={saveData}>
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
