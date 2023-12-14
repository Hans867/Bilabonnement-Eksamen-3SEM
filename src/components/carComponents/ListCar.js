import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Car.css'

function ListCar() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('https://bilwebapp.azurewebsites.net/cars')
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setCars(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div className="Car-container">
            <div className="Car-list">
                {cars.map(car => (
                    <div key={car.id} className="Car-item">
                        <h3>{car.brand}</h3>
                        <img src={car.imageUrl} alt={`${car.brand} Car`} />
                        <div className="Car-links">
                            <Link to={`/car/${car.id}`}>Details</Link>
                            <Link to={`/edit-car/${car.id}`}>Edit</Link>
                            <Link id="delete" to={`/delete-car/${car.id}`}>Delete</Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link id="create-car-link" to="/create-car">Add New Car</Link>
        </div>
    );
}

export default ListCar;
