import React, { useState } from 'react';
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
        returnCarPlace: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/subscriptions', newSubscription)
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
                <button type="submit">Create Subscription</button>
            </form>
        </div>
    );
}

export default CreateSubscription;
