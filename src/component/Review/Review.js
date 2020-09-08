import React from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState(false);
    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
        setOrder(true);
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const cartKey = Object.keys(savedCart);
        const reviewProduct = cartKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(reviewProduct);
    }, [])
    // let thanksImage;
    // if (order) {
    //     thanksImage = <img src={happyImage} alt=""/>
    // }
    return (
        <div className="customer-area">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} product={pd}></ReviewItem>)
                }
                { order && <img src={happyImage} alt=""/> }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;