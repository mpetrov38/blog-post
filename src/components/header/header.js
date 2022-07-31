import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className="nav-btn">Logout</div>
      </div>
    </nav>
  );
};
export default Header;
