import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Customer.css';

function DetailsCustomer() {
    const { username } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`https://bilwebapp.azurewebsites.net/customers/${username}`)
            .then(response => {
                setCustomer(response.data);
            })
            .catch(error => console.error('Error fetching customer:', error));
    }, [username]);

    if (!customer) return <div>Loading...</div>;

    return (
        <div className="details-customer">
            <h2>{customer.username}</h2>
            <p>Email: {customer.email}</p>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
        </div>
    );
}

export default DetailsCustomer;
