// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";
import HeroButtons from "./HeroButtons";

function Footer() {
  return (
    <footer className="footer py-4">
      <HeroButtons />

      <div className="container">
        <div className="row align-items-center mt-5">
          {/* Left Side - Copyright */}

          {/* Bootstrao utility classes are explained in the README.md file go and read the details whats happening
          in these left and right div classes under ks-online section */}
          {/* <div className="col-12 col-md-6 text-center text-md-start order-2 order-md-1">
          -> Right now to have this copyright into right side of the site we changed the grid column into col-md-12,
           you can change it back to col-md-6*/}
           <div className="col-12 col-md-12 text-center text-md-end order-1 order-md-2"> 
            <div>
              <p className="mb-0">
                &copy;2026 KS Online. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side - Social Links */}
          {/* <div className="col-12 col-md-6 text-center text-md-end order-1 order-md-2 mb-2 mb-4 mb-md-0">
            <div className="social-links">
              <a
                href="https://wa.me/918640004161"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
