import React from 'react';
import './navbar.css';
import bg from '../assets/bg6.png';

const About = () => {
  return (
    <div id='about' style={{ paddingTop: "50px", textAlign: "center" , backgroundImage:`url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", color: "#fff" }}>
      <h2 className='' style={{ fontFamily: "Arial", fontSize: "2.5rem", color: "#333", textDecoration: "underline" }}>About Darshan Booking</h2>

      <div style={{ paddingLeft: "180px", textAlign: "left" }}>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>1. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>All major temples across India are implementing the Darshan Token|E-Queue|Ticket Booking system to control the rush of devotees.</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>2. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>Social Distancing, Crowd Management, Contact Tracing with minimum physical interaction / touch.</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>3. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>Online Advance Booking (for the devotees having internet knowledge,( coming from far off places)).</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>4. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>On the spot Darshan Token issuance interface (for the devotees who do not have knowledge,(locals)).</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>5. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>Developed after thorough research and consultation with the major temples across India ( Darshan Token|E-Queue|Ticket Booking system).</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666", fontWeight: "bold" }}>6. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>Daily reports for the gatekeeper / security, periodical reports for the management to review the usage and details.</span>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#black", fontWeight: "bold" }}>7. </span>
          <span style={{ fontFamily: "Arial", fontSize: "1.2rem", color: "#666" }}>On the spot Darshan Token issuance.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
