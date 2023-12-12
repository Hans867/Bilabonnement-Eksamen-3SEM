import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteCar() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:3737/cars/${id}`) // Update the endpoint to match your backend URL
            .then(() => {
                navigate('/cars'); // Redirect to the car list page after successful deletion
            })
            .catch(error => console.error('Error deleting car:', error));
    };

    const handleCancel = () => {
        navigate('/cars'); // Redirect to the car list page if the deletion is canceled
    };

    return (
        <div>
            <h2>Delete Car</h2>
            <p>Are you sure you want to delete this car?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteCar;
