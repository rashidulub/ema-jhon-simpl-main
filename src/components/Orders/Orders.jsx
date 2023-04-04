import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products= useLoaderData();
    console.log(products);
    return (
        <div className="shop-container">
            <div>
            <h1>order page: {products.length} :</h1>
            </div>
        <div className="cart-container">
        <Cart cart={([])}></Cart>
        </div>
        

        </div>
        
    );
};

export default Orders;<h1>order page</h1>