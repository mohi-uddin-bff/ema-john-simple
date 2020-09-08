import React from 'react';
import './product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock, key} = props.product;
    return (
        <div className="item-details">
            <img src={img} alt=""/>
            <div>
                <h4 className="item-title"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by: {seller} </small></p>
                <p> $ {price} </p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                {props.showBtn && <button onClick={() => props.addToCart(props.product)} className="btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;