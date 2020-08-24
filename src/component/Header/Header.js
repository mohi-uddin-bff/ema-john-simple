import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="nav-bar">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
            <div className="search-area">
                <input type="text" placeholder="type here to search"/>
            </div>
        </div>
    );
};

export default Header;