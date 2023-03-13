import React, { useState,useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/PostJob.module.css';

const PostJobFrom = () => {

  const [jobtitle,setJobTile] =useState();
  const [location,setLocation]=useState();
  const [salary,setSalary] =useState();
  const [jobdesc,setJobDesc]=useState();
  const [jobtype,setJobType]=useState();
  const [jobcate,setJobcate]=useState();
  const [gender,setGender]=useState();
  const [country,setCountry]=useState();
  const [city,setCity]=useState();
  const [qualification,setqualification]=useState();
  const [experience,setExperience]=useState();
  const [opt,setOpt]=useState([]);
  const [optCate,setOptCate]=useState([]);
  const [optGen,setOptGen]=useState([]);
  const [optCnty,setOptCnty]=useState([]);
  const [optcity,setOptCity]=useState([]);
  const [optQul,setOptQul]=useState([]);
  const [optExp,setOptExp]=useState([]);


  const jobtitleVal =(e)=>{
    setJobTile(e.target.value);
  }
  const locationVal =(e)=>{
    setLocation(e.target.value);
  }
  const salaryVal=(e)=>{
    setSalary(e.target.value);
  }
  const jobdescVal=(e)=>{
    setJobDesc(e.target.value);
  }

  const jobtypeVal=(e)=>{
    setJobType(e.target.value);
  }

  const jobcateVal=(e)=>{
    setJobcate(e.target.value);
  }

  const genderVal=(e)=>{
    setGender(e.target.value);
  }

  const countryVal=(e)=>{
    setCountry(e.target.value);
  }

  const cityVal=(e)=>{
    setCity(e.target.value);
  }

  const qualificationVal=(e)=>{
    setqualification(e.target.value);
  }

  const experienceVal=(e)=>{
    setExperience(e.target.value);
  }

  // Call api for the country list
  const optd = [
    {'id': 1, 'name': "Full Time"},
    {'id': 2, 'name': "Part Time"},
    {'id': 3, 'name': "Freelance"},
    {'id': 4, 'name': "Temporary"},
  ] 

  const optd2 = [
    {'id': 1, 'name': "Counseling"},
    {'id': 2, 'name': "Accounting / Finance"},
    {'id': 3, 'name': "Restaurant / Food Service"},
    {'id': 4, 'name': "Health Care"},
  ]

  const optd3 = [
    {'id': 1, 'name': "Male"},
    {'id': 2, 'name': "Femle"},
  ]

  const optd4 = [
    {'id': 1, 'name': "Usa"},
    {'id': 2, 'name': "Bangladesh"},
    {'id': 3, 'name': "India"},
    {'id': 4, 'name': "Pak"},
  ]

  const optd5 = [
    {'id': 1, 'name': "Dhaka"},
    {'id': 2, 'name': "Dubai"},
    {'id': 3, 'name': "Mumbai"},
    {'id': 4, 'name': "Califonia"},
  ]

  const optd6 = [
    {'id': 1, 'name': "Matriculation"},
    {'id': 2, 'name': "Gradute"},
    {'id': 3, 'name': "MBA"},
    {'id': 4, 'name': "MSC"},
  ]

  const optd7 = [
    {'id': 1, 'name': "1 Year"},
    {'id': 2, 'name': "2 Year"},
    {'id': 3, 'name': "3 Year"},
    {'id': 4, 'name': "4 Year"},
  ]


    useEffect(() => {
      setOpt(optd);
      setOptCate(optd2);
      setOptGen(optd3);
      setOptGen(optd4);
      setOptCity(optd5);
      setOptCity(optd6);
      setOptCity(optd7);
    }, [])

  const options = opt.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionsCate = optCate.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionsgen = optGen.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionscnty = optCnty.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionscity = optcity.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionsqul = optQul.map((value) => <option value={value.id}>{ value.name }</option>)
  const optionsexp = optExp.map((value) => <option value={value.id}>{ value.name }</option>)

  let data={
    'jobtitle':jobtitle,
    'location':location,
    'salary':salary,
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
      <div className={`${classes.post_job_form}`}>
        <h5>Basic Information</h5>
        <Form>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control type="text" size="lg" placeholder="Enter Job Title" onChange={jobtitleVal} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Job Type</Form.Label>
                <Form.Select aria-label="Default select example" size="lg" onChange={jobtypeVal}>
                    <option>Job Type</option>
                    {options}
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword" size="lg">
                <Form.Label>Job Category</Form.Label>
                <Form.Select aria-label="Default select example" onChange={genderVal}>
                    <option>Job Category</option>
                    {optionsCate}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridJobTitle">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Location" size="lg" onChange={locationVal} />
            </Form.Group>
          </Row>

          <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridJobTitle">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control type="text" placeholder="Enter Salary" size="lg" onChange={salaryVal} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" size="lg">
                        <option>Gender</option>
                        {optionsgen}
                    </Form.Select>
                </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example" size="lg" onChange={countryVal} >
                    <option>Country</option>
                    {optionscnty}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>City</Form.Label>
                <Form.Select aria-label="Default select example" size="lg" onChange={cityVal}>
                    <option>City</option>
                    {optionscity}
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Qualification</Form.Label>
                <Form.Select aria-label="Default select example" size="lg" onChange={qualificationVal}>
                    <option>Qualification</option>
                    {optionsqul}
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Experience</Form.Label>
                <Form.Select aria-label="Default select example" size="lg" onChange={experienceVal}>
                    <option>Experience</option>
                    {optionsexp}
                </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder='Job Description' size="lg" onChange={jobdescVal}/>
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
