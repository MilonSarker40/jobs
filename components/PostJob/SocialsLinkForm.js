import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SocialsLinkForm = () => {


  const [facebook,setFacebook] =useState();
  const [twitter,setTwitter] =useState();
  const [whatsapp,setWhatsapp]=useState();
  const [linkedin,setLinkedin] =useState();

  const facebookVal=(e)=>{
    setFacebook();
  }
  const twitterVal=(e)=>{
    setTwitter();
  }
  const whatsappVal=(e)=>{
    setWhatsapp();
  }
  const linkedinVal=(e)=>{
    setLinkedin();
  }

  let data={
    'facebook':facebook,
    'twitter':twitter,
    'whatsapp':whatsapp,
    'linkedin':linkedin,
  }

  const saveData = () => {
    console.log(data);
    fetch('http://localhost:3000/posts-job', {
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
      <div className='socials_link_form'>
        <h5>Socials</h5>
        <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="https://www.facebook.com" onChange={facebookVal} />
              </Form.Group>
            </Row>
            
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control type="text" placeholder="https://twitter.com" size="lg" onChange={twitterVal} />
                 </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Whatsapp</Form.Label>
                    <Form.Control type="text" placeholder="https://www.whatsapp.com" size="lg" onChange={whatsappVal} />
                 </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control type="text" placeholder="https://www.linkedin.com" size="lg" onChange={linkedinVal} />
                 </Form.Group>
            </Row>
            <Row className='mb-4'>
              <Form.Group className="mb-3 file-upload">
                  <Button variant="primary" type="submit" onClick={saveData}>
                    Send Changes
                  </Button>
              </Form.Group>
            </Row>
          </Form>
      </div>
    </>
  )
}

export default SocialsLinkForm
