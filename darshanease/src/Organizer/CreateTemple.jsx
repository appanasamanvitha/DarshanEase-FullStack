import React, { useState } from 'react';
import axios from 'axios';

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
            <h2>Create Temple</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="organizerId" placeholder="Organizer ID" onChange={handleChange} required />
                <input type="text" name="organizerName" placeholder="Organizer Name" onChange={handleChange} required />
                <input type="text" name="templeName" placeholder="Temple Name" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <input type="time" name="open" placeholder="Opening Time" onChange={handleChange} required />
                <input type="time" name="close" placeholder="Closing Time" onChange={handleChange} required />
                <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
                <input type="file" name="templeImage" onChange={handleImageChange} required />
                <button type="submit">Create Temple</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateTemple;
