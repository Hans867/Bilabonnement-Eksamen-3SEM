import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Damage.css';

function CreateDamage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [damage, setDamage] = useState({
        carDamage: '',
        reparationCost: 0,
        cleaningCost: 0,
        lateReturnCost: 0,
        carId: '',
        subscription: null, // Change to an object
    });

    // Define state for cars and subscriptions
    const [cars, setCars] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        if (id) {
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
                        subscription: subscription, // Change to an object
                    });
                })
                .catch(error => console.error('Error fetching damage:', error));
        }

        // Fetch the list of cars
        axios.get('http://localhost:3737/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));

        // Fetch the list of subscriptions
        axios.get('http://localhost:3737/subscriptions')
            .then(response => setSubscriptions(response.data))
            .catch(error => console.error('Error fetching subscriptions:', error));
    }, [id]);

    // Inside the CreateDamage component

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiEndpoint = id
            ? `http://localhost:3737/damages/${id}` // For updating an existing damage
            : 'http://localhost:3737/damages'; // For creating a new damage

        const method = id ? 'put' : 'post'; // Use POST for creating and PUT for updating

        axios({
            method,
            url: apiEndpoint,
            data: {
                ...damage,
                id: undefined, // Remove id when creating a new damage
                car: { id: damage.carId }, // Add car property
                subscription: damage.subscription, // Keep subscription as an object
            },
        })
            .then(() => navigate('/damages'))
            .catch((error) => console.error(`Error ${id ? 'updating' : 'creating'} damage:`, error));
    };


    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setDamage((prevDamage) => ({
            ...prevDamage,
            [e.target.name]: value === null ? '' : value,
        }));
    };

    return (
        <div className="create-damage">
            <h2>Create Damage</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Car Damage:</label>
                    <input
                        name="carDamage"
                        value={damage.carDamage}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Reparation Cost:</label>
                    <input
                        type="number"
                        name="reparationCost"
                        value={damage.reparationCost}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <br />
                <div>
                    <label>Cleaning Cost:</label>
                    <input
                        type="number"
                        name="cleaningCost"
                        value={damage.cleaningCost}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <br />
                <div>
                    <label>Late Return Cost:</label>
                    <input
                        type="number"
                        name="lateReturnCost"
                        value={damage.lateReturnCost}
                        onChange={handleChange}
                        min="0"
                    />
                </div>
                <br />
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
                                {car.brand}
                            </option>
                        ))}
                    </select>
                </div>
                <br />
                <div>
                    <label>Select Subscription:</label>
                    <select
                        name="subscription"
                        value={damage.subscription ? String(damage.subscription.id) : ''}
                        onChange={(e) => {
                            const selectedSub = subscriptions.find(sub => sub.id === parseInt(e.target.value, 10));
                            setDamage((prevDamage) => ({
                                ...prevDamage,
                                subscription: selectedSub,
                            }));
                        }}
                        required
                    >
                        <option value="" disabled>Select a subscription</option>
                        {subscriptions.map(subscription => (
                            <option key={subscription.id} value={String(subscription.id)}>
                                {`${subscription.customer.firstName} ${subscription.customer.lastName} - ${subscription.id}`}
                            </option>
                        ))}
                    </select>
                </div>
                <br />

                <button type="submit">Create Damage</button>
            </form>
        </div>
    );
}

export default CreateDamage;
