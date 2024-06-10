import React, { useState } from 'react';
import axios from 'axios';
import Onavbar from './Onavbar';
import moment from 'moment';
import 'moment-timezone';

const CreateTemple = () => {
    const [formData, setFormData] = useState({
        organizerId: '',
        organizerName: '',
        templeName: '',
        location: '',
        open: '',
        close: '',
        description: '',
        templeImage: null,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, templeImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);
        }

        try {
            console.log('Submitting form data:', formData);
            const response = await axios.post('http://localhost:9000/organizer/createtemple', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Temple added successfully:', response.data);
        } catch (error) {
            console.error('Error adding temple:', error);
            setError('Failed to create temple. Please try again later.');
        }
    };

    return (
        <div>
            <Onavbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div style={{ maxWidth: '500px', width: '100%', padding: '20px', backgroundColor: '#25F9FF', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Temple</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="templeName" style={{ display: 'block' }}>Temple Name</label>
                            <input type="text" id="templeName" name="templeName" value={formData.templeName} onChange={handleChange} className="form-input" required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="location" style={{ display: 'block' }}>Location</label>
                            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="form-input" required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="open" style={{ display: 'block' }}>Open Time</label>
                            <input type="time" id="open" name="open" value={formData.open} onChange={handleChange} className="form-input" required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="close" style={{ display: 'block' }}>Close Time</label>
                            <input type="time" id="close" name="close" value={formData.close} onChange={handleChange} className="form-input" required />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="description" style={{ display: 'block' }}>Description</label>
                            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-input" required></textarea>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="templeImage" style={{ display: 'block' }}>Temple Image</label>
                            <input type="file" id="templeImage" name="templeImage" onChange={handleImageChange} required />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button type="submit" className="btn-primary">Create Temple</button>
                        </div>
                    </form>
                    {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '15px' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default CreateTemple;
