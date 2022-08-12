import { useEffect, useState } from "react";
import "./details.css";
import { Link, useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteDoc, getDoc, doc, setDoc } from "firebase/firestore";
import { db ,auth } from "../../db/db-config";

const Details = () => {
  const [post,setPost] = useState({});
  const [likes,setLikes]= useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = auth.currentUser.uid;
  
  const getPost = async () => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      setPost(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);
  const likePost = async () =>{
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const data = { ...docSnap.data(), likes: docSnap.data().likes + 1 };
    setDoc(docRef, data)
    .then((docRef) => {
      navigate(`/`);
    })
    .catch((error) => {
    });
    setLikes(docSnap.data().likes);
  }

  const deletePost = () => {
    const docRef = doc(db, "posts", id);
    deleteDoc(docRef)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section id="viewpost Details">
      <h2>Details</h2>
      <div className="post-ticket">
        <div className="post-left">
          <img src={post.imgUrl} alt="fa" />
        </div>
        <div className="post-right">
          <div>
            <h3>{post.postName}</h3>
          </div>
          <div>{}</div>
          <p><span >Post creator: {post.authorName}</span></p> 
          {currentUser == post.authorId ? <Link to={`/edit/${id}`} className="edit">Edit</Link> : null} 
          {currentUser == post.authorId ?<button className="button, remove" onClick={deletePost}>Delete</button> : null} 
          <p>
            <span className="green">Description: {post.description}</span>
          </p>
          <button onClick={likePost} className="edit" >Likes: {post.likes}</button>
        </div>
      </div>
    </section>
  );
};

export default Details;
