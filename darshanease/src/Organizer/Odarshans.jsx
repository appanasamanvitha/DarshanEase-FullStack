import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Onavbar from './Onavbar';

const Odarshan = () => {
  const [darshans, setDarshans] = useState([]);
  const [selectedDarshan, setSelectedDarshan] = useState(null);

  useEffect(() => {
    const fetchDarshans = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          throw new Error('User not found');
        }

        const response = await axios.get(`http://localhost:9000/organizer/getdarshans`);
        setDarshans(response.data);
      } catch (error) {
        console.error('Error fetching darshans:', error);
      }
    };

    fetchDarshans();
  }, []);

  const deleteDarshan = async (darshanId) => {
    try {
      await axios.delete(`http://localhost:9000/organizer/eventdelete/${darshanId}`);
      setDarshans(darshans.filter(darshan => darshan._id !== darshanId));
      alert('Darshan deleted');
    } catch (error) {
      console.error('Error deleting darshan:', error);
    }
  };

  const viewDarshanDetails = (darshan) => {
    setSelectedDarshan(darshan);
  };

  const closeDetails = () => {
    setSelectedDarshan(null);
  };

  return (
    <div>
      <Onavbar />
      <br />
      <h1 className='text-center'>My Darshans</h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table striped bordered hover style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>Sl/No</th>
              <th>Darshan Name</th>
              <th>Open</th>
              <th>Close</th>
              <th>Normal Price</th>
              <th>VIP Price</th>
              
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {darshans.map((darshan, index) => (
              <tr key={darshan._id}>
                <td>{index + 1}</td>
                <td>{darshan.description.slice(0, 50)}</td>
                <td>{darshan.open}</td>
                <td>{darshan.close}</td>
                <td>{darshan.prices.normal}</td>
                <td>{darshan.prices.vip}</td>
                
                <td>
                  <Button onClick={() => viewDarshanDetails(darshan)} style={{ marginBottom: '12px' }}>
                    View
                  </Button>
                  <Link to={`/editdarshan/${darshan._id}`} style={{ color: 'blue', textDecoration: 'none', marginRight: '10px' }}>
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
                  {/* Render detailed information of selectedDarshan */}
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

export default Odarshan;
