import { useEffect, useState } from "react";
import "./edit.css";
import EditError from "../editError/editError";
import { useParams, useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../db/db-config";

const Edit = () => {
  let [hotel, setHotel] = useState({});
  const { id } = useParams();
  const [error,setError] = useState('');
  const nav = useNavigate();
  const test = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      setHotel(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    test();
  }, [id]);



  const test2 = (e) => {
    e.preventDefault();
    const postName = e.target.post.value;
    const description = e.target.post.value;
    const imageUrl = e.target.imgUrl.value;

    const data = {
      postName,
      description,
      imageUrl,
    };
    if (postName.length === 0) {
      setError('Post name must be atlest 1 char long');
      return;
  } else if (description.length === 0) {
      setError('Description must be atlest 1 char long');
      return;
  }  else if (imageUrl.length === 0) {
      setError('ImageUrl must be atlest 1 char');
      return;
  }

    const docRef = doc(db, "posts", id);
    setDoc(docRef, data)
      .then((docRef) => {
        // navigate to details details/id
        nav(`/details/${id}`)
      })
      .catch((error) => {
       setError('This post does not exist');
      });
  };

  return (
    <section id="viewAddPost">
      <h2>Edit existing post</h2>
      <form id="formAddPost" onSubmit={test2}>
        <label htmlFor="post">Post name:</label>
        <input
          type="text"
          id="post"
          name="post"
          defaultValue={hotel.postName}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={hotel.description}
        />
        <label htmlFor="imgUrl">Image:</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          defaultValue={hotel.imgUrl}
        />
        <EditError className="input-error">{error}</EditError>
        <input type="submit" className="edit" value="Add" />
      </form>
    </section>
  );
};

export default Edit;
