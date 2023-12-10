import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteDamage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:3737/api/damages/${id}`) // Update the endpoint to match your backend URL
            .then(() => {
                navigate('/list-damages'); // Assuming you have a route for listing damages
            })
            .catch(error => console.error('Error deleting damage:', error));
    };

    const handleCancel = () => {
        navigate('/list-damages'); // Redirect to the damage list page or adjust accordingly
    };

    return (
        <div>
            <h2>Delete Damage</h2>
            <p>Are you sure you want to delete this damage?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteDamage;
