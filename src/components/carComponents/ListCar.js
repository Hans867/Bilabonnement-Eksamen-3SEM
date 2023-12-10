import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function ListCar() {
    const [cars, setCars] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3737/api/cars')
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setCars(response.data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const handleDetails = (id) => {
        history.push(`/car/${id}`);
    };

    const handleEdit = (id) => {
        history.push(`/edit-car/${id}`);
    };

    const handleDelete = (id) => {
        history.push(`/delete-car/${id}`);
    };

    const handleAddNew = () => {
        history.push('/create-car');
    };

    return (
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.brand} -
                        <button onClick={() => handleDetails(car.id)}>Details</button>
                        <button onClick={() => handleEdit(car.id)}>Edit</button>
                        <button onClick={() => handleDelete(car.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddNew}>Add New Car</button>
        </div>
    );
}

export default ListCar;
