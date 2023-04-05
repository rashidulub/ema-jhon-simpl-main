import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';



const Orders = () => {
    const cart= useLoaderData();
    const [saveCart,setSaveCart]=useState(cart)
   
   const handleremoveid =(id)=>{
    const remaining = saveCart.filter( product=>product.id !==id)
    setSaveCart(remaining);
    removeFromDb(id);
}
    return (
        <div className="shop-container">
            <div className='review-container'>
            {
                saveCart.map(product=><Review
                key={product.id}
                product={product}
                handleremoveid={handleremoveid}
                ></Review>)
            }
            </div>
        <div className="cart-container">
        <Cart cart={saveCart}></Cart>
        </div>
        

        </div>
        
    );
};

export default Orders;<h1>order page</h1>