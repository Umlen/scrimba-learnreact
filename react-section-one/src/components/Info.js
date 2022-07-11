import React from 'react';
import myPhoto from '../images/my-photo.png';
import mailIcon from '../images/mail-icon.png';

const Info = () => {
    return (
        <section className = 'info'>
            <img 
                src = {myPhoto} 
                alt = 'just me looking at a camera' 
                className = 'info--img'
            />
            <h1 className = 'info--header'>Viktor Patrin</h1>
            <h2 className = 'info--subheader'>Jr. Frontend Developer</h2>
            <a className = 'info--mailBtn' href = 'mailto:victorpatrin@gmail.com'>
                <img 
                    src = {mailIcon} 
                    alt = 'mail icon' 
                    className = 'info--mailBtn_mailIcon'
                />
                email
            </a>
        </section>
    ); 
};

export default Info;