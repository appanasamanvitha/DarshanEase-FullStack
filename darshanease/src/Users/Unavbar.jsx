import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navbarStyle = {
    backgroundColor: '#333',
    position: 'fixed',
    width: '100%',
    zIndex: '1000',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex', // Align items using flexbox
    justifyContent: 'center', // Center items horizontally
  };

  const navLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 20px', // Adjust margin for spacing
    fontSize: '1.1rem',
  };

  const userWelcomeStyle = {
    ...navLinkStyle,
    marginLeft: '20px',
    fontSize: '1rem',
  };

  return (
    <Navbar bg="" variant="dark" expand="lg" style={navbarStyle}>
      <Container fluid>
        <Navbar.Brand>
          <Link to='/uhome' style={{ ...navLinkStyle, fontWeight: 'bold' }}>Darshan-Ease</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ justifyContent: 'center' }}>
            <Link to="/uhome" style={navLinkStyle}>Home</Link>
            <Link to="/utemples" style={navLinkStyle}>Temples</Link>
            <Link to="/mybookings" style={navLinkStyle}>My Bookings</Link>
            <Link to="/" style={navLinkStyle}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
        <span style={userWelcomeStyle}>Welcome, {user.name}</span>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
