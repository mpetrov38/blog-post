import './home.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../db/db-config";




const Home = () => {
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollectionRef);
          console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
                        {/* <h4>Post author: {post.author.name}</h4> */}
                    </Link>
                )}) :
                    <div className="guest">
                        { !postLists ? "Loading..." : "There are no Posts found..." }
                    </div>
                }
            
            </div>
        </section>
    );
}

export default Home;

