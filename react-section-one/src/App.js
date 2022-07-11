import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './style.css';

const App = () => {
    return (
        <>
            <main className = 'maincontent'>
                <Info />
                <About />
                <Interests />
            </main>
            <Footer />
        </>
    ); 
};

export default App;