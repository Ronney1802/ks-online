// src/components/HeroButtons.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HeroButtons.css";

function HeroButtons() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container">
      <div className="hero-buttons">
        <a
          href="https://ksonline-production.up.railway.app/ksonline/api/app/download/ksonline.apk"
          className="btn-neon"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <i className="fas fa-download"></i>
          <span>Download Now</span>
        </a>
        <a
          href="tel:+918640004161"
          className="btn-neon"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <i className="fas fa-phone-alt"></i>
          <span>Contact Us</span>
        </a>
        <a
          href="https://wa.me/918640004161"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <i className="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default HeroButtons;
