import { Link } from 'react-router-dom';
import './headerWhenNotLogged.css'

const HeaderWhenNotLogged = () => {
    return (
        <nav>
            <div className="left-container">
                <ul>
                    <li><Link className="nav-btn" to="/">Home</Link></li>
                    <div className="nav-btn">Login</div>
                    <div className="nav-btn">Register</div>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderWhenNotLogged;
