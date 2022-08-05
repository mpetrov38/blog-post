import './profile.css';
import imgSrc from "../../images/profile.jpg";
import { useEffect, useState, useContext } from 'react';
import {UserAuth} from '../../contexts/authContext';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
    const {user,logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try{
            await logout();
            navigate('/')
            console.log("logged out")
        } catch(err){
            console.log(err.message);
        }
    }

   
    return (
        <section id="viewPostDetails">
            <div className="profile">
                <img src={imgSrc} alt="default user" />
                <h3>User Info:{}</h3>
                <div className="flex">
                    <p>Email: </p>
                    <p>{user && user.email}</p>
                </div>
                <div className="flex">
                    <p>Posts: </p>
                    <p>{}</p>
                </div>
                <button className="delete">Delete Profile</button>
                <button onClick={handleLogout} className="logout">Logout</button>
            </div>
        </section>
    );
};

export default Profile;