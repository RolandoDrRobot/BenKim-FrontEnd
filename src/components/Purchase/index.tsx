import React from 'react';
import Loading from '../Loading/index';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { usePurchasesAndTotals } from '../../hooks/useAppData';
import closeIcon from '../../assets/img/close2.png';
import './main.css';

interface PurchaseProps {
  userID: string;
}

function Purchase({ userID }: PurchaseProps) {
  const alert = useAlert();
  const { purchases, totals, isLoading } = usePurchasesAndTotals(userID);

  function toDate(when: any) {
    const date = new Date(when);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Los meses comienzan desde 0, por lo que se suma 1
    const day = date.getDate();

    return day + '/' + month + '/' + year;
  }

  function toTime(when: any) {
    const time = new Date(when);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return hour + ':' + minute + ':' + second;
  }

  function parseToCurrency(amount:any) {
    return amount ? amount.toLocaleString('es-ES', { style: 'currency', currency: 'USD' }) : 0
  }

  function winOrLost(number:any) {
    let winOrLost = 'none';
    if (number > 0) winOrLost = 'win'
    if (number < 0) winOrLost = 'lost'
    return winOrLost
  }

  const removePurchase = async (purchaseID:String) => {
    await axios.post('http://localhost:443/removePurchase', { purchaseID: purchaseID }).then((response) => {
      alert.show(response.data.status);
    }).then(() => {
      setTimeout(() => { window.location.reload() }, 3000);
    });
  }

  return (
    <>
      {
        isLoading === true ? <Loading /> :
        purchases.map(function (purchase: any, i: any) {
          return (
            <div id='purchase-item' key={i} className="table-row purcharse-row row align-items-end">
              <div className='col-4 col-md-2'>
                <p><i className="fa-solid fa-calendar-days"></i> {toDate(purchase.when)}</p>
                <p><i className="fa-sharp fa-solid fa-clock"></i> {toTime(purchase.when)}</p>
              </div>
              <div className='col-4 col-md-2'>
                <p>{parseToCurrency(parseFloat(purchase.purchasePrice))}</p>
              </div>
              <div className='col-4 col-md-2'>
                <p className='yellow'>₿ {purchase.amount}</p>
              </div>
              <div className='col-4 col-md-2'>
                <p>{parseToCurrency(purchase.cost)}</p>
              </div>
              <div className='col-4 col-md-2'>
                <p>{parseToCurrency(purchase.currentValue)}</p>
              </div>
              <div className='col-4 col-md-2'>
                <p className={winOrLost(purchase.valueCostComparison.percentage)}>
                  {purchase.valueCostComparison.percentage.toFixed(2)}%
                </p>
                <p className={winOrLost(purchase.valueCostComparison.money)}>
                  {parseToCurrency(purchase.valueCostComparison.money)}
                </p>
              </div>
              <img src={closeIcon} className='close-icon' width='25' data-toggle="collapse" data-target={'#'+i} aria-expanded="false" aria-controls={i} />
              <div id={i} className='close-section collapse'>
                <div className='purchase-button'>
                  <span className='d-none d-md-block'>Do you want to cash out these bitcoins?</span>
                  <button onClick={() => removePurchase(purchase.purchaseID)}>Yes</button>
                  <span className='d-md-none'>Do you want to cash out these bitcoins?</span>
                </div>
              </div>
            </div>
          )
        })
      }
      {
        totals.totalAmount == 0 ? <></> :
          <div id='totals' className="table-row row align-items-center mb-5">
            <div className='col-4 col-md-2'>
              <h3>TOTALS</h3>
            </div>
            <div className='col-4 col-md-2'>
              <h3>{parseToCurrency(totals.totalPurchasePrice)}</h3>
            </div>
            <div className='col-4 col-md-2'>
              <h3>₿ {totals.totalAmount.toFixed(4)}</h3>
            </div>
            <div className='col-4 col-md-2'>
              <h3>{parseToCurrency(totals.totalCost)}</h3>
            </div>
            <div className='col-4 col-md-2'>
              <h3>{parseToCurrency(totals.totalCurrentValue)}</h3>
            </div>
            <div className='col-4 col-md-2'>
              <h3 className={winOrLost(totals.totalValueCostComparison.percentge)}>
                {totals.totalValueCostComparison.percentge.toFixed(2)}%
              </h3>
              <h3 className={winOrLost(totals.totalValueCostComparison.money)}>
                {parseToCurrency(totals.totalValueCostComparison.money)}
              </h3>
            </div>
          </div>
        }
    </>
  )
}

export default Purchase;
