import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWallet } from '@fortawesome/free-solid-svg-icons'
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';



const Orders = () => {
    const cart= useLoaderData();
    const [saveCart,setSaveCart]=useState(cart)
   
   const handleremoveid =(id)=>{
    const remaining = saveCart.filter( product=>product.id !==id)
    setSaveCart(remaining);
    removeFromDb(id);
}
    // const clearShoppingCart= ()=>{
    //     setSaveCart([]);
    //     deleteShoppingCart();
    const clearShoppingCart=()=>{
        setSaveCart([]);
        deleteShoppingCart();
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
        <Cart 
        clearShoppingCart={clearShoppingCart}

         cart={saveCart}
         >
            <Link className='link-proceed' to='/checkout'>
                <button className='btn-proceed'>Proceed Checkout
                <FontAwesomeIcon icon={faWallet} /></button>
                
            </Link>
            
         </Cart>
        </div>
        

        </div>
        
    );
};

export default Orders;<h1>order page</h1>