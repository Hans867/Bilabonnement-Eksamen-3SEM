import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateSubscription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subscription, setSubscription] = useState({
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
        damageId: null,
        customerId: null,
    });

    // Define state for cars, damages, and customers
    const [cars, setCars] = useState([]);
    const [damages, setDamages] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the list of cars
        axios.get('http://localhost:3737/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));

        // Fetch the list of damages
        axios.get('http://localhost:3737/damages')
            .then(response => setDamages(response.data))
            .catch(error => console.error('Error fetching damages:', error));

        // Fetch the list of customers
        axios.get('http://localhost:3737/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));

        // Fetch the current subscription details
        axios.get(`http://localhost:3737/subscriptions/${id}`)
            .then(response => setSubscription(response.data))
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3737/subscriptions/${id}`, subscription)
            .then(() => navigate('/subscriptions'))
            .catch(error => console.error('Error updating subscription:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSubscription({ ...subscription, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Subscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date Purchased:</label>
                    <input
                        type="text"
                        name="datePurchased"
                        value={subscription.datePurchased}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Start Subscription Date:</label>
                    <input
                        type="text"
                        name="startSubscriptionDate"
                        value={subscription.startSubscriptionDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>End Subscription Date:</label>
                    <input
                        type="text"
                        name="endSubscriptionDate"
                        value={subscription.endSubscriptionDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Delivery Date:</label>
                    <input
                        type="text"
                        name="deliveryDate"
                        value={subscription.deliveryDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Km Driven Subscription Start:</label>
                    <input
                        type="number"
                        name="kmDrivenSubscriptionStart"
                        value={subscription.kmDrivenSubscriptionStart}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Subscription Driven Km:</label>
                    <input
                        type="number"
                        name="subscriptionDrivenKm"
                        value={subscription.subscriptionDrivenKm}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Agreed Km Subscription:</label>
                    <input
                        type="number"
                        name="agreedKmSubscription"
                        value={subscription.agreedKmSubscription}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Subscription Periode:</label>
                    <input
                        type="number"
                        name="subscriptionPeriode"
                        value={subscription.subscriptionPeriode}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Subscription Price Each Month:</label>
                    <input
                        type="number"
                        name="subscriptionPriceEachMonth"
                        value={subscription.subscriptionPriceEachMonth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Pickup Car Place:</label>
                    <input
                        type="text"
                        name="pickupCarPlace"
                        value={subscription.pickupCarPlace}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Return Car Place:</label>
                    <input
                        type="text"
                        name="returnCarPlace"
                        value={subscription.returnCarPlace}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Select Car:</label>
                    <select
                        name="carId"
                        value={subscription.carId}
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
                    <label>Select Damage:</label>
                    <select
                        name="damageId"
                        value={subscription.damageId}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a damage</option>
                        {damages.map(damage => (
                            <option key={damage.id} value={damage.id}>
                                {damage.carDamage}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Select Customer:</label>
                    <select
                        name="customerId"
                        value={subscription.customerId}
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

                <button type="submit">Update Subscription</button>
            </form>
        </div>
    );
}

export default UpdateSubscription;
