import React from 'react'
import {Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className="pagenotfound">
            <h1>error 404</h1>
            <p>Page not found</p>
            <br/>
            <Link to='/' className="goBack">Back to Home</Link>
        </div>
    )
}

export default PageNotFound;
