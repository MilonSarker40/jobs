import React from 'react';
import Headding from '../Headding/Headding';
import classes from '../../styles/Banner.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = () => {
  return (
    <>
      <div className='search-form-wrp'>
        <Headding title='Get Your Preferred Job' subtitle='At Vero Eos Et Accusamus Et Iusto Odio Dignissimos  Odio  Ducimus Qui Blanditiis Praesentium Voluptatum' />
        <div className={`${classes.search_form_cntlr}`}>
          <form className='clearfix'>
            <div className={`${classes.search_box}`}>
              <input type="text" class="form-control" placeholder="Job Title" />
            </div>
            <div className={`${classes.search_box}`}>
              <Form.Select aria-label="Default select example">
                  <option>City or State</option>
                  <option value="1">Bangladesh</option>
                  <option value="2">India</option>
                  <option value="3">Pak</option>
                  <option value="3">Singapur</option>
                </Form.Select>
            </div>
            <div className={`${classes.search_box}`}>
              <Form.Select aria-label="Default select example">
                  <option>All Categories</option>
                  <option value="1"> Accounting & Finance (3)</option>
                  <option value="2"> Automotive Jobs (2)</option>
                  <option value="3"> Business (3)</option>
                  <option value="4"> Education Training (4)</option>
                  <option value="5"> Healthcare (2)</option>
                  <option value="6"> Restaurant & Food (4)</option>
                  <option value="7"> Telecommunications (2)</option>
                  <option value="8"> Transportation (1)</option>
                  <option value="9">Bank</option>
                  <option value="10">Three</option>
                </Form.Select>
            </div>
            <div className={`${classes.search_box}`}>
              <Button variant="primary">Search</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SearchForm
