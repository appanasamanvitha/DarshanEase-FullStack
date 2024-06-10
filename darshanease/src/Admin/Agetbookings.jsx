import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaDownload } from 'react-icons/fa';
import Anavbar from './Anavbar';
import QRCode from "react-qr-code";
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import Footer from '../Components/Footer';

const Mybookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/user/getbookings')
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const deleteBooking = (bookingId) => {
    axios.delete(`http://localhost:9000/user/deletebooking/${bookingId}`)
      .then(() => {
        setBookings(bookings.filter(booking => booking._id !== bookingId));
        alert('Booking deleted');
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  const viewBookingDetails = (booking) => {
    setSelectedBooking(booking);
  };

  const closeDetails = () => {
    setSelectedBooking(null);
  };

  const downloadPDF = async (booking) => {
    const input = document.getElementById(`booking-${booking._id}`);
    const options = {
      scale: 2,
      useCORS: true,
    };

    html2canvas(input, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save(`booking_${booking._id}.pdf`);
    });
  };

  return (
    <div>
      <Anavbar />
      <br />
      <h1 className='text-center'>Bookings</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover style={{ width: "90%" }}>
          <thead>
            <tr>
              <th>Sl/No</th>
              <th>Booking ID</th>
              <th>Temple Name</th>
              
              <th>Booking Date</th>
              
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking._id}</td>
                
                <td>{booking.darshanName}</td>
                <td>{booking.BookingDate}</td>
                
                <td>
                  <Button onClick={() => viewBookingDetails(booking)} style={{ marginBottom: '12px' }}>
                    View
                  </Button>
                  <Button
                    onClick={() => downloadPDF(booking)}
                    style={{ marginLeft: '10px', color: 'green', background: 'none', border: 'none' }}
                  >
                    <FaDownload />
                  </Button>
                  <Button
                    onClick={() => deleteBooking(booking._id)}
                    style={{ marginLeft: '10px', color: 'red', background: 'none', border: 'none' }}
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {selectedBooking && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
            <div className="container mx-auto mt-8" style={{ width: "90%" }}>
              <h1 className='text-center text-blue-300'>Booking Details</h1>
              <Card
                id={`booking-${selectedBooking._id}`}
                style={{
                  width: '100%',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  
                  <div>
                    <p>Booking ID:</p>
                    <p>{selectedBooking._id}</p>
                  </div>
                  
                  <div>
                    <p>Darshan Name:</p>
                    <p>{selectedBooking.darshanName}</p>
                  </div>
                  <div>
                    <p>Booking Date:</p>
                    <p>{selectedBooking.BookingDate}</p>
                  </div>
                  
                  <div>
                    <QRCode value={selectedBooking._id.slice(0, 10)} size={86} />
                  </div>
                </div>
              </Card>
              <Button onClick={closeDetails} className="mt-4">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Mybookings;
