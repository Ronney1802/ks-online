// src/components/GameRates.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/GameRates.css';

function GameRates() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="game-rates-section py-5" id="game-rates">
      <div className="container">

        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Premium Game Rates</h2>
          <p>Experience unmatched winning opportunities with our competitive rates</p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4 text-center">
          
          {/* Single Digit */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="game-card">
              <div className="game-card-header">
                <i className="fas fa-star"></i>
                <h3 className="game-card-title">Single Digit</h3>
              </div>
              <div className="game-card-body">
                <ul className="rate-list">
                  <li>
                    <span>Single</span>
                    <span>10 → 95</span>
                  </li>
                  <li><span>Jodi</span><span>10 → 950</span></li>
                  <li><span>Single Patti</span><span>10 → 1500</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Double Patti */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="game-card">
              <div className="game-card-header">
                <i className="fas fa-crown"></i>
                <h3 className="game-card-title">Double Patti</h3>
              </div>
              <div className="game-card-body">
                <ul className="rate-list">
                  <li><span>Double Patti</span><span>10 → 3000</span></li>
                  <li><span>Triple Patti</span><span>10 → 6000</span></li>
                  <li><span>Half Sangam</span><span>10 → 12000</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Games */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="game-card">
              <div className="game-card-header">
                <i className="fas fa-gem"></i>
                <h3 className="game-card-title">Premium Games</h3>
              </div>
              <div className="game-card-body">
                <ul className="rate-list">
                  <li><span>Full Sangam</span><span>10 → 120000</span></li>
                  <li><span>Jackpot</span><span>10 → 1000</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Starline Games */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="game-card">
              <div className="game-card-header">
                <i className="fas fa-gem"></i>
                <h3 className="game-card-title">Starline Games</h3>
              </div>
              <div className="game-card-body">
                <ul className="rate-list">
                  <li><span>Single Ank</span><span>10 → 100</span></li>
                  <li><span>SP</span><span>10 → 1500</span></li>
                  <li><span>DP</span><span>10 → 3000</span></li>
                  <li><span>TP</span><span>10 → 6000</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GameRates;
