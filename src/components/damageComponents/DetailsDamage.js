import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailsDamage() {
    const { id } = useParams();
    const [damage, setDamage] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3737/api/damages/${id}`) // Update the endpoint to match your backend URL
            .then(response => {
                setDamage(response.data);
            })
            .catch(error => console.error('Error fetching damage:', error));
    }, [id]);

    if (!damage) return <div>Loading...</div>;

    return (
        <div>
            <h2>Damage Details</h2>
            <p>Car Damage: {damage.carDamage}</p>
            <p>Reparation Cost: {damage.reparationCost}</p>
            <p>Cleaning Cost: {damage.cleaningCost}</p>
            <p>Late Return Cost: {damage.lateReturnCost}</p>
        </div>
    );
}

export default DetailsDamage;
