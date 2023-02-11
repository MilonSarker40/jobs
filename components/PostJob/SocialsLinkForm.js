import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SocialsLinkForm = () => {
  return (
    <>
      <div className='socials_link_form'>
        <h5>Socials</h5>
        <Form>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control type="text" size="lg" placeholder="https://www.facebook.com" />
              </Form.Group>
            </Row>
            
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control type="text" placeholder="https://twitter.com" size="lg" />
                 </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Whatsapp</Form.Label>
                    <Form.Control type="text" placeholder="https://www.whatsapp.com" size="lg" />
                 </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control type="text" placeholder="https://www.linkedin.com" size="lg" />
                 </Form.Group>
            </Row>
            <Row className='mb-4'>
              <Form.Group className="mb-3 file-upload">
                  <Button variant="primary" type="submit">
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
