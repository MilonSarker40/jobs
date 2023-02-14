import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import {LatestProjectData} from './ActiveListData';
import classes from '../../styles/PostJob.module.css';

const LatestProject = () => {
  return (
    <>
      <div className={`${classes.latest_project_table}`}>
         <h5>Latest Projects</h5>
         <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Assign</th>
                </tr>
            </thead>
            <tbody>
                {LatestProjectData.map((value,index)=>{
                    return(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.sdate}</td>
                            <td>{value.duedate}</td>
                            <td><Button variant="primary">{value.status}</Button></td>
                            <td>{value.assign}</td>
                        </tr>
                    )
                })}
            </tbody>
         </Table>
      </div>
    </>
  )
}

export default LatestProject
