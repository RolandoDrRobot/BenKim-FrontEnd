import React from 'react';
import './main.css';

function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='d-flex justify-content-between'>
          <div color='col-4'>
            <span>Rolando Arguello Portfolio Tracker</span>
            <h1><strong>$ 87.000.000 USD</strong></h1>
            <span>₿2 836</span>
            <span className='m-3'>Invested $5,000</span>
            <span>Performance 25.45%</span>
          </div>
          <div className='col-4'>
            <div className="footer-widget">
              <div className="fw-title mb-4">
                <h5>Follow Monster <span>Bitcoin</span></h5>
              </div>
              <div className="footer-social">
                <ul>
                  <li><a href="https://github.com/RolandoDrRobot/" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/rolando-arguello-531942186/" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://www.instagram.com/rolo.world/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="https://medium.com/@rolandoarguello" target="_blank" rel="noopener"><i className="fab fa-medium"></i></a></li>
                  <li><a href="https://twitter.com/RoloArguelloDev" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
