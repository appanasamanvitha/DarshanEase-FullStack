import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Unavbar from './Unavbar';

const Utemples = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('Fetching temples data...');
    axios
      .get('http://localhost:9000/organizer/gettemples/')
      .then((response) => {
        console.log('Raw response data:', response);
        if (response.data && Array.isArray(response.data)) {
          const templeData = response.data;
          console.log('Temple data fetched:', templeData);
          setItems(templeData);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching temples: ', error);
      });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:9000/eventdelete/${id}`)
      .then(() => {
        setItems((prevItems) => prevItems.filter(item => item._id !== id));
        alert('Temple is deleted');
      })
      .catch((error) => {
        console.error('Error deleting temple: ', error);
      });
  };

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-2 text-center">Temples</h2>

        {items.length === 0 ? (
          <p>No temples available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow">
                <div>
                  <img
                    src={`http://localhost:9000/organizer/${item.templeImage}`}
                    alt="Temple Image"
                    style={{ height: '200px', width: '400px' }}
                  />
                </div>
                <div>
                  <p className="text-xl font-bold mb-2 text-center text-red-400">{item.templeName}</p>
                  <strong>
                    <p className="text-center">Timings</p>
                  </strong>
                  <div className="text-gray-900 mb-0">
                    <p>
                      <strong>Open: </strong>
                      {item.open} AM
                    </p>
                    <p>
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
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button style={{ backgroundColor: 'rebeccapurple', border: 'none' }}>
                      <Link to={`/utemple/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Utemples;
