import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='m-5 p-5 text-center vh-100'>
            <h3>404.. This page is not found!</h3>
            <Link to='/'>GO TO HOME</Link>
        </div>
    );
};

export default Error;