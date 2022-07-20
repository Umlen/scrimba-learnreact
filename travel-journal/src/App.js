import Navbar from './components/Navbar';
import Place from './components/Place';
import placesData from './data';

function App() {
  return (
    <>
      <Navbar />
      <main className = 'maincontent'>
        {
          placesData.map(item => 
            <Place 
              key = {item.id}
              image = {item.imageUrl}
              name = {item.title}
              country = {item.location}
              googleMapUrl = {item.googleMapsUrl}
              startDate = {item.startDate}
              endDate = {item.endDate}
              description = {item.description}

            />
          )
        }
      </main>
    </>
  );
}

export default App;
