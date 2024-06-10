import React from 'react';
import t8 from '../assets/t7.jpg';

const Banner = () => {
  return (
    <div>
      <div style={{ marginLeft: "220px" }}>
        <img
          src={t8}
          alt="Banner image"
          style={{ width: '70%', height: '70%' }}
        />
      </div>
      <div className='class3'>
        <div className="marquee-container">
          <div className="marquee-text">
            <p>Book your tickets for Temple Darshan now! Limited slots available. Don't miss the divine experience.</p>
          </div>
        </div>
      </div>
      <h3 style={{
        textAlign: "center",
        fontFamily: 'cursive',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#1a1a1a', // Dark gray color
        marginTop: '30px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adds a subtle shadow for depth
      }}>
        Dive into tranquility with Darshan Ease: Where every journey is a step towards spiritual bliss.
      </h3>
    </div>
  );
}

export default Banner;
