import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    // Check if current location is Admin Signup page
    const isOnAdminSignupPage = location.pathname === '/AdminSignUp';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-5">
            <div className="container">
                <NavLink to="/" className='navbar-brand'></NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link navbar-brand fs-3" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/about" className="nav-link navbar-brand fs-3">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" className="nav-link navbar-brand fs-3">Contact</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to="/petList" className="nav-link navbar-brand fs-3">Pet List</NavLink>
                        </li>
                        {isOnAdminSignupPage && (
                            <li className='nav-item'>
                                <NavLink exact to="/Addpets" className="nav-link navbar-brand fs-3">Add NewPets</NavLink>
                            </li>
                        )}
                        <li className='nav-item'>
                            <NavLink exact to="/LoginSignup" className="nav-link navbar-brand"></NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact to="/AdminSignUp" className="nav-link navbar-brand bg-light text-danger px-3 py-2 rounded fs-4">ADMIN SIGNUP</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
