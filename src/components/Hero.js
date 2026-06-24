// src/components/Hero.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import HeroButtons from "./HeroButtons";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const playAudio = () => {
    const audio = document.getElementById("clickSound");
    if (audio) audio.play();
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        {/*  If you want to learn what's happening in to the classnames below then go and read the README.md file 
        where i have explained the bootstrap utility classes used in this project in detail under ks-online section  */}

        <div className="row align-items-center">
          {/* Left Content */}
          <div
            className="col-lg-6 col-md-12 text-center text-lg-start"
            data-aos="fade-right"
          >
            <div className="hero-content">
              <div className="brand-logo" data-aos="fade-down">
                <img
                  src="/ks-online/images/694f656f-1f38-4499-b390-1bb90be6fc93.png"
                  alt="KS Online Logo"
                  className="img-fluid"
                />
              </div>
              <h1 className="hero-title">
                Experience Luxury Gaming Excellence
              </h1>
              <p className="hero-subtitle">
                Welcome to KS Online – Where Precision Meets Fortune
              </p>

              {/* Features */}
              <div className="hero-features">
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Secure</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-bolt"></i>
                  <span>Fast</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-crown"></i>
                  <span>Premium</span>
                </div>
              </div>

              {/* Buttons */}
              <HeroButtons />
            </div>
          </div>

          {/* Right Image */}
          <div
            className="col-lg-6 col-md-12 text-center mt-5 mt-lg-0"
            data-aos="fade-left"
          >
            <div className="hero-image">
              <div className="app-showcase">
                <div className="phone-frame">
                  <a href="/KSOnline.apk" onClick={playAudio}>
                    <img
                      src="/ks-online/images/girl.jpeg"
                      alt="KS Online App"
                      className="app-screen"
                    />
                  </a>
                  <audio id="clickSound">
                    <source src="/Hey.m4a" type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
