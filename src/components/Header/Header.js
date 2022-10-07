import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav style={{marginTop: '10px'}}>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;