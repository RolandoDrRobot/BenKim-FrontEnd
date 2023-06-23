import React from 'react';
import Navbar from '../Navbar/index';
import BukeleTableHeader from '../BukeleTableHeader/index';
import Purchase from '../Purchase/index';
import NewPurchase from '../NewPurchase/index';
import Cover from '../Cover/index'

function BukeleTable() {
  return (
    <>
      {/* <Cover /> */}
      
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
