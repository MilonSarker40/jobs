import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const pagination = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
  return (
    <>
      <Pagination size="lg">{items}</Pagination>
        <br />
    </>
  )
}

export default pagination
