import React from 'react';
import githubIcon from '../images/github-icon.png';
import frontendmentorIcon from '../images/frontendmentor-icon.png';
import codewarsIcon from '../images/codewars-icon.png';
import codepenIcon from '../images/codepen-icon.png';
import fccIcon from '../images/fcc-icon.png';

const Footer = () => {
    return (
        <footer className = 'footer'>
            <ul className = 'socials'>
                <li>
                    <a href = 'https://github.com/Umlen'>
                        <img src = {githubIcon} />
                    </a>
                </li>
                <li>
                    <a href = 'https://www.frontendmentor.io/profile/Umlen'>
                        <img src = {frontendmentorIcon} />
                    </a>
                </li>
                <li>
                    <a href = 'https://www.codewars.com/users/Umlen'>
                        <img src = {codewarsIcon} />
                    </a>
                </li>
                <li>
                    <a href = 'https://codepen.io/Umlen'>
                        <img src = {codepenIcon} />
                    </a>
                </li>
                <li>
                    <a href = 'https://www.freecodecamp.org/fccfdeed59e-e282-4336-8e2e-6b896ef18f0f'>
                        <img src = {fccIcon} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;