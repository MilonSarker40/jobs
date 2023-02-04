import React, {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RJobs from '../FeaturedJob/RJobs';
import FJobs from '../FeaturedJob/FJobs';
import classes from '../../styles/Home.module.css';
import Headding from '../Headding/Headding';
import Pagination from '../Pagination/pagination';


const FeaturedJob = () => {
  const [key, setKey] = useState('home');
  return (
    <>
      <section className={`${classes.featured_jobs_sec_wrp}`}>
         <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <Headding title='Recent Jobs' />
                <div className={`${classes.featured_tabs}`}>
                  <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Recent Jobs">
                        <RJobs />
                    </Tab>
                    <Tab eventKey="profile" title=" Featured Jobs">
                       <FJobs /> 
                    </Tab>
                  </Tabs>
                </div>
                <div className={`${classes.hm_pagination}`}>
                  <Pagination />
                </div>
              </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default FeaturedJob
