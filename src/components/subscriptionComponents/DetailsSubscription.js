import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Subscription.css';

function SubscriptionDetails() {
    const { id } = useParams();
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3737/subscriptions/${id}`)
            .then(response => {
                setSubscription(response.data);
            })
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    if (!subscription) return <div>Loading...</div>;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="subscription-details">
            <h2>Subscription Details</h2>
            <p>Date Purchased: {formatDate(subscription.datePurchased)}</p>
            <p>Start Subscription Date: {formatDate(subscription.startSubscriptionDate)}</p>
            <p>End Subscription Date: {formatDate(subscription.endSubscriptionDate)}</p>
            <p>Delivery Date: {formatDate(subscription.deliveryDate)}</p>
            <p>Km Driven Subscription Start: {subscription.kmDrivenSubscriptionStart}</p>
            <p>Subscription Driven Km: {subscription.subscriptionDrivenKm}</p>
            <p>Agreed Km Subscription: {subscription.agreedKmSubscription}</p>
            <p>Subscription Period: {subscription.subscriptionPeriode} days</p>
            <p>Subscription Price Each Month: {subscription.subscriptionPriceEachMonth}</p>
            <p>Pickup Car Place: {subscription.pickupCarPlace}</p>
            <p>Return Car Place: {subscription.returnCarPlace}</p>

            {/* Display Car details */}
            <div>
                <h3>Car Details</h3>
                <p>Brand: {subscription.car.brand}</p>
                <p>Purchase Price: {subscription.car.purchasePrice}</p>
                <p>Fuel Type: {subscription.car.carFuel}</p>
                {/* Add other car details as needed */}
            </div>

            {/* Display Customer details */}
            <div>
                <h3>Customer Details</h3>
                <p>Username: {subscription.customer.username}</p>
                <p>Email: {subscription.customer.email}</p>
                <p>Name: {`${subscription.customer.firstName} ${subscription.customer.lastName}`}</p>
                {/* Add other customer details as needed */}
            </div>
        </div>
    );
}

export default SubscriptionDetails;
