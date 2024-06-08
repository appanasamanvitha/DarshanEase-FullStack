import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Onavbar from './Onavbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './organizer.css';

const Odarshans = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("first")
    const fetchDarshans = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
          throw new Error('User not found');
        }
        
        const response = await axios.get(`http://localhost:9000/organizer/getdarshans/${user.id}`);
        const darshansData = response.data;
        setItems(darshansData);
      } catch (error) {
        console.error('Error fetching darshans:', error.message);
        setError('Failed to fetch darshans. Please try again later.');
      }
    };

    fetchDarshans();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/organizer/eventdelete/${id}`);
      alert('Darshan is deleted');
      window.location.reload(); // Reload the page or navigate to another route if needed
    } catch (error) {
      console.error('Error deleting darshan:', error);
    }
  };
  

  return (
    <div>
      <Onavbar />
      <div className="container mx-auto p-8">
        <div>
          <Button>
            <Link to="/createdarshan" className="editTempleLink">
              Create Darshan
            </Link>
          </Button>
        </div>
        <h2 className="text-3xl font-semibold mb-2 text-center">My Darshans</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <div>
                <p className="text-xl font-bold mb-2">Darshan Name: {item.darshanName}</p>
                <p className="text-gray-900 mb-2"><strong>Open: </strong>{item.open}</p>
                <p className="text-gray-900 mb-2"><strong>Close: </strong>{item.close}</p>
                <p className="text-gray-900 mb-2"><strong>Normal Darshan: </strong>{item.prices.normal}</p>
                <p className="text-gray-900 mb-2"><strong>VIP Darshan: </strong>{item.prices.vip}</p>
                <p className="text-gray-900"><strong>Description: </strong>{item.description.slice(0, 259)} ...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Odarshans;
