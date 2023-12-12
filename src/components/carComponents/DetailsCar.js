import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailsCar() {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3737/cars/${id}`)
            .then(response => {
                setCar(response.data);
            })
            .catch(error => console.error('Error fetching car:', error));
    }, [id]);

    if (!car) return <div>Loading...</div>;

    return (
        <div>
            <h2>{car.brand}</h2>
            <p>Purchase Price: {car.purchasePrice}</p>
            <p>Fuel: {car.carFuel}</p>
        </div>
    );
}

export default DetailsCar;
