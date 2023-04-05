import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
     
    
    useEffect(() => {
        const storeCart = getShoppingCart();
        const addProduct = [];
        for (const id in storeCart) {
            const saveProduct = products.find(product => product.id === id);

            if (saveProduct) {
                const quantity = storeCart[id]
                saveProduct.quantity = quantity
                addProduct.push(saveProduct);
            }

        }
        setCart(addProduct);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const clearShoppingCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                clearShoppingCart={clearShoppingCart} 
                cart={cart}>
                    <Link className='link-proceed' to='Orders'>
                    <button className='btn-proceed'>Review Orders
                    <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    </Link>
                    
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;