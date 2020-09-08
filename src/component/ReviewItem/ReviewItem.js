import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, price, key } = props.product;
    return (
        <div>
            <div>
                <h4 className="item-title"> {name} </h4>
                <p> Quantity: {quantity} </p>
                <p><small> $ {price} </small></p>
                <button className="btn" onClick={() => props.removeProduct(key)}>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;