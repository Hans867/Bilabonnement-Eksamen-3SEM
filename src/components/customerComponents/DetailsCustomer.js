// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailsCustomer() {
    const { username } = useParams(); // Change 'id' to 'username'
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3737/customers/${username}`) // Change 'id' to 'username'
            .then(response => {
                setCustomer(response.data);
            })
            .catch(error => console.error('Error fetching customer:', error));
    }, [username]); // Change 'id' to 'username'

    if (!customer) return <div>Loading...</div>;

    return (
        <div>
            <h2>{customer.username}</h2>
            <p>Email: {customer.email}</p>
            <p>First Name: {customer.firstName}</p>
            <p>Last Name: {customer.lastName}</p>
        </div>
    );
}

export default DetailsCustomer;

