import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactFrom = () => {

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [number,setNumber]=useState();
  const [message,setMessage]=useState();

  const nameVal=(e)=>{
    setName(e.target.value);
  }
  const emailVal=(e)=>{
    setEmail(e.target.value);
  }
  const numberVal=(e)=>{
    setNumber(e.target.value);
  }
  const messageVal=(e)=>{
    setMessage(e.target.value);
  }

  let data={
    'name':name,
    'email':email,
    'number':number,
    'message':message,
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
      <div className='contact_from'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enater Name" onChange={nameVal} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" size="lg" placeholder="Enter email" onChange={emailVal} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enter Number" onChange={numberVal} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" size="lg" rows={3} placeholder="Enter Message" onChange={messageVal} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={saveData}>
                Submit
            </Button>
        </Form>
      </div>
    </>
  )
}

export default ContactFrom
