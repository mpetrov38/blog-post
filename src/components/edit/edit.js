import { useEffect, useState, } from 'react';
import './edit.css';
import EditError from '../editError/editError';

const Edit = () => {
    return (
        <section id="viewAddPost">
            <h2>Edit existing post</h2>
            <form id="formAddPost" >
                <label htmlFor="post">Post name:</label>
                <input type="text" id="post" name="post" defaultValue="" />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description"  />
                <label htmlFor="imgUrl">Image:</label>
                <input type="text" id="imgUrl" name="imgUrl"  />
                {/* <EditError className="input-error"></EditError> */}
                <input type="submit" className="edit" value="Add" />
            </form>
        </section>
    );
};

export default Edit;
