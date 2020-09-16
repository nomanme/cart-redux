import React from 'react';

const Product = (props) => {
    const { name, id } = props.product;
    return (
        <div style={{ border: "2px solid crimson", margin: "10px 10px", padding: "5px" }}>
            <h3>{name}</h3>
            <button>add to cart</button>
        </div>
    );
};

export default Product;