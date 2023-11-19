import Card from './components/Card';
import './App.css'
import sedan from './assets/images/icon-sedans.svg';
import suv from './assets/images/icon-suvs.svg';
import luxury from './assets/images/icon-luxury.svg';

function App() {
  return (
    <div className="card-container">
      <Card icons={sedan} title="Sedan" body="Choose a Sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on the next road trip" bgcolor="color1" btnText='color1'/>
      <Card icons={suv} title="SUV" body="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacations and off-road adventures" bgcolor="color2" btnText='color2'/>
      <Card icons={luxury} title="Luxury" body="Cruise in the best car brands without bloated prices. Enjoy the enhanced comfort of a luxury rental arrive" bgcolor="color3" btnText='color3'/>
      
    </div>
  );
}

export default App;
