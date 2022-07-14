import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
    let cards = data.map(item => {
        return (
            <Card 
                key = {item.id}
                state = {item.state}
                image = {item.coverImg}
                rating = {item.stats.rating}
                rewiewCount = {item.stats.reviewCount}
                country = {item.location}
                title = {item.title}
                price = {item.price}
            />
        );
    });

    return (
        <>
            <Navbar />
            <Hero />
            {cards}
        </>
    );
}

export default App;