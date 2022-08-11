import "./header.css";
import { Link , useNavigate} from "react-router-dom";
import {UserAuth} from '../../contexts/authContext';


const Header = (props) => {

  const {setIsAuth} = props;
  const {user,logout} = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = async () => {
    try{
      await logout();
      setIsAuth(false);
      localStorage.clear();
      navigate('/')
  } catch(err){
      console.log(err.message);
  }
  };

  return (
    <nav>
      <div className="left-container">
        <ul>
          <li><Link className="nav-btn" to="/">Home</Link></li>
          <li><Link className="nav-btn" to="/addPost">Add Post</Link></li>
        </ul>
      </div>
      <div className="right-container">
          <Link to="/profile" className="nav-btn">Profile</Link>
          <div className="nav-btn" onClick={logOutHandler}>Logout</div>
      </div>
    </nav>
  );
};
export default Header;
