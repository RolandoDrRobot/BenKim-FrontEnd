import React from 'react';
import Navbar from '../Navbar/index';
import BukeleTableHeader from '../BukeleTableHeader/index';
import Purchase from '../Purchase/index';
import NewPurchase from '../NewPurchase/index';

function BukeleTable() {
  return (
    <>
      <Navbar />
      <div className='main-content'>
        <div>
          <BukeleTableHeader />
          <Purchase />
          <NewPurchase />
        </div>
      </div>
    </>
  )
}

export default BukeleTable;
