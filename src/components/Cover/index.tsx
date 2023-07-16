import React from 'react';
import loginButton from '../../assets/img/google button.png';
import monster from '../../assets/img/developermonster-face.png';
import './main.css';

function Cover() {
  function startCover() {
    localStorage.removeItem('user');
  }
  return (
    <>
      <section className="cover">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="slider-content text-center">
                <h6 className="wow fadeInDown" data-wow-delay=".2s">Track your BTC</h6>
                <h2 className="tlt fix" data-in-effect="fadeInLeft">Monster <span>Bitcoins</span></h2>
                <p className="wow fadeInUp" data-wow-delay="2s">
                  This is a private app and is still in development, When you sign in we save your email and name to give you a custom experience
                </p>
                <a href='http://localhost:443/auth/google' onClick={startCover}>
                  <img className='login' src={loginButton} width="224" height="54" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <li><a href="https://twitter.com/monsterbitcoins" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
          <div className="fw-title mb-2">
            <h5>Follow <span className='btc'>Monster Bitcoins</span></h5>
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

export default Cover;
