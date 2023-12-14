import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/MyNavbar.jsx';
import Footer from './component/Footer.jsx';
import Card from './component/Card.jsx';
import CountSection from './component/countSection';
import FAQApp from './component/Aboutus.jsx';
import MyCarousel from './component/Ncarousal';
import Videocomponent from './component/VideoComponent';
import Aboutus from './component/Aboutus.jsx';
import BackgroundSection from './component/BackgroundSection';
import Location from './component/Locations.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <div id="background-section"> {/* Use the same ID as in the ScrollLink */}
          <BackgroundSection />
        </div>
        <div id="video-section"> {/* Use the same ID as in the ScrollLink */}
          <Videocomponent />
        </div>
        <div className="card-container">
          <Card />
        </div>
        <div id="about-section">
        <CountSection />
        </div>
        <div id="faq-section">
          <Aboutus/>
        </div>
        <div id="footer-section"> {/* Use the same ID as in the ScrollLink */}
          <Footer />
        </div>
      <>

      
    <Location/>


      </>
       
      </Router>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
