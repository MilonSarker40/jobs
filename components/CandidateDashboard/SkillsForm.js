import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const SkillsForm = () => {

    const [skills,setSkills]=useState();
    const [value,setValue] =useState();

    const skillsVal=(e)=>{
        setValue(e.target.value);
    }
    const valueVal=(e)=>{
        setValue(e.target.value);
    }

    let data={
       'skills':skills, 
       'value':value,
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
      <div className={`${classes.skills_form_wrp}`}>
        <h5>Skills & Portfolio</h5>
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Skills" onChange={skillsVal} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Value</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Value" onChange={valueVal} />
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

export default SkillsForm
