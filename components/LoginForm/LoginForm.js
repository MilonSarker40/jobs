import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/Link';
import classes from '../../styles/LoginForm.module.css';

const LoginForm = () => {

  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  const [checkbox,setCheckbox] =useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const emailVal =(e)=>{
    setEmail(e.target.value);
  }
  const passwordVal =(e)=>{
    setPassword(e.target.value);
  }
  const checkboxVal =(e)=>{
    setCheckbox(e.target.value);
  }

  let data={
    'email':email,
    'password':password,
    'checkbox':checkbox,
  }

  const saveData = () => {
    console.log(data);
    // fetch('http://localhost:3000/login', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
    // clearData();

    setIsLoggedIn(true);
    window.localStorage.setItem("isLoggedIn", true);
    location.replace("/");  
}
  return (
    <>
      <div className='login_form clearfix'>
        <div className={`${classes.login_form_left}`}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size="lg" type="email" placeholder="Enter email" onChange={emailVal} />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="lg" type="password" placeholder="Password" onChange={passwordVal} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" onChange={checkboxVal} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={saveData}>
                Login
            </Button>
          </Form>
          <div class={`${classes.login_form_or}`}>
            <span>Or</span>
          </div>
        </div>
        <div className={`${classes.login_form_rgt}`}>
            <div class={`${classes.login_form_rgt_btn}`}>
                <ul class="clearfix reset-list">
                    <li><Link href="#"><i class="ri-smartphone-fill"></i>Singup In With Mobile</Link></li>
                    <li><Link href="#"><i class="ri-google-fill"></i>Singup In With Google</Link></li>
                    <li><Link href="#"><i class="ri-facebook-fill"></i>Singup In With Facebook</Link></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginForm
