import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListCustomer() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/customers')
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setCustomers(response.data);
            })
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.username}>
                        {customer.username} -
                        <Link to={`/details-customer/${customer.username}`}>Details</Link>
                        <Link to={`/edit-customer/${customer.username}`}>Edit</Link>
                        <Link to={`/delete-customer/${customer.username}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-customer">Add New Customer</Link>
        </div>
    );
}

export default ListCustomer;
