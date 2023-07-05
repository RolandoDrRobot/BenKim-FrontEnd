import React from 'react';
import loginButton from '../../assets/img/google button.png';
import './main.css';

function Cover() {
  function startCover() {
    localStorage.removeItem('user');
  }
  return (
    <>
      <section className="cover">
        <div>
          <a href='http://localhost:443/auth/google' onClick={startCover}>
            <img src={loginButton} width="224" height="54" />
          </a>
        </div>
      </section>
    </>
  )
}

export default Cover;
