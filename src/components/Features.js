// src/components/Features.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Features.css';

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="features-section py-5" id="features">
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>Premium Features</h2>
          <p>Experience the excellence of KS Online</p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-card secure">
              <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
              <h4>Secure Platform</h4>
              <p>Bank-grade security for all transactions</p>
              <div className="feature-glow"></div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-card fast">
              <div className="feature-icon"><i className="fas fa-bolt"></i></div>
              <h4>Instant Results</h4>
              <p>Real-time updates and instant payouts</p>
              <div className="feature-glow"></div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-card premium">
              <div className="feature-icon"><i className="fas fa-headset"></i></div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer assistance</p>
              <div className="feature-glow"></div>
            </div>
          </div>

          <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-mobile-alt"></i></div>
              <h4>Mobile First</h4>
              <p>Optimized for the best mobile experience</p>
              <div className="feature-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
