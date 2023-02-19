import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const SkillsForm = () => {
  return (
    <>
      <div className={`${classes.skills_form_wrp}`}>
        <h5>Skills & Portfolio</h5>
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Skills" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Value</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Value" />
                </Form.Group>
            </Row>
            <Row className="mb-4 mrl-10">
                <Form.Label>Portfolio</Form.Label>
               <div class="sk_photoUpload sk_photoUpload_2">
                    Upload Cover Photo
                    <input type="file" class="upload" />
                </div>
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

export default SkillsForm
