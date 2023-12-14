import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Damage.css';

function DetailsDamage() {
    const { id } = useParams();
    const [damage, setDamage] = useState(null);

    useEffect(() => {
        axios.get(`https://bilwebapp.azurewebsites.net/damages/${id}`)
            .then(response => {
                setDamage(response.data);
            })
            .catch(error => console.error('Error fetching damage:', error));
    }, [id]);

    if (!damage) return <div>Loading...</div>;

    return (
        <div className="damage-detail">
            <h2>Damage Details</h2>
            <p>Car Damage: {damage.carDamage}</p>
            <p>Reparation Cost: {damage.reparationCost}</p>
            <p>Cleaning Cost: {damage.cleaningCost}</p>
            <p>Late Return Cost: {damage.lateReturnCost}</p>

            <div>
                <h3>Car Information</h3>
                <p>Car Brand: {damage.car.brand}</p>
                <p>Purchase Price: {damage.car.purchasePrice}</p>

            </div>

            <div>
                <h3>Subscription Information</h3>
                <p>Customer Username: {damage.subscription.customer.username}</p>
                <p>Subscription Periode: {damage.subscription.subscriptionPeriode}</p>

            </div>
        </div>
    );
}

export default DetailsDamage;
