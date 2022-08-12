import './home.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth'; 
import { db } from "../../db/db-config";




const Home = () => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const auth = getAuth();
    onAuthStateChanged(auth,(user)=>{
    })
    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getPosts();
      }, []);
      return (
        <section id="viewCatalog" className="background-img">
            <div className="added-posts">
            {postLists.length ? postLists.map((post, index) => { return (
                    <Link to={`/details/${post.id}`} key={index} className="added-post">
                        <img src={post.imgUrl} alt="" className="picture-added-post" />
                        <h3>{post.postName}</h3>
                        <h4>Post author: {post.authorName}</h4>
                        <h4>Likes: {post.likes}</h4>
                    </Link>
                )}) :
                    <div className="guest">
                        { !postLists ? "Loading..." : "There are still no Posts created..." }
                    </div>
                }
            
            </div>
        </section>
    );
}

export default Home;

