import React from 'react';
import './navbar.css';
import bg4 from '../assets/bg4.png';
import bg5 from '../assets/bg5.png';

const Services = () => {
  return (
    <div id='services' style={{ paddingTop: "50px", paddingLeft: "180px" }}>
      <h2 className='' style={{ color: "blue", fontSize: "2.5rem", textAlign: "center", marginBottom: "50px" }}>Our Services</h2>
      <div className='service-list'>
        <div className='service-block' style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          <h5 style={{ color: "#333", textAlign: "center", marginBottom: "20px", fontSize: "1.5rem", backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px", borderRadius: "8px" }}>Darshan Timings</h5>
          <p style={{ color: "#666", textAlign: "justify" }}>
            Explore the divine experience with our regular darshan timings. Witness the spiritual aura and seek blessings from the divine deities.
          </p>
        </div>
        <div className='service-block' style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          <h5 style={{ color: "#333", textAlign: "center", marginBottom: "20px", fontSize: "1.5rem", backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px", borderRadius: "8px" }}>Special Pooja Services</h5>
          <p style={{ color: "#666", textAlign: "justify" }}>
            Elevate your spiritual journey with our special pooja services. Immerse yourself in the sacred rituals and receive blessings from the revered priests.
          </p>
        </div>
        <div className='service-block' style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          <h5 style={{ color: "#333", textAlign: "center", marginBottom: "20px", fontSize: "1.5rem", backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px", borderRadius: "8px" }}>Online Ticket Booking</h5>
          <p style={{ color: "#666", textAlign: "justify" }}>
            Conveniently book your darshan tickets online. Save time and ensure a seamless entry to the temple premises.
          </p>
        </div>
        <div className='service-block' style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", padding: "30px" }}>
          <h5 style={{ color: "#333", textAlign: "center", marginBottom: "20px", fontSize: "1.5rem", backgroundImage: `url(${bg4})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px", borderRadius: "8px" }}>Customer Service</h5>
          <p style={{ color: "#666", textAlign: "justify" }}>
            Tailor your spiritual experience with our custom services. Personalize your visit to meet your unique spiritual needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
