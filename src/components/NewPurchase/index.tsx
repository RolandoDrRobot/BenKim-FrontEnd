import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/index';
import { globalContext } from '../../hooks/appContext';
import './main.css'

function NewPurchase() {
  const { 
    userID
   } = React.useContext(globalContext);
  const navigate = useNavigate();
  let [isLoading, setIsLoading] = React.useState<boolean>(false);
  let [newPurchaseStatus, setNewPurchaseStatus] = React.useState<string>('When you record a purchase, you agree to complain with our TOS');

  const createPurchase = async (amount: number, userID: string) => {
    setIsLoading(true);
    await axios.post('http://localhost:443/createPurchase', { amount: amount, userID: userID }).then((response) => {
      setNewPurchaseStatus(response.data.status);
      if (response.data.status === 'Purchase created') {
        navigate('/dashboard', { replace: true });
      }
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
      <div className="newsletter-wrap">
        <div className="section-title newsletter-title">
          <h2>Register a <span>Bitcoin</span> purchase</h2>
        </div>
        <div className="newsletter-form">
          <form onSubmit={onSubmitForm}>
            <div className="newsletter-form-grp">
              <i className="fa-sharp fa-solid fa-bitcoin-sign"></i>
              <input placeholder="Enter amount" name="amount" type="number" required />
            </div>
            <button>Register purchase<i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        <strong><span className="alert-text">{newPurchaseStatus}</span></strong>
      </div>
      { isLoading === true ? <Loading /> : <></> }
    </>
  )
}

export default NewPurchase;
