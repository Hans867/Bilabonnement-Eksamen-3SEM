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
        returnCarPlace: ''
        // Add other properties based on your Subscription model
    });

    useEffect(() => {
        axios.get(`http://localhost:3737/api/subscriptions/${id}`)
            .then(response => setSubscription(response.data))
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3737/api/subscriptions/${id}`, subscription)
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
                <button type="submit">Update Subscription</button>
            </form>
        </div>
    );
}

export default UpdateSubscription;
