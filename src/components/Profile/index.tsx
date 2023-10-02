import React, { useContext }  from 'react';
import monster from '../../assets/img/developermonster-face.png';
import { globalContext } from '../../hooks/appContext';
import './main.css';

function Profile() {
  const {
    userID,
    name,
    displayName,
    photo,
    email
  } = useContext(globalContext);

  return (
    <>
      <section className="cover profile">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <div className="slider-content text-center">
                <img src={photo} width='100' height='100' />
                <h2 className="tlt fix" data-in-effect="fadeInLeft"><span>{name}</span></h2>
                <p className="wow fadeInUp" data-wow-delay="2s">{email}</p>
                <div className='purchase-button'>
                  <button>Delete Account <i className="fa-solid fa-delete-left"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile;
