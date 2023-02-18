import React from 'react';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from '../../styles/AccountCreate.module.css';
import classes1 from '../../styles/PostJob.module.css';
import EditProfileImg from '../../public/images/logo-4.png';

const Profile = () => {
  return (
    <>
      <div className='profile_wrp clearfix'>
        <div className={`${classes.profile_pic}`}>
            {/* <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" size="lg" />
            </Form.Group> */}
            <div className={`${classes1.edit_profile_photo}`}>
                <Image src={EditProfileImg} width='150' height='150' alt="company-logo" class="img-fluid" />
                <div class={`${classes1.change_photo_btn}`}>
                    <div class={`${classes1.photoUpload}`}>
                        <span><i class="ri-download-2-line"></i></span>
                        <input type="file" class="upload" />
                    </div>
                </div>
            </div>
        </div>
        <div className={`${classes.profile_name}`}>
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                <Form.Label>Profession</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Enter Your Profession" />
            </Form.Group>
            <Button variant="primary">Done</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Profile
