import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Car.css'

function CreateCar() {
    const navigate = useNavigate();
    const [newCar, setNewCar] = useState({
        brand: '',
        purchasePrice: 0,
        carFuel: '',
        imageUrl: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3737/cars', newCar)
            .then(() => navigate('/cars'))
            .catch(error => console.error('Error creating car:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewCar({ ...newCar, [e.target.name]: value });
    };

    return (
        <div className="create-car">
            <h2>Create New Car</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Brand:</label>
                    <input
                        name="brand"
                        value={newCar.brand}
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
                        value={newCar.purchasePrice}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <br/>
                <div>
                    <label>Car Fuel:</label>
                    <input
                        name="carFuel"
                        value={newCar.carFuel}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Image URL:</label>
                    <input
                        name="imageUrl"
                        value={newCar.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit">Create Car</button>
            </form>
        </div>
    );
}

export default CreateCar;
