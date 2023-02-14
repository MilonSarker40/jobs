import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AccountName from './AccountName';
import classes from '../../styles/PostJob.module.css';
import AccountMonth from './AccountMonth';

const Accounts = () => {
  return (
    <>
    <div className={`${classes.account_rgt}`}>
        <div className={`${classes.new_users_wrp}`}>
            <h5>Accounts</h5>
            <Tabs defaultActiveKey="today" id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="today" title="Today">
                    <AccountName /> 
                </Tab>
                <Tab eventKey="month" title="Month">
                    <AccountMonth />
                </Tab>
            </Tabs>
        </div>
      </div>
    </>
  )
}

export default Accounts
