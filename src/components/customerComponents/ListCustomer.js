import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Customer.css';

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
        <div className="list-customer">
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.username}>
                        {customer.username}
                        <Link to={`/customers/${customer.username}`}>Details</Link>
                        <Link to={`/edit-customer/${customer.username}`}>Edit</Link>
                        <Link id="deleteCustomer" to={`/delete-customer/${customer.username}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-customer" className="add-link">Add New Customer</Link>
        </div>
    );
}

export default ListCustomer;
