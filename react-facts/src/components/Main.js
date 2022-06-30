import React from "react";

const Main = () => {
    return (
        <main className = 'maincontent'>
            <h1 className = 'maincontent--header'>Fun facts about React</h1>  
            <ul className = 'maincontent--list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>   
    );      
};

export default Main;