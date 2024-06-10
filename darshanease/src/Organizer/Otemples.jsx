import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Onavbar from './Onavbar';

const Otemples= () => {
  const [temples, setTemples] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/organizer/gettemples')
      .then((response) => {
        setTemples(response.data);
      })
      .catch((error) => {
        console.error('Error fetching temples:', error);
      });
  }, []);

  const deleteTemple = (templeId) => {
    axios.delete(`http://localhost:9000/organizer/templedelete/${templeId}`)
      .then(() => {
        setTemples(temples.filter(temple => temple._id !== templeId));
        alert('Temple deleted');
      })
      .catch((error) => {
        console.error('Error deleting temple:', error);
      });
  };

  const viewTempleDetails = (temple) => {
    setSelectedTemple(temple);
  };

  const closeDetails = () => {
    setSelectedTemple(null);
  };

  return (
    <div>
      <Onavbar />
      <br />
      <h1 className='text-center'>Temples</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>Sl/No</th>
              <th>Temple Name</th>
              <th>Location</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {temples.map((temple, index) => (
              <tr key={temple._id}>
                <td>{index + 1}</td>
                <td>{temple.templeName}</td>
                <td>{temple.location}</td>
                <td>
                  <Button onClick={() => viewTempleDetails(temple)} style={{ marginBottom: '12px' }}>
                    View
                  </Button>
                  <Link to={`/templeedit/${temple._id}`} style={{ color: 'blue', textDecoration: 'none', marginRight: '10px' }}>
                    <FaEdit />
                  </Link>
                  <Button onClick={() => deleteTemple(temple._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {selectedTemple && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
            <div className="container mx-auto mt-8" style={{ width: "90%" }}>
              <h1 className='text-center text-blue-300'>Temple Details</h1>
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
                    {/* Add image rendering here */}
                    {/* <img src={`http://localhost:9000/organizer/${selectedTemple.templeImage}`} alt={selectedTemple.templeName} style={{ height: "80px", width: "120px" }} /> */}
                  </div>
                  <div>
                    <p>Temple Name:</p>
                    <p>{selectedTemple.templeName}</p>
                  </div>
                  {/* Add more temple details here */}
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

export default Otemples;
