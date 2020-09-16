import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;

    return (
        <div style={{ border: "2px solid crimson", margin: "10px 10px", padding: "5px" }}>
            <h5>{product.name}</h5>
            <button
                onClick={() => addToCart(product.id, product.name)}
            >add to cart</button>
        </div>
    );
};

export default Product;