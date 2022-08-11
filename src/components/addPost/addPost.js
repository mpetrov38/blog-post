import { React, useState , useEffect} from 'react';
import './addPost.css'
import {addDoc, collection} from "firebase/firestore"
import {db, auth} from "../../db/db-config"
import {useNavigate} from 'react-router-dom'


const AddPost = () => {
    const [title,setTitle] = useState('');
    const [postText,setPostText] = useState('');
    const [image,setImage] = useState('');
    let navigate = useNavigate();
    const postsCollectionRef = collection(db, 'posts');
    const createPost = async (e) => {
        e.preventDefault();
        try {
            await addDoc(postsCollectionRef, {postName: title,
                description: postText,
                imgUrl: image,
                author: 
                {
                name: auth.currentUser.email,
                id: auth.currentUser.uid
                }});
                navigate('/');
        } catch (error) {
            console.error(error)
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
            </form>
        </section>
    );
};

export default AddPost;
