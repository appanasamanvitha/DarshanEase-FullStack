import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Onavbar = () => {
  const name = localStorage.getItem('user');

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand><Link to='/shome' style={{ color: "white", textDecoration: "none" }}>DarshanEase(organizer)</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ohome" className="nav-link">Dashboard</Link>
            <Link to="/otemp" className="nav-link">My Temple</Link>
            <Link to="/odarshans" className="nav-link">Darshans</Link>
            <Link to="/bookings" className="nav-link">Bookings</Link>
            <Link to="/createtemple" className="nav-link">Create Temple</Link>
            <Link to="/createdarshan" className="nav-link">Create Darshan</Link>
            <Link to="/" className="nav-link">Logout</Link>
          </Nav>
          <Nav>
            <Nav.Item className="text-white ml-3 mt-2">
              Welcome, {JSON.parse(name).name}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Onavbar;
