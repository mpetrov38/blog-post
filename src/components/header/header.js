import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="left-container">
        <ul>
          <div href="/" className="nav-btn">Home</div>
          <div href="/addPost" className="nav-btn">Add Post</div>
        </ul>
      </div>
      <div className="right-container">
        <div href="/profile" className="nav-btn">Profile</div>
        <div href="" className="nav-btn">Logout</div>
      </div>
    </nav>
  );
};
export default Header;
