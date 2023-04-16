import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="form">
            <div>
                <h1 className='signIn'>Login</h1>
            </div>
     <form>
       <div className="input-container">
         <label>Email </label> 
         <input type="email" name="email" required />
        
       </div>
       <div className="input-container">
         <label>Password </label> 
         <input type="password" name="password" required />
        
       </div>
       
       
       <input className='btn-submit' type="submit" value='Login' />
       <p className='messig'><small>New to Ema-john? <Link className='orange' to='/signup' >Create New Account</Link></small></p>
      
     </form>
   </div>
    );
};

export default Login;