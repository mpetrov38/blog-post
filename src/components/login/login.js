import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import LoginError from '../loginError/loginError';
import { UserAuth } from '../../contexts/authContext';

const Login = ({setIsAuth}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate= useNavigate();
    const {login} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email,password);
            localStorage.setItem('uid', login.uid);
            localStorage.setItem("setIsAuth", true);
            setIsAuth(true);
            navigate('/');
        } catch (e) {
            if (!localStorage.getItem('uid')) {
                setError('Wrong username or password!!!');
                return;
            }
        }
    }

    return (
        <section id="viewLogin" >
            <h2>Login:</h2>
            <form id="formLogin" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" 
                onChange={(event) => {
                    setEmail(event.target.value);
                }} 
                />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your Password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }} 
                 />
                <LoginError className="input-error">{error}</LoginError>
                <input type="submit" className="login" value="Login" />
            </form>
        </section>
    );


};

export default Login;