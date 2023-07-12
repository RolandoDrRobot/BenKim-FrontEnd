import React, { useContext } from 'react';
import { globalContext } from '../../hooks/appContext';
import './main.css';

function Footer() {
  const {
    name,
    totals
  } = useContext(globalContext);

  function parseToCurrency(amount:any) {
    return amount ? amount.toLocaleString('es-ES', { style: 'currency', currency: 'USD' }) : 0;
  }

  function winOrLost(number:any) {
    let winOrLost = 'none';
    if (number > 0) winOrLost = 'win'
    if (number < 0) winOrLost = 'lost'
    return winOrLost
  }

  return (
    <>
      <div className='footer'>
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
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <p>Copyright © 2023 <a href="https://rolandoarguello.com/">Monster Bitcoins</a> All rights reserved</p>
            </div>
            <div className="col-lg-4 col-md-5 d-none d-md-block">
              <img src="https://rolandoarguello.com/wp-content/uploads/2023/05/card_img.png" height="15" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
