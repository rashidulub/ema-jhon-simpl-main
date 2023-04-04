import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Orders = () => {
    const cart= useLoaderData();
   
    return (
        <div className="shop-container">
            <div className='review-container'>
            {
                cart.map(product=><Review
                key={product.id}
                product={product}
                ></Review>)
            }
            </div>
        <div className="cart-container">
        <Cart cart={cart}></Cart>
        </div>
        

        </div>
        
    );
};

export default Orders;<h1>order page</h1>