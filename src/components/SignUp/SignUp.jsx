import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

  
const SignUp = () => {
        const [error, setError]= useState('')
        const {createUser} = useContext(AuthContext)
    
    const handlesignup = event=>{

    
        event.preventDefault ()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.password.value;
    
        console.log(email,password,confirm);
       
        setError('')
        if(password !== confirm){
            setError('password did not match')
            return
        }
        else if(password.length <6){
            setError('password mast be 6 charecter')
            return
        }
       

        createUser(email,password)
        .then (result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch(error=>{
          console.log(error);
          setError(error.message)
        })
    
    }


    return (
        <div className="form">
        <div>
            <h1 className='signIn'>Sign Up</h1>
        </div>
 <form onSubmit={handlesignup}>
   <div className="input-container">
     <label htmlFor='email'>Email </label> 
     <input type="email" name="email" id='' required />
    
   </div>
   <div className="input-container">
     <label htmlFor='password'>Password </label> 
     <input type="password" name="password" id='' required />
    
   </div>
   <div className="input-container">
     <label htmlFor='confirm'>Confirm Password </label> 
     <input type="password" name="confirm" id='' required />
    
   </div>
   
   <input className='btn-submit' type="submit" value='Sign Up' />
   <p className='messig'><small>Already have an account?? <Link className='orange' to='/login' >Login</Link></small></p>
   <p className='error'>{error}</p>
  
   
  
 </form>
</div>
    );
};

export default SignUp;