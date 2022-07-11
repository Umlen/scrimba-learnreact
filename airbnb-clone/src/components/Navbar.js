import logo from '../images/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav className = 'navbar'>
            <img 
                src = {logo}
                alt = 'AirBnb logo'
                className = 'navbar--logo'
            />
        </nav>      
    );
};

export default Navbar;