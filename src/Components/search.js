import React from 'react';
import "./search.css";
import { Button, Form, InputGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Search() {
  return (
    <div id="search-panel">
    <div className="card">
    <div className='parent'>
      <div className="glass">
        <h1 className='title'>Rate My School</h1>
        <h2 className="sub-title">
          The website where you can view other schools and rate yours
        </h2>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your school..."
          aria-label="Search your school..."
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" id="button-addon2" className='searchbtn'>
          Search
        </Button>
        {/* there will be a search icon here instead of text */}
      </InputGroup>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Search