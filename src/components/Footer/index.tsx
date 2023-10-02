import React from 'react';
import cards from '../../assets/img/card_img.png';
import './main.css';

function Footer() {
  return (
    <>
      <div className='footer'>
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
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <p>Copyright © 2023 <a href="/dashboard">Monster Bitcoins</a> All rights reserved</p>
            </div>
            <div className="col-lg-4 col-md-5 d-none d-md-block">
              <img src={cards} height="15" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
