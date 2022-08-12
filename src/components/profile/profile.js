import './profile.css';
import imgSrc from "../../images/profile.jpg";
import { useEffect, useState, useContext } from 'react';
import {UserAuth} from '../../contexts/authContext';
import {useNavigate} from 'react-router-dom';
import { db , auth } from "../../db/db-config";
import { getAuth ,deleteUser,} from 'firebase/auth';
import { getDocs, collection, deleteDoc, doc  } from "firebase/firestore";


const Profile = () => {
    const {user} = UserAuth();
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const navigate = useNavigate();
    const deleteHandler = () => {
        const authetication2 = getAuth();
        const userToDelete = authetication2.currentUser;
    deleteUser(userToDelete).then(()=>{
        localStorage.clear();
        navigate('/register');
    })
    };

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        
        getPosts();
      }, []);
      const userId = auth.currentUser.uid;
      const userPosts = postLists.filter(p=>p.authorId == userId);
      console.log(userPosts)
    return (
        <section id="viewPostDetails">
            <div className="profile">
                <img src={imgSrc} alt="default user" />
                <h3>Profile Info:</h3>
                <div className="flex">
                    <p>Email: </p>
                    <p>{user && user.email}</p>
                </div>
                <div className="flex">
                    <p>Posts: </p>
                    {userPosts.map((x)=> 
                    <>
                    <p >{x.postName}, </p>
                    </>
                    )}
                </div>
                <button className="delete" onClick={deleteHandler}>Delete Profile</button>
            </div>
        </section>
    );
};

export default Profile;