import React, { useState, useContext } from "react";
import Joyride, { STATUS } from "react-joyride";
import { globalContext } from '../../hooks/appContext';
import './main.css';

function JoyRideTour() {
  const {
    isTourOpen
  } = useContext(globalContext);

  return (
    <div>
      <Joyride
        continuous
        callback={() => { }}
        run={isTourOpen}
        steps={[
          {
            content: <>
              <h2>Welcome to Monster Bitcoins!</h2>
              <label>Let's begin your journey</label>
            </>,
            locale: { skip: <strong>SKIP</strong> },
            placement: "center",
            target: "body"
          },
          {
            content: <>
              <h2>Here is an overview of your bitcoins</h2>
              <label>Current Value | Bitcoins Amount | Total Invested | Overall Performance</label>
            </>,
            placement: "bottom",
            target: "#wallet",
          },
          {
            content:
            <>
              <h2>Here you can create a new purchase</h2>
              <label>You can save your purchase with custom date and price</label>
            </>,
            placement: "bottom",
            target: "#purchase-btn",
          },
          {
            content: 
            <>
              <h2>This is what means each space in the purchase row</h2>
              <label>Once you register your purchase, you will see It here below</label>
            </>,
            placement: "bottom",
            target: "#table-title",
          },
          {
            content: 
            <>
              <h2>This is your purchase</h2>
              <label>You can close the purchase clicking the x in the corner</label>
            </>,
            placement: "bottom",
            target: "#purchase-item",
          },
          {
            content: 
            <>
              <h2>Your Overall Performance</h2>
            </>,
            placement: "bottom",
            target: "#totals",
          },
          {
            content: 
            <>
              <h2>Thank you for using <br/>Monster Bitcoins</h2>
              <label>If you have a question get in touch!</label>
            </>,
            locale: { skip: <strong>SKIP</strong> },
            placement: "center",
            target: "body"
          },
        ]}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
      />
    </div>
  );
}

export default JoyRideTour;
