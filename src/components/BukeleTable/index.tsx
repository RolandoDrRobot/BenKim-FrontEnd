import React from 'react';
import Navbar from '../Navbar/index';
import JoyRideTour from '../JoyRideTour/index'
import Hero from '../Hero/index'
import BukeleTableHeader from '../BukeleTableHeader/index';
import Purchase from '../Purchase/index';
import NewPurchase from '../NewPurchase/index';
import Footer from '../Footer/index';

function BukeleTable() {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <div>
          <JoyRideTour />
          <Hero />
          <BukeleTableHeader />
          <Purchase />
          <NewPurchase />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BukeleTable;
