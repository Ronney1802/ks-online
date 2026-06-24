// src/components/GameRatesGrid.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/GameRatesGrid.css";

function GameRatesGrid() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="game-rates-section py-5" id="rates">
      <div className="container">
        {/* Section Title */}
        <div className="section-title mb-5" data-aos="fade-up">
          <h2>Game Rates</h2>
          <p>Experience Premium Gaming with Competitive Rates</p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {/* Single Digit */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                <i className="fas fa-dice"></i>
              </div>
              <h4>Single Digit</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">95</span>
                </div>
              </div>
            </div>
          </div>

          {/* Jodi - Featured */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="rate-card featured">
              <span className="featured-tag">Popular Choice</span>
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h4>Jodi</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">950</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single Pana */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4>Single Pana</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">1500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Double Pana */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h4>Double Pana</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">3000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Triple Pana */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <h4>Triple Pana</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">6000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Half Sangam */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Half Sangam</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">12000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Sangam */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="700">
            <div className="rate-card">
              <div className="rate-header">
                <div className="rate-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Full Sangam</h4>
              </div>
              <div className="rate-amount">
                <div className="bet-wrapper">
                  <span className="currency">₹</span>
                  <span className="bet">10</span>
                </div>
                <i className="fas fa-arrow-right arrow"></i>
                <div className="win-wrapper">
                  <span className="currency">₹</span>
                  <span className="win">120000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="rates-info">
            Minimum bet amount starts from ₹5. Maximum winning amount may vary.
          </p>
          <a href="https://ksonline-production.up.railway.app/ksonline/api/app/download/ksonline.apk">
            <button className="play-btn mt-4">
              <i className="fas fa-play-circle me-2"></i>
              Start Playing Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GameRatesGrid;
