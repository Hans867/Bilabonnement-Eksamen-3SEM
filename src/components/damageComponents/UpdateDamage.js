import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateDamage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [damage, setDamage] = useState({
        description: '',
        cost: 0,
        repairDate: new Date().toISOString().split('T')[0],
        carId: null,
        subscriptionId: null,
    });

    const [cars, setCars] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        // Fetch the existing damage details
        axios.get(`http://localhost:3737/damages/${id}`)
            .then(response => {
                const { description, cost, repairDate, car, subscription } = response.data;
                setDamage({
                    description,
                    cost,
                    repairDate,
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
                <div>
                    <label>Description:</label>
                    <input
                        name="description"
                        value={damage.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cost:</label>
                    <input
                        type="number"
                        name="cost"
                        value={damage.cost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <div>
                    <label>Repair Date:</label>
                    <input
                        type="date"
                        name="repairDate"
                        value={damage.repairDate}
                        onChange={handleChange}
                    />
                </div>

                {/* Hidden fields to store carId and subscriptionId */}
                <input type="hidden" name="carId" value={damage.carId} />
                <input type="hidden" name="subscriptionId" value={damage.subscriptionId} />

                <button type="submit">Update Damage</button>
            </form>
        </div>
    );
}

export default UpdateDamage;
