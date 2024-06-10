import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Anavbar from './Anavbar';
import bgm from '../assets/bg6.png'
function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [temples, setTemples] = useState([]);
  const [darshans, setDarshans] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user data
    axios.get(`http://localhost:9000/user/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users: ', error);
      });

    // Fetch organizers data
    axios.get(`http://localhost:9000/organizer/organizers`)
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching organizers: ', error);
      });

    // Fetch temples data
    axios.get(`http://localhost:9000/organizer/gettemples`)
      .then((response) => {
        setTemples(response.data);
      })
      .catch((error) => {
        console.error('Error fetching temples: ', error);
      });

    // Fetch darshans data
    axios.get(`http://localhost:9000/organizer/getdarshans`)
      .then((response) => {
        setDarshans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching darshans: ', error);
      });

    // Fetch bookings data
    axios.get(`http://localhost:9000/user/getbookings`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings: ', error);
      });
  }, []);

  const colors = ['#2B124C', '#AE4451', '#F39F5A', 'orange'];

  // Calculate the number of users and bookings
  const totalUsers = users.length;
  const totalOrganizers = vendors.length;
  const totalTemples = temples.length;
  const totalDarshans = darshans.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: 'Users', value: totalUsers, fill: 'purple' },
    { name: 'Organizers', value: totalOrganizers, fill: 'darkcyan' },
    { name: 'Temples', value: totalTemples, fill: 'coral' },
    { name: 'Darshans', value: totalDarshans, fill: 'orange' },
    { name: 'Bookings', value: totalOrders, fill: 'green' },
  ];

  return (
    <div style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <Anavbar />
      <h3 className="text-center">Dashboard</h3>
      <Card body style={{ width: "1400px", marginLeft: "3.7%", marginTop: "20px", height: "580px" }}>
        <div className="flex justify-around items-center p-2">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "purple" }}>
              USERS <br /> <br />{totalUsers}
            </div>
          </Link>
          <Link to="/organizers" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "darkcyan" }}>
              Organizers <br /> <br /> {totalOrganizers}
            </div>
          </Link>
          <Link to="/temples" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "coral" }}>
              Temples <br /> <br />{totalTemples}
            </div>
          </Link>
          <Link to="/darshans" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "orange" }}>
              Darshans <br /> <br />{totalDarshans}
            </div>
          </Link>
          <Link to="/getbooking" style={{ textDecoration: "none" }}>
            <div className="w-64 h-32 rounded-lg shadow-md flex flex-col justify-center items-center text-xl font-bold text-gray-800 text-center" style={{ backgroundColor: "green" }}>
              Total Bookings <br /> <br />{totalOrders}
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div style={{ paddingLeft: "450px" }}>
          <BarChart width={400} height={300} data={data} >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" barSize={50} />
          </BarChart>
        </div>
      </Card>
    </div>
  );
}

export default Ahome;
