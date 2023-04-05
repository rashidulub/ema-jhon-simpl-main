import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart,clearShoppingCart,children}) => {
    console.log(cart);
    let total =0;
    let totalShipping=0;
    let quantity=0;
    for (const product of cart){
        product.quantity=product.quantity||1;
        total =total+ product.price *product.quantity;
        totalShipping = totalShipping+product.shipping;
        quantity=quantity+product.quantity;
    }
    const text = total*7/100;
    const grandTotal = total+totalShipping+text;

    return (
        <div className='cart'>
            <h4 className='h'>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping.toFixed(2)}</p>
                <p>Tax:${text}</p>
                <h6 className='grand'>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={clearShoppingCart} className='cart-clear-container'>
                    <span>cart clear</span>
                    <FontAwesomeIcon icon={faTrashAlt} />

                </button>
                {children}
        </div>
    );
};

export default Cart;