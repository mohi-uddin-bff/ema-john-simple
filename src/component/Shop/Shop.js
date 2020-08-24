import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const firstTenData = fakeData.slice(0, 10);
    const [data, setData] = useState(firstTenData);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        setCart([...cart, product])
    }
    const total = cart.reduce((item, product) => item + product.price, 0);
    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 12) {
        shipping = 7.77
    }
    else if (total > 0) {
        shipping = 12.89
    }
    const sum = (total + shipping).toFixed(2);
    const tax = (sum / 8).toFixed(2);
    const grandTotal = Number(sum) + Number(tax);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    data.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product> )
                }
            </div>
            <div className="cart-container">
                <h3 className="alignment">Order Summery</h3>
            <p className="alignment">Items Ordered: {cart.length}</p>
                <p className="placing">
                    <small>Items: $ {total} </small> <br/>
                    <small>Shipping and Handling: $ {shipping} </small> <br/>
                    <small>Total before tax: $ {sum} </small> <br/>
                    <small>Estimated tax: $ {tax} </small>
                </p>
                <h3 style={{lineHeight: "0", color: "#b12704"}} className="placing">Order total:      ${grandTotal} </h3>
                <button className="btn placing">Review your order</button>
            </div>
        </div>
    );
};

export default Shop;