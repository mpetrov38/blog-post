import { React, useState , useEffect} from 'react';
import './addPost.css'
import LoginError from '../loginError/loginError';
import {addDoc, collection} from "firebase/firestore"
import {db, auth} from "../../db/db-config"
import {useNavigate} from 'react-router-dom'


const AddPost = () => {
    const [title,setTitle] = useState('');
    const [postText,setPostText] = useState('');
    const [image,setImage] = useState('');
    const [error,setError] = useState('');
    let navigate = useNavigate();
    const postsCollectionRef = collection(db, 'posts');
    
    const createPost = async (e) => {
        e.preventDefault();
        try {
            await addDoc(postsCollectionRef,
                {
                postName: title,
                description: postText,
                imgUrl: image,
                authorId: auth.currentUser.uid,
                authorName: auth.currentUser.email,
                });
                if (title.length === 0 || postText.length === 0||image.length === 0) {
                    setError('All fields are required');
                    return;
                }
                navigate('/');
        } catch (error) {
            
        }
    }
    
    
    return (
        <section id="viewAddPost">
            <h2>Add new Post</h2>
            <form id="formAddPost" onSubmit={createPost}>
                <label htmlFor="postName">Post name:</label>
                <input type="text" id="postName" name="postName" placeholder="post name" 
                    onChange={(event) => {
                    setTitle(event.target.value);
                }}  
                />
                <label htmlFor="description">description:</label>
                <input type="text" id="description" name="description" placeholder="description"
                    onChange={(event) => {
                    setPostText(event.target.value);
                }}  
                />            
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl" placeholder="https://"
                    onChange={(event) => {
                    setImage(event.target.value);
                }}  
                />

                <input type="submit" className="create" value="Add" />
                <LoginError className="input-error">{error}</LoginError>
            </form>
        </section>
    );
};

export default AddPost;
