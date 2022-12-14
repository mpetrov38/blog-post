import { Link } from 'react-router-dom';
import './headerWhenNotLogged.css'

const HeaderWhenNotLogged = () => {
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><Link className="nav-btn" to="/">Home</Link></li>
                    <li><Link className="nav-btn" to="/login">Login</Link></li>
                    <li><Link className="nav-btn" to="/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderWhenNotLogged;
