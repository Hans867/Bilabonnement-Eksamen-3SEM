import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Subscription.css'

function ListSubscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        axios.get('https://bilwebapp.azurewebsites.net/subscriptions') // Update the endpoint to match your backend URL
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, []);

    return (
        <div className="subscription-list-container">
            <h2>Subscription List</h2>
            <ul>
                {subscriptions.map(subscription => (
                    <li  key={subscription.id}>
                        {subscription.subscriptionPeriode} -
                        <Link to={`/subscription/${subscription.id}`}>Details</Link>
                        <Link to={`/edit-subscription/${subscription.id}`}>Edit</Link>
                        <Link className="delete-link" to={`/delete-subscription/${subscription.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-subscription" className="add-link">Add New Subscription</Link>
        </div>
    );
}

export default ListSubscriptions;
