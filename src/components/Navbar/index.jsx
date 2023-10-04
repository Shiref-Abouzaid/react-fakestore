import React from 'react'
import './index.scss'
import {Container } from 'react-bootstrap';
export default function Navbar() {
    return (
<nav className="navbar">
    <div className="brand-logo">ShopName</div>
    
    <div className="nav-links">
        <div className="icon-with-count">
            <span className="icon">🛒</span>
            <span className="count">0</span>
        </div>
        <div className="icon-with-count">
            <span className="icon">❤️</span>
            <span className="count">0</span>
        </div>
        <a href="/cart">Cart</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/profile">Profile</a>
    </div>
</nav>

    );
}
