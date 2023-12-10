import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ListSubscriptions() {
    const history = useHistory();
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/api/subscriptions') // Update the endpoint to match your backend URL
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, []);

    const handleDetails = (id) => {
        history.push(`/subscription/${id}`);
    };

    const handleEdit = (id) => {
        history.push(`/edit-subscription/${id}`);
    };

    const handleDelete = (id) => {
        history.push(`/delete-subscription/${id}`);
    };

    const handleAddNew = () => {
        history.push('/create-subscription');
    };

    return (
        <div>
            <h2>Subscription List</h2>
            <ul>
                {subscriptions.map(subscription => (
                    <li key={subscription.id}>
                        {subscription.subscriptionPeriode} -
                        <button onClick={() => handleDetails(subscription.id)}>Details</button>
                        <button onClick={() => handleEdit(subscription.id)}>Edit</button>
                        <button onClick={() => handleDelete(subscription.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddNew}>Add New Subscription</button>
        </div>
    );
}

export default ListSubscriptions;
