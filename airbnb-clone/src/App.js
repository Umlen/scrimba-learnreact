import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Card 
                state = 'SOLD OUT'
                image = '../images/katie-zaferes.png'
                rating = '5.0'
                rewiewCount = '6'
                cuntry = 'USA'
                title = 'Life lessons with Katie Zaferes'
                price = '$136'
            />
        </>
    );
}

export default App;