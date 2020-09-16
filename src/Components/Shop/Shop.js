import React from 'react';
import { addToCart } from '../../Redux/Action/CartAction';
import Product from '../Product/Product';

const Shop = () => {

    const products = [
        { name: 'Lenovo Laptop', id: 1 },
        { name: 'Asus Laptop', id: 2 },
        { name: 'Dell Laptop', id: 3 },
        { name: 'HP Laptop', id: 4 },
        { name: 'Toshiba Laptop', id: 5 }
    ]

    return (
        <div>
            <h2>This is shop</h2>
            {
                products.map(pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);