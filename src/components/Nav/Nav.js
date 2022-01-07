import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import './Nav.css'

const Nav = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">G-Tour</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto d-flex align-items-center">
                            <li class="nav-item">
                                <Link className='line mx-2' to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='line mx-2' to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='line mx-2' to="/gallery">Gallery</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='line mx-2'>FAQs</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='line mx-2'>Contact Us</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    pages
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {
                                user?.email ?
                                    <button className="dash-btn mx-2" onClick={logout}>Logout</button> :
                                    <Link className="dash-link" to="/login"><button className="dash-btn">Login</button></Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;