import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SubscriptionDetails() {
    const { id } = useParams();
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/subscriptions/${id}`)
            .then(response => {
                setSubscription(response.data);
            })
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    if (!subscription) return <div>Loading...</div>;

    return (
        <div>
            <h2>Subscription Details</h2>
            <p>Date Purchased: {subscription.datePurchased}</p>
            <p>Start Subscription Date: {subscription.startSubscriptionDate}</p>
            <p>End Subscription Date: {subscription.endSubscriptionDate}</p>
            <p>Delivery Date: {subscription.deliveryDate}</p>
            <p>Km Driven Subscription Start: {subscription.kmDrivenSubscriptionStart}</p>
            <p>Subscription Driven Km: {subscription.subscriptionDrivenKm}</p>
            <p>Agreed Km Subscription: {subscription.agreedKmSubscription}</p>
            <p>Subscription Periode: {subscription.subscriptionPeriode}</p>
            <p>Subscription Price Each Month: {subscription.subscriptionPriceEachMonth}</p>
            <p>Pickup Car Place: {subscription.pickupCarPlace}</p>
            <p>Return Car Place: {subscription.returnCarPlace}</p>
        </div>
    );
}

export default SubscriptionDetails;
