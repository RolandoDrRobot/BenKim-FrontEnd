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
    photo,
    isTourOpen,
    purchases,
    totals,
    setPurchases,
    setTotals,
    setIsTourOpen
  } = useContext(globalContext);

  return (
    <>
      <Navbar 
        name={name} 
        photo={photo}
        setIsTourOpen={setIsTourOpen}
      />
      <div className='main-content'>
        <div>
          <JoyRideTour
            isTourOpen={isTourOpen} 
          />
          <Hero
            name={name}
            totals={totals}
           />
          <BukeleTableHeader />
          <Purchase 
            userID={userID}
            purchases={purchases}
            totals={totals}
            setPurchases={setPurchases}
            setTotals={setTotals}
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
