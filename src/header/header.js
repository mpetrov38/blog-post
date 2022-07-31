import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="left-container">
        <ul>
          <div className="nav-btn">Home</div>
          <div className="nav-btn">Add Post</div>
        </ul>
      </div>
      <div className="right-container">
        <div className="nav-btn">Profile</div>
        <div className="nav-btn">Logout</div>
      </div>
    </nav>
  );
};
export default Header;
