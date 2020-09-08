import React from 'react';

const NotFound = () => {
    const style = {
        textAlign: "center",
        color: "red"
    }
    return (
        <div style={style}>
            <h3>Sorry, page not found</h3>
            <p>Try again later</p>
        </div>
    );
};

export default NotFound;