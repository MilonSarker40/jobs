import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserPost from '../Dashboard/UserPost';
import classes from '../../styles/PostJob.module.css';

const NewUsers = () => {
  return (
    <>
      <div className={`${classes.new_users_wrp}`}>
         <Tabs defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            >
            <Tab eventKey="Today" title="Today">
                <UserPost />
            </Tab>
            <Tab eventKey="Month" title="Month">
                
            </Tab>
          </Tabs>
      </div>
    </>
  )
}

export default NewUsers
