import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import logvdo from '../../Reset password (2).mp4'
import TextField from '@mui/material/TextField';

const Register = () => {

    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return
        }

        e.preventDefault();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <video autoPlay loop muted className='login-vdo' src={logvdo} type='video/mp4'></video>
                    </div>
                    <div className="col-md-6 login-form mt-5">
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                name="email"
                                type='email'
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                name="password2"
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <br />
                            <button type="submit">Login</button>
                            <Link to="/login">Already Registerd? Please Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;