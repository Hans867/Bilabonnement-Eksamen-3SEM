import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListDamage() {
    const [damages, setDamages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3737/api/damages') // Update the endpoint to match your backend URL
            .then(response => setDamages(response.data))
            .catch(error => console.error('Error fetching damages:', error));
    }, []);

    return (
        <div>
            <h2>Damage List</h2>
            <ul>
                {damages.map(damage => (
                    <li key={damage.id}>
                        {damage.carDamage} -
                        <Link to={`/damage/${damage.id}`}>Details</Link>
                        <Link to={`/edit-damage/${damage.id}`}>Edit</Link>
                        <Link to={`/delete-damage/${damage.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create-damage">Add New Damage</Link>
        </div>
    );
}

export default ListDamage;
