import { useEffect, useState, Fragment, useContext } from "react";
import "./details.css";
import { Link, useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import { deleteDoc, getDoc, doc } from "firebase/firestore";
import { db,auth } from "../../db/db-config";

const Details = () => {
  let [hotel, setHotel] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
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

  const test3 = () => {
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
          <img src={hotel.imgUrl} alt="fa" />
        </div>
        <div className="post-right">
          <div>
            <h3>{hotel.postName}</h3>
          </div>
          <div>{}</div>
          <p><span >Post creator: {auth.currentUser.displayName}</span></p> 

          <Link to={`/edit/${id}`} className="edit">
            Edit
          </Link>
          <button className="button, remove" onClick={test3}>
            Delete
          </button>

          <p>
            <span className="green">Description: {hotel.description}</span>
          </p>
          <Link to="/book" className="book" >Like</Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
