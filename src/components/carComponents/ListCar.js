import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListCar() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/cars')
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setCars(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.brand} -
                        <Link to={`/car/${car.id}`}>Details</Link>
                        <Link to={`/edit-car/${car.id}`}>Edit</Link>
                        <Link to={`/delete-car/${car.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-car">Add New Car</Link>
        </div>
    );
}

export default ListCar;
