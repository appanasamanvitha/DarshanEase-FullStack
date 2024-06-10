import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';

const Utemple = () => {
    const [item, setItem] = useState(null);
    const [darshan, setDarshan] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:9000/organizer/gettemplebyid/${id}`)
            .then((resp) => {
                setItem(resp.data);
                const organizerId = resp.data.organizerId;
                axios.get(`http://localhost:9000/organizer//getdarshans`)
                    .then((response) => {
                        setDarshan(response.data);
                    })
                    .catch((error) => {
                        console.error('Error fetching darshan: ', error);
                    });
            })
            .catch(() => {
                console.log("Did not get data");
            });
    }, [id]);

    return (
        <div>
            <Unavbar/>
            <br/>
            {item && (
                <div className="container mx-auto">
                    <div className="text-center">
                        <img src={`http://localhost:9000/organizer/${item?.templeImage}`} alt="Temple" className="mx-auto mb-4" style={{ width: '500px', maxHeight: '400px' }} />
                        <h1 className="text-3xl font-semibold">{item.eventName}</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-lg font-semibold mt-4">Description</h2>
                            <hr className="my-2" />
                            <p className="text-gray-800">{item.description}</p>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-lg font-semibold mt-4">Info</h2>
                            <hr className="my-2" />
                            <p className="text-gray-800">Open: {item.open} AM</p>
                            <p className="text-gray-800">Close: {item.close} PM</p>
                            <p className="text-gray-800">Organizer: {item.organizerName}</p>
                            <p className="text-gray-800">Address: {item.location}</p>
                        </div>
                    </div>
                </div>
            )}

            <br/>
            <div className="container mx-auto p-8">
                <h2 className="text-3xl font-semibold mb-2 text-center">Darshans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {darshan.map((item) => (
                        <div key={item._id} className="p-4 rounded shadow">
                            <div>
                                <p className="text-xl font-bold mb-2 text-center">{item.darshanName}</p>
                                <p className="text-gray-900 mb-2"><strong>Timing:</strong> {item.time} AM</p>
                                <p className="text-gray-900 mb-2"><strong>Date:</strong> {item.date} PM</p>
                                <p className="text-gray-900 mb-2"><strong>Normal Darshan:</strong> {item.prices.normal}</p>
                                <p className="text-gray-900 mb-2"><strong>VIP Darshan:</strong> {item.prices.vip}</p>
                                <p className="text-gray-900"><strong>Description:</strong> {item.description.slice(0, 150)} ...</p>
                                <div className="flex items-center justify-center">
                                    <Button className="bg-blue-500 text-black font-semibold px-4 py-2 rounded hover:bg-blue-700">
                                        <Link to={`/bookdarshan/${item._id}`} style={{ color: "black", textDecoration: "none" }}>
                                            Book Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Utemple;
