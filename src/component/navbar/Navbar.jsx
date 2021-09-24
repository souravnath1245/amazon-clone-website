import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
            <a href="#" class="nav-logo">ema-john</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Shop</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Order Review</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Manage Inventory here</a>
                </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;