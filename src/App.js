import './App.css';
import sedanIcon from './images/icon-sedans.svg';
import suvIcon from './images/icon-suvs.svg';
import luxuryIcon from './images/icon-luxury.svg';

function App() {
  return (
    <main>
      <div id="backdrop">
        <div id="card">
          <div className="info" id="sedan-info">
            <div className="top-image">
              <img src={sedanIcon} alt="sedan" className="carIcon"></img>
            </div>
            <h2 className="title">SEDANS</h2>
            <p className="description">
              Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="learnMore" id="sedan-button">Learn More</button>
          </div>
          <div className="info" id="suv-info">
            <div className="top-image">
              <img src={suvIcon} alt="suv" className="carIcon"></img>
            </div>
            <h2 className="title">SUVS</h2>
            <p className="description">
              Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
            </p>
            <button className="learnMore" id="suv-button">Learn More</button>
          </div>
          <div className="info" id="luxury-info">
            <div className="top-image">
              <img src={luxuryIcon} alt="luxury" className="carIcon"></img>
            </div>
            <h2 className="title">LUXURY</h2>
            <p className="description">
              Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className="learnMore" id="luxury-button">Learn More</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
