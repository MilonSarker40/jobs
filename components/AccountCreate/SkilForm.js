import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import classes from '../../styles/AccountCreate.module.css';

const SkillForm = () => {
    const now = 60;
  return (
    <>
      <div className={`${classes.skill_form}`}>
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
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Enter Your Title" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Degree</Form.Label>
                        <ProgressBar now={now} label={`${now}%`} />
                    </Form.Group>
                </Col>
            </Row>
         </Form>
      </div>
    </>
  )
}

export default SkillForm
