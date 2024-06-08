import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import t3 from '../assets/t3.jpg'
import t8 from '../assets/t8.jpg'
import t7 from '../assets/t7.jpg'
import t5 from '../assets/t5.jpg'
import t4 from '../assets/t4.jpeg'

const TempleCard = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Card style={{ width: "25rem", margin: "10px" }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovered ? (
        <Card.Body>
          <Card.Text>
            <strong style={{ color: "orange" }}>Advance Darshan</strong> <br /> <br />
            <strong>{title}</strong> <br /> <br />
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      ) : (
        <div>
          <Card.Img variant="top" src={imageSrc} alt={title} style={{ width: "500px", height: "200px" }} />
        </div>
      )}
    </Card>
  );
};

const Temples = () => {
  return (
    <div className="content" id="temples">
      <h1 className="text-center">Temples</h1>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <div style={{ display: "flex", marginRight: "20px" }}>
          <Link to="/ulogin">
            <TempleCard
              imageSrc={t3}
              title="Shri Thakur Banke Bihari Ji Mandir"
              description="to Register Shri Thakur Banke Bihari Ji Mandir Online Darshan Booking"
            />
          </Link>
          <Link to="/ulogin" >
            <TempleCard
              imageSrc={t7}
              title="Shiv Khori Mandir"
              description="Click here to Register Shiv Khori Mandir Online Darshan Booking"
            />
          </Link>
        </div>
        <div style={{ display: "flex", marginRight: "50px" }}>
          <Link to="/ulogin" >
            <TempleCard
              imageSrc={t3}
              title="Tirupati Tirumala Temple"
              description="Click here to Register Tirupati Tirumala Temple Online Darshan Booking"
            />
          </Link>
          <Link to="/ulogin" >
            <TempleCard
              imageSrc={t8}
              title="Padmanabaswamy Temple"
              description="Click here to Register Padmanabaswamy Temple Online Darshan Booking"
            />
          </Link>
        </div>
        <div style={{ display: "flex" }}>
          <Link to="/ulogin">
            <TempleCard
              imageSrc={t4}
              title="Shirdi Sai Baba Mandir"
              description="Click here to Register Shirdi Sai Baba Mandir Online Darshan Booking"
            />
          </Link>
          <Link to="/ulogin" style={{ textDecoration: "none" }}>
            <TempleCard
              imageSrc={t5}
              title="Golden Temple"
              description="Click here to Register Golden Temple Online Darshan Booking"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Temples;
