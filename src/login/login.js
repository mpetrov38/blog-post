import './login.css'
import { withRouter } from 'react-router-dom';
import { useState, useContext } from 'react';
import LoginError from '../loginError/loginError';

const Login = () => {

    return (
        <section id="viewLogin">
            <h2>Login:</h2>
            <form id="formLogin" >
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password" />
                {/* <LoginError className="input-error"></LoginError> */}
                <input type="submit" className="login" value="Login" />
            </form>
        </section>
    );


};

export default Login;