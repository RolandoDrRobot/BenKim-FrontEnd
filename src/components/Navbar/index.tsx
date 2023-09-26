import React from 'react';
import { Link } from 'react-router-dom';
import monster from '../../assets/img/developermonster-face.png';
import bitcoin from '../../assets/img/bitcoin.png';
import power from '../../assets/img/power.png';
import tour from '../../assets/img/question.png';
import loadingIcon from '../../assets/img/loading.png';
import { useBTCPrice } from '../../hooks/useAppData';
import './main.css';

interface NavbarProps {
  name: string;
  photo: string;
  setIsTourOpen: Function;
}

function Navbar({ name, photo, setIsTourOpen }: NavbarProps) {
  const { btcPrice } = useBTCPrice();
  const [isNavCollapsed, setIsNavCollapsed] = React.useState(true);

  function startTour() {
    setIsNavCollapsed(false);
    setIsTourOpen(true);
  };

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center mb-2">
            <a href="https://developermonster.com/"><img src={monster} alt="Logo" /></a>
            <Link to="/dashboard">
              <h2>Monster <span>Bitcoins</span></h2>
            </Link>
          </div>
          <div className='d-flex align-items-center'>
            <div className='bitcoin-price d-none d-md-block'>
              <strong>$ {(btcPrice)}</strong>
              <img src={bitcoin} width="30" height="30" className='bitcoin-price-img' />
            </div>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation">
              <img src={loadingIcon} width="30" height="30" alt="" />
            </button>
          </div>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/user" className='nav-items'>
                  <img src={photo} width="30" height="30" className='logout mr-2' />
                  <strong>{name}</strong>
                </Link>
              </li>
              <li className="nav-items d-md-none">
                <div className='nav-items'>
                  <img src={bitcoin} width="30" height="30" className='bitcoin-price-img-mobile mr-2' />
                  <strong>$ {(btcPrice)}</strong>
                </div>
              </li>
              <li className="nav-item">
                <div className='nav-items' onClick={startTour}>
                  <img src={tour} width="30" height="30" className='logout mr-2' />
                  <strong>Want a tour?</strong>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/" className='nav-items'>
                  <img src={power} width="30" height="30" className='logout mr-2' />
                  <strong>Logout</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
