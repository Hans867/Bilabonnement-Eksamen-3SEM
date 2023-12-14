import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Customer.css';

function UpdateCustomer() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        axios.get(`https://bilwebapp.azurewebsites.net/customers/${username}`)
            .then(response => setCustomer(response.data))
            .catch(error => console.error('Error fetching customer:', error));
    }, [username]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://bilwebapp.azurewebsites.net/customers/${username}`, customer)
            .then(() => navigate('/customers'))
            .catch(error => console.error('Error updating customer:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCustomer({ ...customer, [e.target.name]: value });
    };

    return (
        <div className="update-customer">
            <h2>Edit Customer</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        name="username"
                        value={customer.username}
                        onChange={handleChange}
                        required
                        readOnly // Make the username read-only
                    />
                </div>
                <br/>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={customer.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>First Name:</label>
                    <input
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Last Name:</label>
                    <input
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button id="update-customer-button" type="submit">Update Customer</button>
            </form>
        </div>
    );
}

export default UpdateCustomer;
