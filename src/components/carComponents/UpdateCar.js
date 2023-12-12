import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateCar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({
        brand: '',
        purchasePrice: 0,
        carFuel: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3737/cars/${id}`) // Update the endpoint to match your backend URL
            .then(response => setCar(response.data))
            .catch(error => console.error('Error fetching car:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3737/cars/${id}`, car) // Update the endpoint to match your backend URL
            .then(() => navigate('/cars')) // Redirect to the car list page after successful update
            .catch(error => console.error('Error updating car:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCar({ ...car, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand:</label>
                    <input
                        name="brand"
                        value={car.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Purchase Price:</label>
                    <input
                        type="number"
                        name="purchasePrice"
                        value={car.purchasePrice}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div>
                    <label>Car Fuel:</label>
                    <input
                        name="carFuel"
                        value={car.carFuel}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Car</button>
            </form>
        </div>

    );
}

export default UpdateCar;
