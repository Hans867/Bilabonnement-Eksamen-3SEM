import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateCustomer() {
    const navigate = useNavigate();
    const [newCustomer, setNewCustomer] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3737/customers', newCustomer)
            .then(() => navigate('/customers'))
            .catch(error => console.error('Error creating customer:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewCustomer({ ...newCustomer, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Create New Customer</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        name="username"
                        value={newCustomer.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={newCustomer.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newCustomer.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                        name="firstName"
                        value={newCustomer.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        name="lastName"
                        value={newCustomer.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Customer</button>
            </form>
        </div>
    );
}

export default CreateCustomer;
