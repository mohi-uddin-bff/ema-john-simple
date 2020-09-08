import React from 'react';

const Cart = (props) => {
    const style = {
        fontWeight : "600"
    }
    const cart = props.cart;
    const sum = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0);
    const price = Number(sum);
    let shipping = 0;
    if (price > 100) {
        shipping = 0;
    }
    else if (price > 35) {
        shipping = 8;
    }
    else if (price > 0) {
        shipping = 12;
    }
    const tax = (price + shipping) / 15;
    const total = tax + shipping + price;
    
    return (
        <div>
            <h3 style={{textAlign: "center"}}>item: {cart.length} </h3>
            <p style= {style}>price: $ {price.toFixed(2)} <br/>
            shipping: $ {shipping} <br/>
            tax: $ {tax.toFixed(2)} <br/>
            </p>
            <p style= {style}>Total: $ {total.toFixed(2)} </p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;