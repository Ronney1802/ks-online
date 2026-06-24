// src/components/HowToPlay.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/HowToPlay.css';

function HowToPlay() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="how-to-play py-5" id="how-to-play">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>How to Play</h2>
          <p>Start your premium gaming journey in 3 simple steps</p>
        </div>

        {/* Steps */}
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon"><i className="fas fa-download"></i></div>
              <h4>Download App</h4>
              <p>Download our premium app from the website</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon"><i className="fas fa-user-plus"></i></div>
              <h4>Create Account</h4>
              <p>Register with your details securely</p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon"><i className="fas fa-play-circle"></i></div>
              <h4>Start Playing</h4>
              <p>Choose your game and start winning</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HowToPlay;
