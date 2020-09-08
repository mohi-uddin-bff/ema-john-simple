import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
    const firstData = fakeData.slice(0, 12);
    const [data, setData] = useState(firstData);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const cartKey = Object.keys(savedCart);
        const product = cartKey.map(existingKey => {
            const priviousCart = fakeData.find(cart => cart.key === existingKey);
            priviousCart.quantity = savedCart[existingKey];
            return priviousCart;        
        })
        setCart(product);
    }, [])
    
    const addToCart = (product) => {
        const toBeAdded = product.key;
        const sameCart = cart.find(pd => pd.key === toBeAdded);
        let count = 1;
        let newCart;
        if (sameCart) {
            count = sameCart.quantity + 1;
            sameCart.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAdded);
            newCart = [...others, sameCart];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }
    
    return (
        <div className="customer-area">
            <div className="product-container">
                <img src="" alt=""/>
                <div>
                    {
                        data.map(item => <Product showBtn={true} key={item.key} product={item} addToCart={addToCart}></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review"><button className= "btn">Review item</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;