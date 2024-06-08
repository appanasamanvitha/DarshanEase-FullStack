import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Onavbar from './Onavbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './organizer.css';

const Mytemple = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTempleData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          throw new Error('User not found');
        }

        const response = await axios.get(`http://localhost:9000/organizer/gettemple/${user.id}`);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching temple data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchTempleData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/organizer/eventdelete/${id}`);
      alert('Temple is deleted');
      window.location.reload(); // Reload the page or update state to reflect deletion
    } catch (error) {
      console.error('Error deleting temple:', error);
      // Handle delete error here
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Onavbar />
      <div className="container mx-auto p-8">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
          <Button style={{ backgroundColor: 'lightslategray', border: 'none' }}>
            <Link to="/createtemple" style={{ color: 'white', textDecoration: 'none' }} className="editTempleLink">
              Create Temple
            </Link>
          </Button>
        </div>
        <h2 className="text-3xl font-semibold mb-2 text-center">My Temple</h2>
        <div className="max-w-md mx-auto grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <div>
                <img
                  src={`http://localhost:9000/organizer/${item.templeImage}`}
                  alt="Temple Image"
                  style={{ height: '250px', width: "500px" }}
                />
              </div>
              <div>
                <p className="text-xl font-bold mb-2 text-center">{item.templeName}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p className="text-gray-900 mb-2">
                    <strong>Open: </strong>
                    {item.open} AM
                  </p>
                  <p className="text-gray-900 mb-2">
                    <strong>Close: </strong>
                    {item.close} PM
                  </p>
                </div>
                <p className="text-gray-900 mb-2">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-gray-900">
                  <strong>Description:</strong>
                  {item.description.slice(0, 259)} ...
                </p>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  <FaTrash />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytemple;
