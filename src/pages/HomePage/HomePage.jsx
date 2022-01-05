import React from 'react';
import Login from '../Login/Login';
import Navigation from '../Navigation/Navigation';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Login></Login>
        </div>
    );
};

export default HomePage;