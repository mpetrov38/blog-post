import './header.css';
import {Link } from 'react-router-dom';

const Header =  () => {

    return (
        <nav>
            <div className="left-container">
                <ul>
                    {/* <li><Link to="/" className="nav-btn">Home</Link></li>
                    <li><Link to="/add" className="nav-btn">Add Hotel</Link></li> */}
                </ul>
            </div>
            <div className="right-container">
                {/* <Link to="/profile" className="nav-btn">Profile</Link> */}
                <div className="nav-btn" >Logout</div>
            </div>
        </nav>
    );
};
export default Header;
