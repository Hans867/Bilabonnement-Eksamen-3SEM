import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DeleteSubscription() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`http://localhost:3737/api/subscriptions/${id}`)
            .then(() => {
                navigate('/subscriptions');
            })
            .catch(error => console.error('Error deleting subscription:', error));
    };

    const handleCancel = () => {
        navigate('/subscriptions');
    };

    return (
        <div>
            <h2>Delete Subscription</h2>
            <p>Are you sure you want to delete this subscription?</p>
            <button onClick={handleDelete}>Yes, Delete</button>
            <button onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteSubscription;
