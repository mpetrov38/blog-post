import './register.css'
import { useState,useContext } from 'react';
import { UserAuth } from '../../contexts/authContext';
import {Link , useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../db/db-config"
import InputError from '../registerError/registerError'



const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [rePassword,setRePassword] = useState("");
    const [error,setError] = useState("");
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.length < 6) {
            return setError('email must be atleast 6 chars')
        }
        setError('');
        try {
         await createUser(email, password);
         navigate('/')
        }
        catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    return (
        <section id="viewRegister">
            <h2>Create your account:</h2>
            <form id="formRegister" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" 
                onChange={(event) => {
                    setEmail(event.target.value);
                }} 
                />
                {error ? <InputError>{error}</InputError> : null}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" 
                onChange={(event) => {
                    setPassword(event.target.value);
                }} 
                />
                <label htmlFor="rePassword">Repeat Password:</label>
                <input type="password" id="rePassword" name="rePassword" placeholder="Repeat Password" 
                onChange={(event) => {
                    setRePassword(event.target.value);
                }} 
                />
                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    );
}


export default Register;
