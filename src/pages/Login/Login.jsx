import { Box, Grid, TextField } from '@mui/material';
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import image1 from '../../images/image1.jfif';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../hooks/useAuth';
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleFormSubmit = e => {
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history);
    }

    return (
        <Box className='bg-slate-900 px-20 py-40 text-white'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={image1} width='100%' className='rounded-lg ' alt="" />
                </Grid>
                <Grid item xs={12} md={6} className='bg-slate-800 text-center mt-5 rounded-lg'>
                    <h2 className='text-4xl py-2'>Login</h2>
                    <h4 className='text-xl'>Manage your business with our automated inventory management system</h4>
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            sx={{ width: '50%', m: 1 }}
                            variant="standard"
                            type="email"
                            name="email"
                        />
                        <TextField
                            id="standard-basic1"
                            label="Your Password"
                            sx={{ width: '50%', m: 1 }}
                            variant="standard"
                            type="password"
                            name="password"
                        />
                        <br />
                        <button className="border-2 rounded px-2 py-2 mr-3 border-blue-300 hover:bg-blue-500"> <LoginIcon /> Log In </button>
                        <button onClick={handleGoogleSignIn} className="border-2 rounded px-2 py-2 border-blue-300 hover:bg-blue-500"> <GoogleIcon /> Log In With Google </button>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;