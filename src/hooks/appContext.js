import * as React from 'react';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [userID, setUserID] = React.useState('');
  const [name, setName] = React.useState('');
  const [BTCPrice, setBTCPrice] = React.useState(0);

  return (
    <globalContext.Provider value={{
        userID,
        setUserID,
        name,
        setName,
        BTCPrice,
        setBTCPrice
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
