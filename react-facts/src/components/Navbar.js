import React from "react";
import reactLogo from '../images/react-logo.png';

 const Navbar = () => {
    return (
        <nav>
            <img width = '40px' src = {reactLogo} alt = 'react-logo' />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>

    );
};

export default Navbar;