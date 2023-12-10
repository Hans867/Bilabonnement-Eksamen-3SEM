import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListSubscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/api/subscriptions') // Update the endpoint to match your backend URL
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, []);

    return (
        <div>
            <h2>Subscription List</h2>
            <ul>
                {subscriptions.map(subscription => (
                    <li key={subscription.id}>
                        {subscription.subscriptionPeriode} -
                        <Link to={`/subscription/${subscription.id}`}>Details</Link>
                        <Link to={`/edit-subscription/${subscription.id}`}>Edit</Link>
                        <Link to={`/delete-subscription/${subscription.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-subscription">Add New Subscription</Link>
        </div>
    );
}

export default ListSubscriptions;
