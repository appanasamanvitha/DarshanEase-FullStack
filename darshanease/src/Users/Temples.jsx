import React, { useState, useEffect } from 'react';
import '../Components/navbar.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Temples = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className='content' id='temples'>
      <h1 className='text-center'>Temples</h1>
      <Link to='/utemples'>
        <div className='d-flex flex-wrap justify-content-center'>
          {/* Temple 1 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shri Thakur Banke Bihari Ji Mandir</strong> <br /> <br />
                  <p>to Register Shri Thakur Banke Bihari Ji Mandir Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg'
                alt='Shri Thakur Banke Bihari Ji Mandir'
              />
            )}
          </Card>

          {/* Temple 2 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shiv Khori Mandir</strong> <br /> <br />
                  <p>Click here to Register Shiv Khori Mandir Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Shiv_khori_2.jpg/1200px-Shiv_khori_2.jpg'
                alt='Shiv Khori Mandir'
              />
            )}
          </Card>

          {/* Temple 3 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Tirupati Tirumala Temple</strong> <br /> <br />
                  <p>Click here to Register Tirupati Tirumala Temple Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090615.jpg'
                alt='Tirupati Tirumala Temple'
              />
            )}
          </Card>

          {/* Temple 4 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Padmanabaswamy Temple</strong> <br /> <br />
                  <p>Click here to Register Padmanabaswamy Temple Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?height=459&width=711&fit=bounds'
                alt='Padmanabaswamy Temple'
              />
            )}
          </Card>

          {/* Temple 5 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shirdi Sai Baba Mandir</strong> <br /> <br />
                  <p>Click here to Register Shirdi Sai Baba Mandir Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Sai_baba_samadhi_mandir_.jpg'
                alt='Shirdi Sai Baba Mandir'
              />
            )}
          </Card>

          {/* Temple 6 */}
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Golden Temple</strong> <br /> <br />
                  <p>Click here to Register Golden Temple Online Darshan Booking</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg'
                alt='Golden Temple'
              />
            )}
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default Temples;
