import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const PostJobFrom = () => {
  return (
    <>
      <div className={`${classes.post_job_form}`}>
        <h5>Basic Information</h5>
        <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enter Job Title" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Job Type</Form.Label>
                <Form.Select aria-label="Default select example" size="lg">
                    <option>Job Type</option>
                    <option value="1">Full time</option>
                    <option value="2">Part time</option>
                    <option value="3">Freelance</option>
                    <option value="4">Temporary</option>
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword" size="lg">
                <Form.Label>Job Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Job Category</option>
                    <option value="1">Accounting / Finance</option>
                    <option value="2">Restaurant / Food Service</option>
                    <option value="3">Counseling</option>
                    <option value="4">Health Care</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" size="lg" />
            </Form.Group>
          </Row>

          <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter Salary" size="lg" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" size="lg">
                        <option>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </Form.Select>
                </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example" size="lg">
                    <option>Country</option>
                    <option value="1">Usa</option>
                    <option value="2">Bangladesh</option>
                    <option value="3">Indea</option>
                    <option value="4">Pak</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>City</Form.Label>
                <Form.Select aria-label="Default select example" size="lg">
                    <option>City</option>
                    <option value="1">Dhaka</option>
                    <option value="2">Dubai</option>
                    <option value="3">Mumbai</option>
                    <option value="4">Califonia</option>
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Qualification</Form.Label>
                <Form.Select aria-label="Default select example" size="lg">
                    <option>Qualification</option>
                    <option value="1">Matriculation</option>
                    <option value="2">Gradute</option>
                    <option value="3">MBA</option>
                    <option value="4">MSC</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Experience</Form.Label>
                <Form.Select aria-label="Default select example" size="lg">
                    <option>Experience</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Year</option>
                    <option value="3">3 Year</option>
                    <option value="4">4 Year</option>
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Job Description' size="lg" />
             </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group className="mb-3 file-upload">
                <Button variant="primary" type="submit">
                    Post A Job
                </Button>
                  <Form.Control className='upload' type="file" placeholder='Upload File' />
             </Form.Group>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default PostJobFrom
