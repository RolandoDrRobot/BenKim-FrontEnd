import React, { useContext } from 'react';
import { globalContext } from '../../hooks/appContext';
import './main.css';

function Hero() {
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
      <div className='hero'>
        <div className='stats row justify-content-between'>
          <div id="wallet" className='wallet col-12 col-md-6'>
            <span className='name'>{name}'s Portfolio Tracker</span>
            <h1>{parseToCurrency(totals.totalCurrentValue)}</h1>
            <span>₿ {totals.totalAmount.toFixed(4)}</span>
            <span className='m-3'>{parseToCurrency(totals.totalCost)}</span>
            <span> 
              <span className={winOrLost(totals.totalValueCostComparison.percentge) + ' m-2'}>
                {totals.totalValueCostComparison.percentge.toFixed(2)}%
              </span>
            </span>
          </div>
          <div className='d-none d-md-block col-md-4'>
            <div className="footer-widget">
              <div className="fw-title mb-4">
                <h5>Follow <span className='btc'>Monster Bitcoins</span></h5>
              </div>
              <div className="footer-social">
                <ul>
                  <li><a href="https://medium.com/@rolandoarguello" target="_blank" rel="noopener"><i className="fab fa-medium"></i></a></li>
                  <li><a href="https://twitter.com/monsterbitcoins" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
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
