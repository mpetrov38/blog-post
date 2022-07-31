import './register.css'
import InputError from '../registerError/registerError';
import { useState,useContext } from 'react';

const Register = () => {
    return (
        <section id="viewRegister">
            <h2>Create your account:</h2>
            <form id="formRegister">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" />
                {/* <InputError>{""}</InputError> */}
                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    );
}

export default Register;
