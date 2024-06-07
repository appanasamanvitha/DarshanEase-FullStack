// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand ><Link to='/uhome' >Darshan-Ease</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/uhome" >Home</Link>
            <Link to="/utemples" >Temples</Link>
            <Link to="/mybookings" >My Bookings</Link>
            <Link to="/" >Logout</Link>
            <h4 >({JSON.parse(get).name} )</h4>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
