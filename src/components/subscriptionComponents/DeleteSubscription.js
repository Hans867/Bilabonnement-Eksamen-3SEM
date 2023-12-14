import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Subscription.css'

function DeleteSubscription() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        axios.delete(`https://bilwebapp.azurewebsites.net/subscriptions/${id}`)
            .then(() => {
                navigate('/subscriptions');
            })
            .catch(error => console.error('Error deleting subscription:', error));
    };

    const handleCancel = () => {
        navigate('/subscriptions');
    };

    return (
        <div className="delete-subscription-container">
            <h2>Delete Subscription</h2>
            <p>Are you sure you want to delete this subscription?</p>
            <button id="complete-delete" onClick={handleDelete}>Yes, Delete</button>
            <button id="cancel-delete" onClick={handleCancel}>No, Cancel</button>
        </div>
    );
}

export default DeleteSubscription;
