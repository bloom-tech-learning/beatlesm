import React from 'react';
import { Link } from 'react-router-dom';

import '../CSS/Header.css';

const Header = () => {


    return(
        <nav className="nav-bar">
            <div className="left-links">
                {/* <Link className="link" to='/'>Home</Link>                 */}
            </div>
            <div className="right-links">
                <Link className="link" to='/signup'>Signup</Link>
                <Link className="link" to='/login'>Login</Link>                
            </div>
        </nav>
    )
}

export default Header;