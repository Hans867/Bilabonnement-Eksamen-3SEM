import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateSubscription() {
    const navigate = useNavigate();
    const [newSubscription, setNewSubscription] = useState({
        datePurchased: '',
        startSubscriptionDate: '',
        endSubscriptionDate: '',
        deliveryDate: '',
        kmDrivenSubscriptionStart: 0,
        subscriptionDrivenKm: 0,
        agreedKmSubscription: 0,
        subscriptionPeriode: 0,
        subscriptionPriceEachMonth: 0,
        pickupCarPlace: '',
        returnCarPlace: '',
        carId: null,
        customerId: null,
    });

    // Define state for cars, damages, and customers
    const [cars, setCars] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the list of cars
        axios.get('http://localhost:3737/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));


        // Fetch the list of customers
        axios.get('http://localhost:3737/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3737/subscriptions', newSubscription)
            .then(() => navigate('/subscriptions'))
            .catch(error => console.error('Error creating subscription:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewSubscription({ ...newSubscription, [e.target.name]: value });
    };
    return (
        <div>
            <h2>Create New Subscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date Purchased:</label>
                    <input
                        type="text"
                        name="datePurchased"
                        value={newSubscription.datePurchased}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Start Subscription Date:</label>
                    <input
                        type="text"
                        name="startSubscriptionDate"
                        value={newSubscription.startSubscriptionDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>End Subscription Date:</label>
                    <input
                        type="text"
                        name="endSubscriptionDate"
                        value={newSubscription.endSubscriptionDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Delivery Date:</label>
                    <input
                        type="text"
                        name="deliveryDate"
                        value={newSubscription.deliveryDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Km Driven Subscription Start:</label>
                    <input
                        type="number"
                        name="kmDrivenSubscriptionStart"
                        value={newSubscription.kmDrivenSubscriptionStart}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Subscription Driven Km:</label>
                    <input
                        type="number"
                        name="subscriptionDrivenKm"
                        value={newSubscription.subscriptionDrivenKm}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Agreed Km Subscription:</label>
                    <input
                        type="number"
                        name="agreedKmSubscription"
                        value={newSubscription.agreedKmSubscription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Subscription Periode:</label>
                    <input
                        type="number"
                        name="subscriptionPeriode"
                        value={newSubscription.subscriptionPeriode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Subscription Price Each Month:</label>
                    <input
                        type="number"
                        name="subscriptionPriceEachMonth"
                        value={newSubscription.subscriptionPriceEachMonth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Pickup Car Place:</label>
                    <input
                        type="text"
                        name="pickupCarPlace"
                        value={newSubscription.pickupCarPlace}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Return Car Place:</label>
                    <input
                        type="text"
                        name="returnCarPlace"
                        value={newSubscription.returnCarPlace}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Select Car:</label>
                    <select
                        name="carId"
                        value={newSubscription.carId}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a car</option>
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>
                                {car.brand} - {car.model}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Customer:</label>
                    <select
                        name="customerId"
                        value={newSubscription.customerId}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a customer</option>
                        {customers.map(customer => (
                            <option key={customer.username} value={customer.username}>
                                {customer.username}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Create Subscription</button>
            </form>
        </div>
    );
}

export default CreateSubscription;
