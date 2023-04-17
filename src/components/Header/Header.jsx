import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <Link className='me-3 text-decoration-none' to='/'>Home</Link>
            <Link className='me-3 text-decoration-none' to='/login'>Login</Link>
            <Link className='me-3 text-decoration-none' to='/register'>Register</Link>
        </div>
    );
};

export default Header;