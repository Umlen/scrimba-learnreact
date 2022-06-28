const Logo = () => {
    return (
        <img width = '40px' src = './react-logo.png' alt = 'react-logo' />
    );
};

const Header = () => {
    return (
        <h1>Fun facts about React</h1>  
    );
};

const List = () => {
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>    
    );
};

const Page = () => {
    return (
        <main>
            <Logo />
            <Header />
            <List />
        </main>
    );
};

ReactDOM.render(<Page />, document.getElementById('root'));
