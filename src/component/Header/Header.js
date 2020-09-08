import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <nav className="nav-bar">
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
            <div className="search-area">
                <input type="text" placeholder="type search here"/> <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    );
};

export default Header;