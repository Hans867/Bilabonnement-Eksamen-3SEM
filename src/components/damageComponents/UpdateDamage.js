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
    });

    useEffect(() => {
        axios.get(`http://localhost:3737/api/damages/${id}`) // Update the endpoint to match your backend URL
            .then(response => setDamage(response.data))
            .catch(error => console.error('Error fetching damage:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3737/api/damages/${id}`, damage) // Update the endpoint to match your backend URL
            .then(() => navigate('/list-damages')) // Assuming you have a route for listing damages
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
                        min="0"
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
                <button type="submit">Update Damage</button>
            </form>
        </div>
    );
}

export default UpdateDamage;
