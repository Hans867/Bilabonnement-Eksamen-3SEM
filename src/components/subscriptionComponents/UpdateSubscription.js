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
        customerId: null,
    });

    // Define state for cars, damages, and customers
    const [cars, setCars] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch the list of cars
        axios.get('https://bilwebapp.azurewebsites.net/cars')
            .then(response => setCars(response.data))
            .catch(error => console.error('Error fetching cars:', error));

        // Fetch the list of customers
        axios.get('https://bilwebapp.azurewebsites.net/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));

        // Fetch the current subscription details
        axios.get(`https://bilwebapp.azurewebsites.net/subscriptions/${id}`)
            .then(response => setSubscription(response.data))
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://bilwebapp.azurewebsites.net/subscriptions/${id}`, subscription)
            .then(() => navigate('/subscriptions'))
            .catch(error => console.error('Error updating subscription:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSubscription({ ...subscription, [e.target.name]: value });
    };

    return (
        <div className="edit-subscription">
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
                <br/>
                <div>
                    <label>Start Subscription Date:</label>
                    <input
                        type="text"
                        name="startSubscriptionDate"
                        value={subscription.startSubscriptionDate}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>End Subscription Date:</label>
                    <input
                        type="text"
                        name="endSubscriptionDate"
                        value={subscription.endSubscriptionDate}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Delivery Date:</label>
                    <input
                        type="text"
                        name="deliveryDate"
                        value={subscription.deliveryDate}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Km Driven Subscription Start:</label>
                    <input
                        type="number"
                        name="kmDrivenSubscriptionStart"
                        value={subscription.kmDrivenSubscriptionStart}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Subscription Driven Km:</label>
                    <input
                        type="number"
                        name="subscriptionDrivenKm"
                        value={subscription.subscriptionDrivenKm}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Agreed Km Subscription:</label>
                    <input
                        type="number"
                        name="agreedKmSubscription"
                        value={subscription.agreedKmSubscription}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Subscription Periode:</label>
                    <input
                        type="number"
                        name="subscriptionPeriode"
                        value={subscription.subscriptionPeriode}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Subscription Price Each Month:</label>
                    <input
                        type="number"
                        name="subscriptionPriceEachMonth"
                        value={subscription.subscriptionPriceEachMonth}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Pickup Car Place:</label>
                    <input
                        type="text"
                        name="pickupCarPlace"
                        value={subscription.pickupCarPlace}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Return Car Place:</label>
                    <input
                        type="text"
                        name="returnCarPlace"
                        value={subscription.returnCarPlace}
                        onChange={handleChange}
                    />
                </div>
                <br/>
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
                                {car.brand}
                            </option>
                        ))}
                    </select>
                </div>
                <br/>
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
                <br/>

                <button type="submit">Update Subscription</button>
            </form>
        </div>
    );
}

export default UpdateSubscription;
