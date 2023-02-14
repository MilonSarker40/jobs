import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserPost from '../Dashboard/UserPost';
import UserMonth from '../Dashboard/UserMonth';
import classes from '../../styles/PostJob.module.css';

const NewUsers = () => {
  return (
    <>
    <div className={`${classes.account_lft}`}>
       <div className={`${classes.new_users_wrp}`}>
          <h5>New Users</h5>
          <Tabs defaultActiveKey="today" id="uncontrolled-tab-example"
              className="mb-3"
              >
              <Tab eventKey="today" title="Today">
                  <UserPost />
              </Tab>
              <Tab eventKey="month" title="Month">
                  <UserMonth />
              </Tab>
            </Tabs>
        </div>
      </div>
    </>
  )
}

export default NewUsers
