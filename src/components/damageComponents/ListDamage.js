import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ListDamage() {
    const history = useHistory();
    const [damages, setDamages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/api/damages') // Update the endpoint to match your backend URL
            .then(response => setDamages(response.data))
            .catch(error => console.error('Error fetching damages:', error));
    }, []);

    const handleDetails = (id) => {
        history.push(`/damage/${id}`);
    };

    const handleEdit = (id) => {
        history.push(`/edit-damage/${id}`);
    };

    const handleDelete = (id) => {
        history.push(`/delete-damage/${id}`);
    };

    const handleAddNew = () => {
        history.push('/create-damage');
    };

    return (
        <div>
            <h2>Damage List</h2>
            <ul>
                {damages.map(damage => (
                    <li key={damage.id}>
                        {damage.carDamage} -
                        <button onClick={() => handleDetails(damage.id)}>Details</button>
                        <button onClick={() => handleEdit(damage.id)}>Edit</button>
                        <button onClick={() => handleDelete(damage.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddNew}>Add New Damage</button>
        </div>
    );
}

export default ListDamage;
