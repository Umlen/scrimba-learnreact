import React from "react";
import reactLogo from '../images/react-logo.png';

 const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <div className = 'navbar--logo'>
                <img className = 'navbar--logo_img' src = {reactLogo} alt = 'react-logo' />
                <h3 className = 'navbar--logo_text'>ReactFacts</h3>
            </div>
            <h4 className = 'navbar--title'>React Course - Project 1</h4>
        </nav>

    );
};

export default Navbar;