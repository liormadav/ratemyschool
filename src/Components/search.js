import React from 'react';
import SearchCSS from "./search.module.css";
import { Button, Form, InputGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./boots.css";

function Search() {
  return (
    <div className={SearchCSS.card}>
    <div className={SearchCSS.parent}>
      <div className={SearchCSS.glass}>
        <h1 className={SearchCSS.title}>Rate My School</h1>
        <h2 className={SearchCSS.sub}>
          The website where you can view other schools and rate yours
        </h2>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search your school..."
          aria-label="Search your school..."
          aria-describedby="basic-addon2"
        />
        <Button variant="secondary" id="button-addon2" className={SearchCSS.searchbtn}>
          Search
        </Button>
        {/* there will be a search icon here instead of text */}
      </InputGroup>
      </div>
    </div>
    </div>
  )
}

export default Search