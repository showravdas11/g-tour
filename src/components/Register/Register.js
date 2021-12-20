import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import logvdo from '../../Reset password (2).mp4'
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/UseAuth';
import { Alert, LinearProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const [loginData, setLoginData] = useState({})

    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

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
        registerUser(loginData.email, loginData.password, loginData.name, history)
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
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Name"
                                variant="standard"
                                name="name"
                                onChange={handleOnChange}
                            />
                            <br />
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

                            <div className="rgi">
                                <button type="submit" className="regi-btn">Register</button>
                            </div>
                            <p><Link to="/login" className="line text-center">Already Registerd? Please Login</Link></p>

                        </form>}
                        {isLoading && <LinearProgress color="success" />}
                        {user?.email && <Alert severity="success">Use Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;