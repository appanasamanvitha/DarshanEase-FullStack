import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Unavbar from './Unavbar';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import QRCode from "react-qr-code";
import { FaDownload } from 'react-icons/fa';
import Footer from '../Components/Footer';

function Mybookings() {
  const [items, setItems] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const pdref = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:9000/user/getbookings`)
        .then((response) => {
          const taskData = response.data;
          setItems(taskData);
          console.log(taskData)
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? 'upcomming' : 'completed';
  };

  const preloadImages = (item) => {
    const imagePromises = [];
    imagePromises.push(
      new Promise((resolve) => {
        const img = new Image();
        img.src = `http://localhost:9000/organizer/${item.templeImage}`;
        img.onload = () => resolve(img);
      })
    );
    return Promise.all(imagePromises);
  };

  const downloadpdf = async () => {
    if (!selectedCard) {
      console.error('No card selected for download');
      return;
    }

    await preloadImages(selectedCard);

    const input = pdref.current;
    const options = {
      scale: 2,
      useCORS: true,
    };

    html2canvas(input, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a2', true);
      pdf.setProperties({
        title: 'My Booking',
        subject: 'Booking Details',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`booking_${selectedCard._id.slice(0, 10)}.pdf`);
    });
  };

  return (
    <div >
      <Unavbar />
      <div style={{ paddingTop: '100px', marginLeft: '65px', marginRight: '65px' }}>
        <h1 className='text-center'>My Bookings</h1>
        <div>
          {items.map((item) => {
            const status = calculateStatus(item.date);

            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  margin: '0 auto',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '35px',
                }}
                ref={pdref}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <img src={`http://localhost:9000/organizer/${item.templeImage}`} style={{ height: '80px' }} alt="Temple" />
                  </div>
                  <div>
                    <QRCode
                      size={86}
                      value={item._id.slice(0, 10)}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                  <div>
                    <p>BookingId:</p>
                    <p>{item._id.slice(0, 10)}</p>
                  </div>
                  <div>
                    <p>Darshan Name:</p>
                    <p>{item.darshanName}</p>
                  </div>
                  <div>
                    <p>BookingDate</p>
                    <p>{item.BookingDate}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '8px' }}>
                  <Button
                    onClick={() => {
                      setSelectedCard(item);
                      downloadpdf();
                    }}
                    style={{
                      backgroundColor: 'green',
                      transition: 'background-color 0.3s ease-in-out',
                      borderStyle: "none"
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#1EC000')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = 'green')}
                  >
                    <FaDownload />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer style={{ width: '100%', position: 'fixed', bottom: '0' }} />
    </div>
  );
}

export default Mybookings;
