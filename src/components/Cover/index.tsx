import React from 'react';
import loginButton from '../../assets/img/google button.png';
import './main.css';
import FooterApp from '../FooterApp';

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
      <FooterApp />
    </>
  )
}

export default Cover;
