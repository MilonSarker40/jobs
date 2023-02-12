import React from 'react';
import Table from 'react-bootstrap/Table';
import classes from '../../styles/PostJob.module.css';
import { ManageJobsData } from './ManageJobsData';

const ManageJobsTable = () => {
  return (
    <>
      <div className={`${classes.candidate_table}`}>
         <h5>Manage Jobs</h5>
         <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>Job Titel</th>
                        <th>Date</th>
                        <th>Applications</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                 {ManageJobsData.map((item,index)=>(
                      <tr key={index}>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <h6>{item.title1}</h6>
                                <ul className='clearfix reset-list'>
                                    <li><i class="ri-briefcase-line"></i> Hotel</li>
                                    <li><i class="ri-map-pin-line"></i> New York City</li>
                                    <li><i class="ri-time-line"></i> Full Time</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                           <div className={`${classes.candidate}`}>
                              <span>{item.date1}</span>
                            </div> 
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <span>{item.application}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <span>{item.status1}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <i class="ri-pencil-line"></i>
                                <i class="ri-delete-bin-line"></i>
                            </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
          </Table>
      </div>
    </>
  )
}

export default ManageJobsTable
