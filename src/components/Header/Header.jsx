import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const Header = () => {
    const {user,logOUt}= useContext(AuthContext)
    console.log(user);
    const handleSignOut =()=>{
        logOUt()
        .then(result =>{})
        .catch (error=> console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
                <a href="/signup">Sign Up</a>
                {
                    user && <span className='text-white'>welcome{user.email} <Link onClick={handleSignOut}>LogOut</Link> </span>
                }
            </div>
        </nav>
    );
};

export default Header;