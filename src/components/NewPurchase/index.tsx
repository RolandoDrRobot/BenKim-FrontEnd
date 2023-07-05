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

  const createPurchase = async (amount: number, userID: string) => {
    setIsLoading(true);
    await axios.post('http://localhost:443/createPurchase', { amount: amount, userID: userID }).then((response) => {
      alert.show('Purchase Created')
    }).then(() => {
      setIsLoading(false);
    });
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      amount: { value: number };
    };
    const amount = target.amount.value; 
    createPurchase(amount, userID);
  }

  return (
    <>
      <div className="row newsletter-wrap">
        <div className="col-12 col-md-5 section-title newsletter-title">
          <h2>Register a <span>Bitcoin</span> purchase</h2>
        </div>
        <div className="col-12 col-md-7 newsletter-form d-md-flex justify-content-end">
          <form onSubmit={onSubmitForm}>
            <div className="newsletter-form-grp">
              <i className="fa-sharp fa-solid fa-bitcoin-sign"></i>
              <input placeholder="Enter amount" name="amount" type="number" step="0.0001" required />
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
