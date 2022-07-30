import './profile.css';
import { useEffect, useState, useContext } from 'react';

const Profile = () => {
   
    return (
        <section id="viewPostDetails">
            <div className="profile">
                <img src="" alt="default user" />
                <h3>User Info:</h3>
                <div className="flex">
                    <p>Email: </p>
                    <p>{}</p>
                </div>
                <div class="flex">
                    <p>Posts: </p>
                    <p>{}</p>
                </div>
                <button className="delete">Delete Profile</button>
            </div>
        </section>
    );
};

export default Profile;