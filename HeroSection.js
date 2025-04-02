import React from 'react';

function HeroSection() {
  const showTimings = () => {
    document.querySelector('.timing-offers-content').innerHTML = `
      <h2>Gym Timings</h2>
      <p>Monday to Friday: 6:00 AM - 10:00 PM</p>
      <p>Saturday: 8:00 AM - 8:00 PM</p>
      <p>Sunday: Closed</p>
    `;
  };

  const showOffers = () => {
    document.querySelector('.timing-offers-content').innerHTML = `
      <h2>Special Offers</h2>
      <p>Get 20% off on annual memberships</p>
      <p>Free personal training session on Registration</p>
      <p>Refer a friend and get one month free</p>
    `;
  };

  return (
    <section className="section-hero" id="section-hero">
      <div className="container hero-box">
        <div className="hero-image-content">
          <h1 className="heading">"Where fitness meets fusion, transformation begins."</h1>
          <p className="description">
            "Welcome to Fitness Fusion Gym, where we blend the best of fitness disciplines into one seamless experience. 
            Explore our diverse range of classes, including yoga, Pilates, cardio, strength training, and dance fusion workouts, 
            all designed to cater to your unique fitness goals. Our state-of-the-art facilities and experienced instructors 
            ensure an engaging and effective workout every time. Join our supportive community and embark on a journey to 
            holistic well-being. Your transformation starts here."
          </p>
          <div className="hero-box-buttons">
            <button onClick={showTimings}>Discover Classes</button>
            <button onClick={showOffers}>See Our Offerings</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;