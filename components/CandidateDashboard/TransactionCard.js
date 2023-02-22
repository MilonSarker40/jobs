import React from 'react';
import Table from 'react-bootstrap/Table';
import { TransactionData } from './BookmarkData';
import classes from '../../styles/Candidate.module.css';

const TransactionCard = () => {
  return (
    <>
     <div className={`${classes.transaction_table}`}>
       <Table striped>
            <thead>
                <tr>
                <th>Package</th>
                <th>Payment Date</th>
                <th>Payment Method</th>
                <th>Amount</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {TransactionData.map((item,index)=>(
                 <tr key={index}>
                    <td>{item.package}</td>
                    <td>{item.date}</td>
                    <td>{item.payment}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                 </tr>
                ))}
            </tbody>
         </Table>
     </div>
    </>
  )
}

export default TransactionCard
