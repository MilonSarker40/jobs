import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'next/image';
import { Candidate } from './CandidateData';
import classes from '../../styles/PostJob.module.css';

 
const ManageCandidateTable = () => {
  return (
    <>
      <div className={`${classes.candidate_table}`}>
        <h5>Manage Candidate</h5>
         <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Job Titel</th>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Candidate.map((value,index)=>(
                      <tr key={index}>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <Image src={value.image} width='80' height='80' alt='Images' /> 
                            </div>
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <h6>{value.title}</h6>
                                <ul className='clearfix reset-list'>
                                    <li><i class="ri-check-double-line"></i> Content Writer</li>
                                    <li><i class="ri-map-pin-line"></i> New York City</li>
                                </ul>
                            </div>
                        </td>
                        <td>
                           <div className={`${classes.candidate}`}>
                              <span>{value.date}</span>
                            </div> 
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <span>{value.views}</span>
                            </div>
                        </td>
                        <td>
                            <div className={`${classes.candidate}`}>
                                <span>{value.status}</span>
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

export default ManageCandidateTable
