import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { globalContext } from '../../hooks/appContext';
import Loading from '../../components/Loading/index';
import './main.css';

function Purchase() {
  const {
    userID
  } = useContext(globalContext);
  let [purcharses, setPurcharses] = useState<any>([]);
  let [totals, setTotals] = useState<any>({});
  let [isLoading, setIsLoading] = React.useState<boolean>(true);

  const loadPurcharses = async (userID: string) => {
    await axios.post('http://localhost:443/getPurcharses', { userID: userID }).then((response) => {
      setPurcharses(response.data.purchases);
      setTotals(response.data.totals)
      setIsLoading(false);
    });
  }

  function toDate(secs: any) {
    var t = new Date(2011, 0, 1, 0, 0, 0, 0);
    t.setSeconds(secs);
    const date = {
      year: t.getFullYear(),
      month: t.getMonth() + 1,
      day: t.getDate(),
    };
    return date.day + '/' + date.month + '/' + date.year;
  }

  function toTime(secs: any) {
    var t = new Date(2011, 0, 1, 0, 0, 0, 0);
    t.setSeconds(secs);
    const date = {
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds(),
    };
    return date.hour + ':' + date.minute + ':' + date.second;
  }

  function parseToCurrency(amount:any) {
    return amount.toLocaleString('es-ES', { style: 'currency', currency: 'USD' })
  }

  function winOrLost(number:any) {
    let winOrLost = 'none';
    if (number > 0) winOrLost = 'win'
    if (number < 0) winOrLost = 'lost'
    return winOrLost
  }

  useEffect(() => {
    if (userID) loadPurcharses(userID);
  }, [userID]);

  return (
    isLoading === true ? <Loading /> :
    <>
      {
        purcharses.map(function (purchase: any, i: any) {
          return (
            <div key={i} className="table-row purcharse-row row">
              <div className='col-2'>
                <p>📆 {toDate(purchase.when._seconds)}</p>
                <p>⏰ {toTime(purchase.when._seconds)}</p>
              </div>
              <div className='col-2'>
                <p>{parseToCurrency(purchase.purchasePrice)}</p>
              </div>
              <div className='col-2'>
                <p className='yellow'>₿ {purchase.amount}</p>
              </div>
              <div className='col-2'>
                <p>{parseToCurrency(purchase.cost)}</p>
              </div>
              <div className='col-2'>
                <p>{parseToCurrency(purchase.currentValue)}</p>
              </div>
              <div className='col-2'>
                <p className={winOrLost(purchase.valueCostComparison.percentage)}>
                  %{purchase.valueCostComparison.percentage.toFixed(2)}
                </p>
                <p className={winOrLost(purchase.valueCostComparison.money)}>
                  {parseToCurrency(purchase.valueCostComparison.money)}
                </p>
              </div>
            </div>
          )
        })
      }
      <div className="table-row row">
        <div className='col-2'>
          <h3>TOTALS</h3>
        </div>
        <div className='col-2'>
          <h3>{parseToCurrency(totals.totalPurchasePrice)}</h3>
        </div>
        <div className='col-2'>
          <h3>₿ {totals.totalAmount}</h3>
        </div>
        <div className='col-2'>
          <h3>{parseToCurrency(totals.totalCost)}</h3>
        </div>
        <div className='col-2'>
          <h3>{parseToCurrency(totals.totalCurrentValue)}</h3>
        </div>
        <div className='col-2'>
          <h3 className={winOrLost(totals.totalValueCostComparison.percentge)}>
            %{totals.totalValueCostComparison.percentge.toFixed(2)}
          </h3>
          <h3 className={winOrLost(totals.totalValueCostComparison.money)}>
            {parseToCurrency(totals.totalValueCostComparison.money)}
          </h3>
        </div>
      </div>
    </>
  )
}

export default Purchase;
