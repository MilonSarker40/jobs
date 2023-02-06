import React from 'react';
import classes from '../../styles/JobsDetalis.module.css';
import {JobsList} from '../JobsDetails/JobsData';
import {JobsList1} from '../JobsDetails/JobsData';
import GoogleMap from '../JobsDetails/GoogleMap';



const JobsDsce = () => {
  return (
    <>
      <div className={`${classes.jobs_description}`}>
        <h5>Job Description</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.</p>
        <h5>Education + Experience</h5>
        <ul className='clearfix reset-list'>
            {JobsList.map((item, value)=>(
                <li key={value}><i class="ri-check-line"></i> {item.list}</li>
            ))}
        </ul>
        <h5>Responsibilities</h5>
        <ul className='clearfix reset-list'>
            {JobsList1.map((item, value)=>(
                <li key={value}><i class="ri-check-line"></i> {item.list1}</li>
            ))}
        </ul>
        <h5>Location</h5>
        <GoogleMap />
      </div>
    </>
  )
}

export default JobsDsce
