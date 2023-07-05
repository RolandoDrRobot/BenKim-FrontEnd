import React from 'react';
import Navbar from '../Navbar/index';
import Hero from '../Hero/index'
import BukeleTableHeader from '../BukeleTableHeader/index';
import Purchase from '../Purchase/index';
import NewPurchase from '../NewPurchase/index';

function BukeleTable() {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <div>
          <Hero />
          <NewPurchase />
          <BukeleTableHeader />
          <Purchase />
        </div>
      </div>
    </>
  )
}

export default BukeleTable;
