import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateDamage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [damage, setDamage] = useState({
        carDamage: '',
        reparationCost: 0,
        cleaningCost: 0,
        lateReturnCost: 0,
        carId: null,
        subscriptionId: null,
    });

    // Define state for cars and subscriptions
    const [cars, setCars] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        // Fetch the existing damage details
        axios.get(`http://localhost:3737/damages/${id}`)
            .then(response => {
                const { carDamage, reparationCost, cleaningCost, lateReturnCost, car, subscription } = response.data;
                setDamage({
                    carDamage,
                    reparationCost,
                    cleaningCost,
                    lateReturnCost,
                    carId: car.id,
                    subscriptionId: subscription.id,
                });
            })
            .catch(error => console.error('Error fetching damage:', error));

        // Fetch the list of cars
        axios.get('http://localhost:3737/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));

        // Fetch the list of subscriptions
        axios.get('http://localhost:3737/subscriptions')
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3737/damages/${id}`, damage)
            .then(() => navigate('/list-damages'))
            .catch(error => console.error('Error updating damage:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setDamage({ ...damage, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Damage</h2>
            <form onSubmit={handleSubmit}>
                {/* Existing input fields */}
                <div>
                    <label>Car Damage:</label>
                    <input
                        name="carDamage"
                        value={damage.carDamage}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Reparation Cost:</label>
                    <input
                        type="number"
                        name="reparationCost"
                        value={damage.reparationCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <div>
                    <label>Cleaning Cost:</label>
                    <input
                        type="number"
                        name="cleaningCost"
                        value={damage.cleaningCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <div>
                    <label>Late Return Cost:</label>
                    <input
                        type="number"
                        name="lateReturnCost"
                        value={damage.lateReturnCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>

                {/* Add dropdowns for selecting car and subscription */}
                <div>
                    <label>Select Car:</label>
                    <select
                        name="carId"
                        value={damage.carId}
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
                    <label>Select Subscription:</label>
                    <select
                        name="subscriptionId"
                        value={damage.subscriptionId}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a subscription</option>
                        {subscriptions.map(subscription => (
                            <option key={subscription.id} value={subscription.id}>
                                {subscription.subscriptionPeriode}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit">Update Damage</button>
            </form>
        </div>
    );
}

export default UpdateDamage;
