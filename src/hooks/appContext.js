import * as React from 'react';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [userID, setUserID] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <globalContext.Provider value={{
        userID,
        setUserID,
        name,
        setName
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
