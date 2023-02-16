import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from '../../styles/AccountCreate.module.css';

const SocialLinks = () => {
  return (
    <>
      <div className={`${classes.social_links}`}>
      <Form>
         <Row>
            <Col>
                <h3>Skill</h3>
            </Col>
            <Col className={`${classes.edit_btn}`} style={{textAlign:'right'}}>
                <Button variant="primary">Edit</Button>
                <Button variant="primary">Add Education</Button>
            </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Facebook</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Facebook" />
                    </Form.Group>
                </Col>
                <Col>
                   <Form.Group controlId="formBasicEmail">
                        <Form.Label>Instagram</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Instagram" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Linedin</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Linedin" />
                    </Form.Group>
                </Col>
                <Col>
                   <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dribbble</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Dribbble" />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className={`${classes.save_btn}`}>
                    <Button variant="primary">Save</Button>
                </Col>
            </Row>
         </Form>
      </div>
    </>
  )
}

export default SocialLinks
