import React from 'react';
import loginButton from '../../assets/img/images/google button.png';
import './main.css'

function Cover() {
  return (
    <>
      <section className="cover">
        <div>
          <a href='http://localhost:443/auth/google'>
            <img src={loginButton} width="224" height="54" />
          </a>
        </div>
      </section>
    </>
  )
}

export default Cover;
