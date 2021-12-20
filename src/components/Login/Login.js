import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logvdo from '../../Reset password (2).mp4'
import './Login.css'
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/UseAuth';
import { Alert, LinearProgress } from '@mui/material';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
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
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                name="email"
                                type='email'
                                onChange={handleOnChange}
                            />
                            <br />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                variant="standard"
                                type="password"
                                onChange={handleOnChange}
                            />
                            <br />
                            <button type="submit" className='Log-btn'>Login</button>
                            <br />
                            <Link to="/register" className='line'>New user? Please register</Link>
                        </form>}
                        {isLoading && <LinearProgress color="success" />}
                        {user?.email && <Alert severity="success">Use Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                        <div className='google'>
                            <button onClick={handleGoogleSignIn} className='google-btn'>Google Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;