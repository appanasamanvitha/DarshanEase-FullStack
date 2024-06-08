import React from 'react';
import t8 from '../assets/t8.jpg';

const Banner = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div style={{ marginLeft: "260px" }}>
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
    </div>
  );
}

export default Banner;
