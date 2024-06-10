import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';

const Adarshan = () => {
  const [darshans, setDarshans] = useState([]);
  const [selectedDarshan, setSelectedDarshan] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/organizer/getdarshans')
      .then((response) => {
        setDarshans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching darshans:', error);
      });
  }, []);

  const deleteDarshan = (darshanId) => {
    axios.delete(`http://localhost:9000/organizer/eventdelete/${darshanId}`)
      .then(() => {
        setDarshans(darshans.filter(darshan => darshan._id !== darshanId));
        alert('Darshan deleted');
      })
      .catch((error) => {
        console.error('Error deleting darshan:', error);
      });
  };

  const viewDarshanDetails = (darshan) => {
    setSelectedDarshan(darshan);
  };

  const closeDetails = () => {
    setSelectedDarshan(null);
  };

  return (
    <div>
      <Anavbar />
      <br />
      <h1 className='text-center'>Darshans</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>Sl/No</th>
              <th>Darshan Name</th>
              <th>Open</th>
              <th>Close</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {darshans.map((darshan, index) => (
              <tr key={darshan._id}>
                <td>{index + 1}</td>
                <td>{darshan.description}</td>
                <td>{darshan.open}</td>
                <td>{darshan.close}</td>
                <td>
                  <Button onClick={() => viewDarshanDetails(darshan)} style={{ marginBottom: '12px' }}>
                    View
                  </Button>
                  <Link to={`/darshanedit/${darshan._id}`} style={{ color: 'blue', textDecoration: 'none', marginRight: '10px' }}>
                    <FaEdit />
                  </Link>
                  <Button onClick={() => deleteDarshan(darshan._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {selectedDarshan && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
            <div className="container mx-auto mt-8" style={{ width: "90%" }}>
              <h1 className='text-center text-blue-300'>Darshan Details</h1>
              <Card
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
                    <img src={`http://localhost:9000/organizer/${selectedDarshan.templeImage}`} alt={selectedDarshan.templeName} style={{ height: "80px", width: "120px" }} />
                  </div>
                  <div>
                    <p>Darshan Name:</p>
                    <p>{selectedDarshan.description}</p>
                  </div>
                  
                  <div>
                    <p>Timings:</p>
                    <p>{selectedDarshan.open} - {selectedDarshan.close}</p>
                  </div>
                  <div>
                    <p>Location:</p>
                    <p>{selectedDarshan.location}</p>
                  </div>
                  <div>
                    <p>Normal Price:</p>
                    <p>{selectedDarshan.prices.normal}</p>
                  </div>
                  <div>
                    <p>VIP Price:</p>
                    <p>{selectedDarshan.prices.vip}</p>
                  </div>
                  <div>
                    <p>Description:</p>
                    <p>{selectedDarshan.description}</p>
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
    </div>
  );
};

export default Adarshan;
