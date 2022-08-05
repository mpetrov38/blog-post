import { React, useState , useEffect} from 'react';
import './addPost.css'
import {collection , getDocs} from "firebase/firestore"

const AddPost = () => {
    const onHotelSubmit = (e) => {
        e.preventDefault();
       
    }
    return (
        <section id="viewAddPost">
            <h2>Add new Post</h2>
            <form id="formAddPost" onSubmit={onHotelSubmit}>
                <label htmlFor="postName">Post name:</label>
                <input type="text" id="postName" name="postName" placeholder="post name" />
                <label htmlFor="description">description:</label>
                <input type="text" id="description" name="description" placeholder="description" />            
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" placeholder="https://" />
                <input type="submit" className="create" value="Add" />
            </form>
        </section>
    );
};

export default AddPost;
