import React from 'react';
import monster from '../../assets/img/developermonster-face.png';
import './main.css';

function FooterApp() {
  return (
    <>
      <div className='footer pt-4 d-md-none'>
        <div className="footer-widget p-3">
            <div className="footer-logo d-flex justify-content-center align-items-center pb-4">
              <a href="https://rolandoarguello.com/"><img src={monster} height="70" alt="Logo" /></a>
              <h2>Monster <span>Bitcoins</span></h2>
            </div>
            <div className="footer-text">
              <p>Welcome to your Bitcoin performance tracker, this app is was made for hodl 🐲👑</p>
            </div>
          </div>
        <div className="footer-widget d-md-none">
          <div className="footer-social">
            <ul>
              <li><a href="https://medium.com/@rolandoarguello" target="_blank" rel="noopener"><i className="fab fa-medium"></i></a></li>
              <li><a href="https://twitter.com/RoloArguelloDev" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/in/rolando-arguello-531942186/" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="https://www.instagram.com/rolo.world/" target="_blank" rel="noopener"><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="fw-title mb-2">
            <h5>Let's Connect! <span className='btc'>Get in Touch</span></h5>
          </div>
        </div>
        <div className="copyright-wrap">
          <div>
            <p>Copyright © 2023 <a href="https://rolandoarguello.com/">Monster Bitcoins</a> All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterApp;
