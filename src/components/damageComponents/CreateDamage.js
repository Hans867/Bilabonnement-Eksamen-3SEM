import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateDamage() {
    const navigate = useNavigate();
    const [newDamage, setNewDamage] = useState({
        carDamage: '',
        reparationCost: 0,
        cleaningCost: 0,
        lateReturnCost: 0
        // Add more fields as needed
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3737/api/damages', newDamage) // Update the endpoint to match your backend URL
            .then(() => navigate('/list-damages')) // Assuming you have a route for listing damages
            .catch(error => console.error('Error creating damage:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewDamage({ ...newDamage, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Create New Damage</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Car Damage:</label>
                    <input
                        name="carDamage"
                        value={newDamage.carDamage}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Reparation Cost:</label>
                    <input
                        type="number"
                        name="reparationCost"
                        value={newDamage.reparationCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <div>
                    <label>Cleaning Cost:</label>
                    <input
                        type="number"
                        name="cleaningCost"
                        value={newDamage.cleaningCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                <div>
                    <label>Late Return Cost:</label>
                    <input
                        type="number"
                        name="lateReturnCost"
                        value={newDamage.lateReturnCost}
                        onChange={handleChange}
                        min=""
                    />
                </div>
                {/* Add more input fields as needed */}
                <button type="submit">Create Damage</button>
            </form>
        </div>
    );
}

export default CreateDamage;
