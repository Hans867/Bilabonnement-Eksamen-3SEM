import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Car.css'

function UpdateCar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({
        brand: '',
        purchasePrice: 0,
        carFuel: '',
        imageUrl: '', // Add imageUrl to the state
    });

    useEffect(() => {
        axios.get(`https://bilwebapp.azurewebsites.net/cars/${id}`)
            .then(response => setCar(response.data))
            .catch(error => console.error('Error fetching car:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://bilwebapp.azurewebsites.net/cars/${id}`, car)
            .then(() => navigate('/cars'))
            .catch(error => console.error('Error updating car:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCar({ ...car, [e.target.name]: value });
    };

    return (
        <div className="update-car">
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
                <br/>
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
                <br/>
                <div>
                    <label>Car Fuel:</label>
                    <input
                        name="carFuel"
                        value={car.carFuel}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Image URL:</label>
                    <input
                        name="imageUrl"
                        value={car.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit">Update Car</button>
            </form>
        </div>
    );
}

export default UpdateCar;
