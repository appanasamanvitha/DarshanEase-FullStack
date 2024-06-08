// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unavbar = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: '#333' }}>
      <Container fluid>
        <Navbar.Brand><Link to='/uhome' style={{ color: '#fff', textDecoration: 'none' }}>Darshan-Ease</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/uhome" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
            <Link to="/utemples" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Temples</Link>
            <Link to="/mybookings" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>My Bookings</Link>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Logout</Link>
            <h4 style={{ color: '#fff', marginLeft: '10px' }}>({JSON.parse(get).name})</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
