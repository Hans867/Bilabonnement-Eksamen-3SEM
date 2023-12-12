import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteCustomer() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:3737/customers/${id}`) // Update the endpoint to match your backend URL
            .then(() => {
                navigate('/customers'); // Redirect to the customer list page after successful deletion
            })
            .catch(error => console.error('Error deleting customer:', error));
    };

    const handleCancel = () => {
        navigate('/customers'); // Redirect to the customer list page if the deletion is canceled
    };

    return (
        <div>
            <h2>Delete Customer</h2>
            <p>Are you sure you want to delete this customer?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteCustomer;
