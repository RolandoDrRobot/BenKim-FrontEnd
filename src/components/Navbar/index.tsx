import React, { useContext }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { globalContext } from '../../hooks/appContext';
import monster from '../../assets/img/developermonster-face.png';
import bitcoin from '../../assets/img/bitcoin.png';
import power from '../../assets/img/power.png';
import loadingIcon from '../../assets/img/loading.png';
import './main.css';

function Navbar() {
  const {
    name,
    BTCPrice,
    setBTCPrice,
  } = useContext(globalContext);

  function parseToCurrency(amount:any) {
    return amount ? amount.toLocaleString('es-ES', { style: 'currency', currency: 'USD' }) : 0
  }

  React.useEffect(() => {
    const setBTC= async () => {
      try {
        await axios.get('http://localhost:443/fetchBtcPrice').then((response) => {
          setBTCPrice(response.data);
        });
      } catch (e) {
        console.log(e);
      }
    }
    setBTC();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center mb-2">
            <a href="https://developermonster.com/"><img src={monster} alt="Logo" /></a>
            <h2>Monster <span>Bitcoins</span></h2>
          </div>
          <div className='d-flex align-items-center'>
            <div className='bitcoin-price d-none d-md-block'>
              <strong>{parseToCurrency(BTCPrice)}</strong>
              <img src={bitcoin} width="35" height="35" className='bitcoin-price-img' />
            </div>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <img src={loadingIcon} width="35" height="35" alt="" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-items d-md-none">
                <div className='nav-items'>
                  <img src={bitcoin} width="35" height="35" className='bitcoin-price-img-mobile mr-2' />
                  <strong>{parseToCurrency(BTCPrice)}</strong>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className='nav-items'>
                  <img src={power} width="35" height="35" className='logout mr-2' />
                  <strong>Logout</strong>
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
