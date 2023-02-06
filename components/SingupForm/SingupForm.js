import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/Link';
import classes from '../../styles/LoginForm.module.css';

const SingupForm = () => {
  return (
    <>
      <div className='login_form clearfix'>
        <div className={`${classes.login_form_left}`}>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size="lg" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Number" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Re-Password</Form.Label>
                <Form.Control size="lg" type="Re-password" placeholder="Re-Password" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Singup
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

export default SingupForm
