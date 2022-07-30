import { React,  } from 'react';
import './addPost.css'

const AddPost = () => {

    return (
        <section id="viewAddPost">
            <h2>Add new Post</h2>
            <form id="formAddPost" >
                <label htmlFor="post">Post name:</label>
                <input type="text" id="post" name="post" placeholder="post name" />
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
