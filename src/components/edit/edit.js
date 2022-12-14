import { useEffect, useState } from "react";
import "./edit.css";
import EditError from "../editError/editError";
import { useParams, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc ,updateDoc } from "firebase/firestore";
import { db } from "../../db/db-config";

const Edit = () => {
  let [post, setPost] = useState({});
  const { id } = useParams();
  const [error,setError] = useState('');
  const nav = useNavigate();
  const getDocRef = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDocRef();
  }, [id]);



  const getPost = (e) => {
    e.preventDefault();
    const postName = e.target.post.value;
    const description = e.target.description.value;
    const imgUrl = e.target.imgUrl.value;


    const data = {
      postName ,
      description,
      imgUrl,
    };
    if (postName.length === 0) {
      setError('Post name must be atlest 1 char long');
      return;
  } else if (description.length === 0) {
      setError('Description must be atlest 1 char long');
      return;
  }  else if (imgUrl.length === 0) {
      setError('ImageUrl must be atlest 1 char');
      return;
  }

    const docRef = doc(db, "posts", id);
    updateDoc(docRef,data);
    nav('/');
  };

  return (
    <section id="viewAddPost">
      <h2>Edit existing post</h2>
      <form id="formAddPost" onSubmit={getPost}>
        <label htmlFor="post">Post name:</label>
        <input
          type="text"
          id="post"
          name="post"
          defaultValue={post.postName}
        />
        <label htmlFor="description">Description:</label>
        <textarea type="text" id="description" name="description" placeholder="description" defaultValue={post.description}/>
        <label htmlFor="imgUrl">Image:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          defaultValue={post.imgUrl}
        />
        <EditError className="input-error">{error}</EditError>
        <input type="submit" className="edit" value="Add" />
      </form>
    </section>
  );
};

export default Edit;
