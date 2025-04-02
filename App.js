import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="section-timing-offers" id="timing-offers">
          <hr />
          <br />
          <br />
          <div className="container">
            <center><div className="timing-offers-content"></div></center> 
          </div>
        </section>
        <HeroSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;