// src/components/MobileFeatures.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/MobileFeature.css';

function MobileFeatures() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="mobile-features py-5" id="mobile-features">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Mobile Features</h2>
          <p>Experience the best of KS Online on-the-go</p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-card secure">
              <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Secure Platform</h3>
              <p>Advanced encryption & security</p>
              <div className="feature-glow"></div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card fast">
              <div className="feature-icon"><i className="fas fa-bolt"></i></div>
              <h3>Lightning Fast</h3>
              <p>Instant transactions & updates</p>
              <div className="feature-glow"></div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-card premium">
              <div className="feature-icon"><i className="fas fa-crown"></i></div>
              <h3>Premium Service</h3>
              <p>24/7 dedicated support</p>
              <div className="feature-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileFeatures;
