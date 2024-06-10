import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from '../assets/bg2.png'
import bgm from '../assets/bg3.png'
import bgs from '../assets/bg4.png'
const Temples = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className='content' id='temples' style={{backgroundImage:`url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <h1 className='text-center'>Temples</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {/* Temple 1 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shri Thakur Banke Bihari Ji Mandir</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src="https://d3k1i85mml78tf.cloudfront.net/Blogs/1677258515580_post_image_1.jpg"
                alt='Shri Thakur Banke Bihari Ji Mandir'
              />
            )}
          </Card>
        </Link>

        {/* Temple 2 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shiv Khori Mandir</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
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
        </Link>

        {/* Temple 3 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} >
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Tirupati Tirumala Temple</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
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
        </Link>

        {/* Temple 4 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Padmanabhaswamy Temple</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://imageio.forbes.com/blogs-images/jimdobson/files/2016/05/Sree_Padmanabhaswamy_Temple.jpg?height=459&width=711&fit=bounds'
                alt='Padmanabhaswamy Temple'
              />
            )}
          </Card>
        </Link>

        {/* Temple 5 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Shirdi Sai Baba Mandir</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
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
        </Link>

        {/* Temple 6 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Golden Temple</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
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
        </Link>

        {/* Temple 7 */}
        <Link to='/ulogin'>
          <Card
            style={{ width: '18rem', margin: '10px' }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovered ? (
              <Card.Body style={{backgroundImage:`url(${bgm})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <Card.Text>
                  <strong style={{ color: 'orange' }}>Advance Darshan</strong> <br /> <br />
                  <strong>Iskcon Temple</strong> <br /> <br />
                  <p>Click here to register for online darshan booking.</p>
                </Card.Text>
              </Card.Body>
            ) : (
              <Card.Img
                variant='top'
                src='https://imgcld.yatra.com/ytimages/image/upload/v1461929837/Delhi-Iskcon_Temple.jpg'
                alt='Temple 7'
              />
            )}
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Temples;
