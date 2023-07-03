import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from '../../hooks/appContext';
import monster from '../../assets/img/developermonster-face.png';
import loadingIcon from '../../assets/img/loading.png';
import './main.css';

function Navbar() {
  const {
    name
  } = useContext(globalContext);

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center mb-2">
            <a href="https://developermonster.com/"><img src={monster} height="70" alt="Logo" /></a>
            <h2>Monster <span>Bitcoin</span></h2>
          </div>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src={loadingIcon} width="35" height="35" alt="" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><p className='nav-items'>👑 {name}</p></li>
              <li className="nav-item"><Link to="/" className='nav-items'>🎯 Logout</Link></li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
