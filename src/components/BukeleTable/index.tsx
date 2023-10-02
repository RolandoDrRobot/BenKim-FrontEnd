import React, { useContext } from 'react';
import Navbar from '../Navbar/index';
import JoyRideTour from '../JoyRideTour/index'
import Hero from '../Hero/index'
import BukeleTableHeader from '../BukeleTableHeader/index';
import Purchase from '../Purchase/index';
import NewPurchase from '../NewPurchase/index';
import Footer from '../Footer/index';
import { globalContext } from '../../hooks/appContext';

function BukeleTable() {
  const {
    userID,
    name,
    isTourOpen,
  } = useContext(globalContext);

  return (
    <>
      <Navbar />
      <div className='main-content'>
        <div>
          <JoyRideTour
            isTourOpen={isTourOpen} 
          />
          <Hero
            name={name}
            userID={userID}
           />
          <BukeleTableHeader />
          <Purchase 
            userID={userID}
          />
          <NewPurchase
            userID={userID}
          />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BukeleTable;
