import './register.css'
import { useState,useContext } from 'react';
import { UserAuth } from '../../contexts/authContext';
import {Link , useNavigate} from 'react-router-dom'
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
        if (password !== rePassword) {
            return setError('Password and repeat password do not match!!!');
        }
        setError('');
        try {
         await createUser(email, password);
         navigate('/')
        }
        catch (e) {
            setError('There is already a user with that email');
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
                {error ? <InputError>{error}</InputError> : null}
                <input type="submit" className="register" value="Register" />
            </form>
        </section>
    );
}


export default Register;
