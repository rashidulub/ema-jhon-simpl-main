import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
  const [show, setShow] = useState(false)


  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location);

  const from = location.state?.from?.pathname || '/';

  const handleSingIn = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset()
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <div className="form">
      <div>
        <h1 className='signIn'>Login</h1>
      </div>
      <form onSubmit={handleSingIn}>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />

        </div>
        <div className="input-container">
          <label>Password </label>
          <input type={show ? "text" : "password"} name="password" required />
          <p onClick={() => setShow(!show)}><small>
            {
              show ?<span>Hide Password</span> :<span>Show Password</span>
            }
          </small></p>

        </div>


        <input className='btn-submit' type="submit" value='Login' />
        <p className='messig'><small>New to Ema-john? <Link className='orange' to='/signup' >Create New Account</Link></small></p>

      </form>
    </div>
  );
};

export default Login;