import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { globalContext } from '../../hooks/appContext';
import Loading from '../../components/Loading/index';

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

  useEffect(() => {
    if (userID) loadPurcharses(userID);
  }, [userID]);

  return (
    isLoading === true ? <Loading /> :
    <>
      {
        purcharses.map(function (purchase: any, i: any) {
          return (
            <div key={i} className="table-row row">
              <div className='col-2'>
                <p>📆 {toDate(purchase.when._seconds)}</p>
                <p>⏰ {toTime(purchase.when._seconds)}</p>
              </div>
              <div className='col-2'>
                <p>${purchase.purchasePrice}</p>
              </div>
              <div className='col-2'>
                <p>₿{purchase.amount}</p>
              </div>
              <div className='col-2'>
                <p>${purchase.cost.toFixed(2)}</p>
              </div>
              <div className='col-2'>
                <p>${purchase.currentValue.toFixed(2)}</p>
              </div>
              <div className='col-2'>
                <p>{purchase.valueCostComparison.percentage.toFixed(2)}</p>
                <p>{purchase.valueCostComparison.money.toFixed(2)}</p>
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
        </div>
        <div className='col-2'>
          <h3>₿{totals.totalAmount}</h3>
        </div>
        <div className='col-2'>
          <h3>${totals.totalCost.toFixed(2)}</h3>
        </div>
        <div className='col-2'>
          <h3>${totals.totalCurrentValue.toFixed(2)}</h3>
        </div>
        <div className='col-2'>
          <h3>{totals.totalValueCostComparison.toFixed(2)}</h3>
        </div>
      </div>
    </>
  )
}

export default Purchase;
