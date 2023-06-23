import React from 'react';

function BukeleTableHeader() {
  return (
    <>
      <div className="table-row row">
        <div className='col-2'>
          <h2>WHEN</h2>
          <label>UTC TIMEZONE NEWEST FIRST</label>
        </div>
        <div className='col-2'>
          <h2>PURCHASE PRICE</h2>
          <label>AVERAGE $ / ₿ THAT DAY</label>
        </div>
        <div className='col-2'>
          <h2>AMOUNT</h2>
          <label>AMOUNT SAVED BITCOIN</label>
        </div>
        <div className='col-2'>
          <h2>COST</h2>
          <label>HISTORIC PRICE * AMOUNT</label>
        </div>
        <div className='col-2'>
          <h2>CURRENT VALUE</h2>
          <label>CURRENT PRICE * AMOUNT</label>
        </div>
        <div className='col-2'>
          <h2>P/L</h2>
          <label>VALUE/COST COMPARISON</label>
        </div>
      </div>
    </>
  )
}

export default BukeleTableHeader;
