import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Bilabonnement App</h1>
            <nav>
                <ul>
                    <li><Link to="/cars">Cars</Link></li>
                    <li><Link to="/damages">Damages</Link></li>
                    <li><Link to="/subscriptions">Subscriptions</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
