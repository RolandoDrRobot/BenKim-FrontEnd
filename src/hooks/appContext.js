import * as React from 'react';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [userID, setUserID] = React.useState('');
  const [name, setName] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [BTCPrice, setBTCPrice] = React.useState(0);
  const [purchases, setPurchases] = React.useState([]);
  const [totals, setTotals] = React.useState({
    totalAmount: 0,
    totalPurchasePrice: 0,
    totalCost: 0,
    totalCurrentValue: 0,
    totalValueCostComparison: {
      percentge: 0,
      money: 0
    }
  });

  return (
    <globalContext.Provider value={{
        userID,
        setUserID,
        name,
        setName,
        displayName,
        setDisplayName,
        BTCPrice,
        setBTCPrice,
        purchases,
        setPurchases,
        totals,
        setTotals
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
