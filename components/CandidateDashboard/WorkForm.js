import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const WorkForm = () => {

    const [jobpost,setJobPost] =useState();
    const [institute,setInstitute]=useState();
    const [jobdesc,setJobDesc] =useState();

    const jobpostVal=(e)=>{
        setJobPost(e.target.value);
    }

    const instituteVal=(e)=>{
        setInstitute(e.target.value);
    }

    const jobdescVal=(e)=>{instituteVal
        setJobDesc(e.target.value);
    }

    let data={
        'jobpost':jobpost,
        'institute':institute,
        'jobdesc':jobdesc,
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
      <div className={`${classes.work_form_wrp}`}>
        <h5>Work Experience</h5>
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Job Post</Form.Label>
                    <Form.Control type="text" size="lg" placeholder="Job Post" onChange={jobpostVal} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>From Date</Form.Label>
                    <Form.Control type="date" size="lg" placeholder="07.1.2023" />
                </Form.Group>
            </Row>

            <Row className="mb-4">
                <Form.Group as={Col} controlId="formGridPassword" size="lg">
                    <Form.Label>To Date</Form.Label>
                    <Form.Control type="date" size="lg" placeholder="07.1.2023" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Institute</Form.Label>
                    <Form.Control type="text" placeholder="Enter Institute" size="lg" onChange={instituteVal} />
                </Form.Group>
            </Row>
            <Row className="mb-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Job Description' size="lg" onChange={jobdescVal} />
                </Form.Group>
            </Row>
            <Row className='mb-4'>
                <Form.Group className="mb-3 file-upload">
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

export default WorkForm
