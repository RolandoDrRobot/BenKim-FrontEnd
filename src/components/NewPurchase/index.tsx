import React from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert';
import { globalContext } from '../../hooks/appContext';
import Loading from '../Loading/index';
import './main.css'

function NewPurchase() {
  const { 
    userID
   } = React.useContext(globalContext);
  const alert = useAlert();
  let [isLoading, setIsLoading] = React.useState<boolean>(false);

  const createPurchase = async (amount: number, when: Date, price: number, userID: string) => {
    setIsLoading(true);
    await axios.post('http://localhost:443/createPurchase', { amount: amount, when: when, price: price, userID: userID  }).then((response) => {
      alert.show('Purchase Created')
    }).then(() => {
      setIsLoading(false);
    });
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      amount: { value: number };
      when: { value: Date };
      price: { value: number };
    };
    const date = target.when.value;
    createPurchase(target.amount.value, date, target.price.value, userID);
  }

  return (
    <>
      <div className="newsletter-wrap">
        <div className="newsletter-title" data-toggle="collapse" data-target="#purchase" aria-expanded="false" aria-controls="purchase">
          <h2>Register a <span>Bitcoin</span> purchase</h2>
        </div>
        <div className="newsletter-form collapse" id="purchase">
          <span className='advance-purchase'>Purchase price and date can be blank, we will take today's price and date</span>
          <form onSubmit={onSubmitForm} className='row justify-content-center'>
            <div className="newsletter-form-grp">
              <i className="fa-sharp fa-solid fa-bitcoin-sign"></i>
              <input placeholder="Enter amount" name="amount" type="number" step="0.0001" required />
            </div>
            <div className="newsletter-form-grp">
              <i className="fa-solid fa-dollar-sign"></i>
              <input placeholder="Purchase price" name="price" type="number" />
            </div>
            <div className="newsletter-form-grp">
              <i className="fa-regular fa-calendar"></i>
              <input placeholder="Enter date" name="when" type="date" />
            </div>
            <button>Register purchase<i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
      { isLoading === true ? <Loading /> : <></> }
    </>
  )
}

export default NewPurchase;
