import React from 'react'
import "./navbar.css"
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="nav">
    <div className="nav__left">
    <div className="logo">
          <img className="logo" src={logo} alt="Logo"/>
          {/* the logo image */}
        </div>
      </div>
      <div className="nav__right">
      <div className="signin">
        <Button className='btn'>Sign in</Button>
      </div>
      <div className="register">
        <Button className='btn'>Register</Button>
      </div>
        
        </div>
  </div>
)
}

export default NavBar