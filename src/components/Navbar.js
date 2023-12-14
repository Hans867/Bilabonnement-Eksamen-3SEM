import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        // Navigate to the Home page when the logo is clicked
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={handleLogoClick}>
                <img src={"https://i.gyazo.com/3a2b47a272cfb9a4bff28f1ff2d79a52.png"} alt="Company Logo" />
            </div>
            <ul className="navbar-list">
                <li><Link to="/cars" className="navbar-link">Cars</Link></li>
                <li><Link to="/damages" className="navbar-link">Damages</Link></li>
                <li><Link to="/subscriptions" className="navbar-link">Subscriptions</Link></li>
                <li><Link to="/customers" className="navbar-link">Customers</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
